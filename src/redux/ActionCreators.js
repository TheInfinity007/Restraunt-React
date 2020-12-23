import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (comment) => ({
	type: ActionTypes.ADD_COMMENT,
	payload: comment
});

// function of a function (thunk)
export const postComment = (dishId, rating, author, comment)  => (dispatch) => {
	const newComment = {
		dishId: dishId,
		rating: rating,
		author: author,
		comment: comment
	}
	newComment.date = new Date().toISOString();

	return fetch(baseUrl + 'comments', {
		method: 'POST',
		body: JSON.stringify(newComment),
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'same-origin'
	})
	.then(response => {
		console.log("Response of postComment ");
		console.log(response);
		if(response.ok){
			return response;
		}
		else{
			var error = new Error('Error' + response.status + ': ' + response.statusText);
			error.response = response;
			throw error;
		}
	}, 
	error => {
		// when the server doesn't respond
		console.log("Error on server doesnot respond in postComment");
		var errmess = new Error(error.message);
		throw errmess;
	})
	.then(response => response.json())
	.then(response => dispatch(addComment(response)))
	.catch(error => {
	 	console.log('Post comments ', error.message);
	 	alert('Your comment could not be posted\nError: ' + error.message);
	 })
}

// a thund(fetchDishes) // returns a function
export const fetchDishes = () => (dispatch) => {
	dispatch(dishesLoading(true));

	return fetch(baseUrl + 'dishes')
		.then(response => {
			console.log("Response of fetchDishes ");
			console.log(response);
			if(response.ok){
				return response;
			}
			else{
				var error = new Error('Error' + response.status + ': ' + response.statusText);
				error.response = response;
				throw error;
			}
		}, 
		error => {
			// when the server doesn't respond
			console.log("Error on server doesnot respond in fetchDishes");
			var errmess = new Error(error.message);
			throw errmess;
		})
		.then(response => response.json())
		.then(dishes => dispatch(addDishes(dishes)))
		.catch(error => dispatch(dishesFailed(error.message)));
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
		.then(response => {
			console.log("Response of fetchComments ");
			console.log(response);
			if(response.ok){
				return response;
			}
			else{
				var error = new Error('Error ' + response.status + ": " + response.statusText);
				error.response = response;
				throw error;
			}
		}, 
		error => {
			// when the server doesn't respond
			console.log("Error on server doesnot respond in fetchComments");
			var errmess = new Error(error.message);
			throw errmess;
		})
		.then(response => response.json())
		.then(comments => dispatch(addComments(comments)))
		.catch(error => dispatch(commentsFailed(error.message)));;
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
		.then(response => {
			console.log("Response of fetchPromos " + response);
			if(response.ok){
				return response;
			}
			else{
				var error = new Error('Error' + response.status + ': ' + response.statusText);
				error.response = response;
				throw error;
			}
		}, 
		error => {
			// when the server doesn't respond
			console.log("Error on server doesnot respond in fetchPromos");
			var errmess = new Error(error.message);
			throw errmess;
		})
		.then(response => response.json())
		.then(promos => dispatch(addPromos(promos)))
		.catch(error => dispatch(promosFailed(error.message)));
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