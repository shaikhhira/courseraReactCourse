
import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../SharedComponents/Dishes';
import Detaildish from './DishDetailComponent';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDishes: null
        };
    }

    onSelectedDishes(dishId) {
        this.setState({
            selectedDishes: dishId
        })
    }

    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand>Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onSelectedDishes(dishId)} />
                <Detaildish  selectedDishes={this.state.dishes.filter((dish) => dish.id === this.state.selectedDishes)[0]}
                 />
            </div>
        );
    }
}



export default Main;
