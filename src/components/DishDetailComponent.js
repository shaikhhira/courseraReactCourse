import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, BreadcrumbItem, Breadcrumb,Button, Modal, ModalBody, ModalHeader, Label, Col, Row } from 'reactstrap';
import { List, ListInlineItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import { LocalForm, Control, Errors } from 'react-redux-form';

function RenderComment(props) {
    const comments = props.comment.map((comment) => {
        return (
            <div key={comment.id}>
                <List type="unstyled" >
                    <li>--{comment.comment}</li>
                    <List type="inline">
                        <ListInlineItem>{comment.author}</ListInlineItem>
                        <ListInlineItem>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</ListInlineItem>
                    </List>
                </List>
            </div>
        );
    })
    return (
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            {comments}
            <CommentForm dishId={props.dishId} addComment={props.addComment} />
        </div>
    );
}
function Detaildish(props) {
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1 ">
                        <Card>
                            <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
                            <CardBody>
                                <CardTitle>{props.dish.name}</CardTitle>
                                <CardText>{props.dish.description}</CardText>
                            </CardBody>

                        </Card>
                    </div>

                    <RenderComment comment={props.comment} 
                    dishId={props.dish.id} 
                    addComment={props.addComment} />
                </div>
            </div>
        );

    } else {
        return (
            <div></div>
        );
    }
}



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.togglerModal = this.togglerModal.bind(this);
    }
    togglerModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleSubmit(values) {
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    render() {
        return (
            <div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.togglerModal}>
                    <ModalHeader toggle={this.togglerModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col  >
                                    <Control.select model=".rating" className="form-control" name="rating" id="rating">
                                        <option>Select rating</option>
                                        <option>5</option>
                                        <option>4</option>
                                        <option>3</option>
                                        <option>2</option>
                                        <option>1</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" md={12} >Your Name</Label>
                                <Col  >
                                    <Control.text model=".author" name="author" id="author"
                                        className="form-control"
                                        validators={{
                                            required, maxLength: maxLength(15), minLength: minLength(3)
                                        }} />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        messages={{
                                            required: 'Required Field',
                                            maxLength: 'Maximum Length should be less than 15',
                                            minLength: 'Minimin Length should be greater than 3'
                                        }}
                                    ></Errors>
                                </Col>

                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Control.textarea model=".comment" name="comment" id="comment" className="form-control" rows="6"></Control.textarea>
                            </Row>
                            <Button type="submit" color="primary" >Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
                <Button outline className="fa fa-edit fa-lg" onClick={this.togglerModal} toggler={this.togglerModal} >Submit Comment</Button>
            </div>
        );
    }
}



export default Detaildish;