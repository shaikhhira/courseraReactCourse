import * as ActionType from './ActionType';
import { DISHES } from '../SharedComponents/Dishes';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionType.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});
//this  is a thunk
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    setTimeout(() => {
        dispatch(addDishes(DISHES))
    }, 2000)
}

export const dishesFailed = (errMess) => ({
    type: ActionType.DISHES_FAILED,
    payload: errMess
});

export const dishesLoading =()=> ({
    type: ActionType.DISHES_LOADING,
});

export const addDishes = (dishes) => ({
    type: ActionType.ADD_DISHES,
    payload: dishes
});