import { DISHES } from '../SharedComponents/Dishes';
import { PROMOTIONS } from '../SharedComponents/Promotions';
import { COMMENTS } from '../SharedComponents/Comment';
import { LEADERS } from '../SharedComponents/Leader';

export const initialState = {
    dishes: DISHES,
    promotions: PROMOTIONS,
    comments: COMMENTS,
    leaders: LEADERS
}

export const Reducer = (state = initialState, action) => {
    return state;
}