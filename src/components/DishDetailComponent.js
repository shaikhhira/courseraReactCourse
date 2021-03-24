import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import { List,ListInlineItem } from 'reactstrap';

class Detaildish extends React.Component {
    constructor(props) {
        super(props);
    }

    renderComment() {
        const comments = this.props.selectedDishes.comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <List type="unstyled" >
                        <li>--{comment.comment}</li>
                        <List type="inline">
                            <ListInlineItem>{comment.author}</ListInlineItem>
                            <ListInlineItem>{comment.date}</ListInlineItem>
                        </List>
                    </List>
                </div>
            );
        })
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {comments}
            </div>
        );

    }
    render() {

        if (this.props.selectedDishes != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1 ">
                        <Card>
                            <CardImg width="100%" src={this.props.selectedDishes.image} alt={this.props.selectedDishes.name} />
                            <CardBody>
                                <CardTitle>{this.props.selectedDishes.name}</CardTitle>
                                <CardText>{this.props.selectedDishes.description}</CardText>
                            </CardBody>

                        </Card>
                    </div>
                    {this.renderComment()}
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }

    }
}

export default Detaildish;