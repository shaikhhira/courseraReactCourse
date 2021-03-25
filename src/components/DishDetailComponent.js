import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import { List, ListInlineItem } from 'reactstrap';


    function RenderComment(props) {
        const comments = props.selectedDishes.comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <List type="unstyled" >
                        <li>--{comment.comment}</li>
                        <List type="inline">
                            <ListInlineItem>{comment.author}</ListInlineItem>
                            <ListInlineItem>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</ListInlineItem>
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
 function Detaildish(props){
    if (props.selectedDishes != null) {
        return (
            <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1 ">
                    <Card>
                        <CardImg width="100%" src={props.selectedDishes.image} alt={props.selectedDishes.name} />
                        <CardBody>
                            <CardTitle>{props.selectedDishes.name}</CardTitle>
                            <CardText>{props.selectedDishes.description}</CardText>
                        </CardBody>

                    </Card>
                </div>
                <RenderComment selectedDishes={props.selectedDishes}/>
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