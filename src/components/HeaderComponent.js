import React from 'react';
import { FormGroup, Input, Jumbotron, Label, NavItem } from 'reactstrap';
import { Navbar, NavbarBrand, Nav, NavbarToggler,Button,Collapse,Modal,ModalBody,ModalHeader ,Form} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen:false
        }
        this.isTogglerNav = this.isTogglerNav.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
    }

    isTogglerNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        });
    }
    handleLogin(event){
        this.toggleModal();
        alert("Username: " +this.username.value + "password: "+ this.password.value 
        + "Remember "+ this.remember.checked);
        event.preventDefault();
    }
    
    render() {
        return (
            <>
                <Navbar dark expand="md" >
                    <div className="container">
                        <NavbarToggler onClick={this.isTogglerNav} />
                        <NavbarBrand className="mr-auto"  >
                            <img src="assests/images/logo.png" width="30" height="41" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span>
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span>
                                        About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span>
                                        Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span>
                                        Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <Button outline className="fa fa-sign-in fa-lg" onClick={this.toggleModal} >Login</Button>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>

                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" name="username" id="username"
                                 innerRef={(input)=>this.username=input} ></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" name="password" id="password"
                                innerRef={(input)=>this.password=input} ></Input>
                            </FormGroup>
                            <FormGroup check>
                                <Label check></Label>
                                <Input type="checkbox" name="remember" id="remember"
                                innerRef={(input)=>this.remember=input} ></Input>
                                <strong>Remember Me?</strong>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary" >Sign in</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default Header;