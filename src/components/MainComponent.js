
import React from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
                <Header/>
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onSelectedDishes(dishId)} />
                <Detaildish  selectedDishes={this.state.dishes.filter((dish) => dish.id === this.state.selectedDishes)[0]}/>
                <Footer/>
            </div>
        );
    }
}



export default Main;
