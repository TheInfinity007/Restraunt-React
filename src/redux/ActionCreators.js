import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';

export const addComment = (dishId, rating, author, comment) => ({
	type: ActionTypes.ADD_COMMENT,
	payload: {
		dishId: dishId,
		rating: rating,
		author: author,
		comment: comment
	}
});

// a thund(fetchDishes) // returns a function
export const fetchDishes = () => (dispatch) => {
	dispatch(dishesLoading(true));

	setTimeout(() => {
		dispatch(addDishes(DISHES));
	}, 2000);
}

// return an action object
export const dishesLoading  = () => ({
	type: ActionTypes.DISHES_LOADING
});

// return an action object
export const dishesFailed = (errmess) => ({
	type: ActionTypes.DISHES_FAILED,
	payload: errmess
});

// return an action object
export const addDishes = (dishes) => ({
	type: ActionTypes.ADD_DISHES,
	payload: dishes
});