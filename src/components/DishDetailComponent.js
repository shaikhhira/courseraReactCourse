import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle ,BreadcrumbItem,Breadcrumb} from 'reactstrap';
import { List, ListInlineItem } from 'reactstrap';
import {Link} from 'react-router-dom';


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
                    <RenderComment comment={props.comment} />
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}



export default Detaildish;