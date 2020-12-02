import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

export const initialState = {
	dishes: DISHES,
  	comments: COMMENTS,
  	promotions: PROMOTIONS,
  	leaders: LEADERS
};

// reducer function
// arg currentState, action
export const Reducer = (state = initialState, action) => {
	return state;
};