import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';

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

	return fetch(baseUrl + 'dishes')
		.then(response => response.json())
		.then(dishes => dispatch(addDishes(dishes)));
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

export const fetchComments = () => (dispatch) => {
	return fetch(baseUrl + 'comments')
		.then(response => response.json())
		.then(comments => dispatch(addComments(comments)));
}

// return an action object
export const commentsFailed = (errmess) => ({
	type: ActionTypes.COMMENTS_FAILED,
	payload: errmess
});

// return an action object
export const addComments = (comments) => ({
	type: ActionTypes.ADD_COMMENTS,
	payload: comments
});

// a thund(fetchDishes) // returns a function
export const fetchPromos = () => (dispatch) => {
	dispatch(promosLoading());

	return fetch(baseUrl + 'promotions')
		.then(response => response.json())
		.then(promos => dispatch(addPromos(promos)));
}

// return an action object
export const promosLoading  = () => ({
	type: ActionTypes.PROMOS_LOADING
});

// return an action object
export const promosFailed = (errmess) => ({
	type: ActionTypes.PROMOS_FAILED,
	payload: errmess
});

// return an action object
export const addPromos = (promos) => ({
	type: ActionTypes.ADD_PROMOS,
	payload: promos
});