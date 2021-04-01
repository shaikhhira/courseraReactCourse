import React from 'react';
import { Button, Modal, ModalBody, ModalHeader, Label, Col, Row } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';

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
        console.log("Current state is:" + JSON.stringify(values));
        alert("Current state is:" + JSON.stringify(values));
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
                                            required, maxLength: maxLength(15), minLength: minLength(2)
                                        }} />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        messages={{
                                            required: 'Required Field',
                                            maxLength: 'Maximum Length should be less than 15',
                                            minLength: 'Minimin Length should be greater than 2'
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
export default CommentForm;