import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, CardSubtitle } from 'reactstrap';


function RenderCard(props) {
    return (
        <div>
            <Card>
                <CardImg src={props.item.image} alt={props.item.name} />
                <CardBody>
                    <CardTitle>{props.item.name}</CardTitle>
                    {props.item.designation ? <CardSubtitle>{props.item.designation}</CardSubtitle> : null}
                    <CardText>
                        {props.item.description}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
}
function Home(props) {
    return (
        <div className="container">
            <div className="row align-item-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;