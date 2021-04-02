import { COMMENTS } from '../SharedComponents/Comment';
import * as ActionType from './ActionType';

export const Comments =(state=COMMENTS,action)=>{
    switch(action.type){
        case ActionType.ADD_COMMENT:
            var comment=action.payload;
            comment.id=state.length;//here state.length  is use to get the end id of previous comments
            comment.date=new Date().toISOString();
            return state.concat(comment);//concat  means to join the new comment with previous comments
        default:
            return state;
    }
};