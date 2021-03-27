
import React from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../SharedComponents/Dishes';
import { PROMOTIONS } from '../SharedComponents/Promotions';
import { COMMENTS } from '../SharedComponents/Comment';
import { LEADERS } from '../SharedComponents/Leader';
import Detaildish from './DishDetailComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            promotions: PROMOTIONS,
            comments: COMMENTS,
            leaders: LEADERS
            // selectedDishes: null
        };
    }

    onSelectedDishes(dishId) {
        this.setState({
            selectedDishes: dishId
        })
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishWithId = ({ match }) => {
            return (
                <Detaildish
                    dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comment={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
            );
        }

        const AboutPage = () => {
            return (
                <About leaders={this.state.leaders} />
            );
        }
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route path="/contactus" component={Contact} />
                    <Route path="/aboutus" component={AboutPage} />
                    <Redirect to="/home" />
                </Switch>
                {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onSelectedDishes(dishId)} />
                <Detaildish  selectedDishes={this.state.dishes.filter((dish) => dish.id === this.state.selectedDishes)[0]}/> */}
                <Footer />
            </div>
        );
    }
}



export default Main;
