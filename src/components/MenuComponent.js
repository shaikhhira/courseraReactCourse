import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';
import Detaildish from './DishDetailComponent';


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDishes: null
        };

    }

    onSelectedDishes(dish) {
        this.setState({
            selectedDishes: dish
        })
    }
    // renderDish(dish) {
    //     if (dish != null) {
    //         return (
    //             <div className="col-12 col-md-5 m-1 ">
    //                 <Card   >
    //                     <CardImg width="100%" src={dish.image} alt={dish.name} />
    //                     <CardBody >
    //                         <CardTitle >{dish.name}</CardTitle>
    //                         <CardText>{dish.description}</CardText>
    //                     </CardBody>
    //                 </Card>
    //             </div>
    //         );
    //     } else {
    //         return (
    //             <div></div>
    //         );

    //     }

    // }
    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onSelectedDishes(dish)}>
                        <CardImg  width="100%"src={dish.image} alt={dish.name} />
                        <CardImgOverlay >
                            <CardTitle >{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <Detaildish selectedDishes={this.state.selectedDishes}/>
            </div>
        );
    }
}

export default Menu;