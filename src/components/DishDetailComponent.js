import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';

class DishDetail extends Component{

	constructor(props){
		super(props);

		this.state = {
			dish: this.props.dish
		}
		console.log(this.props.dish);
	}

	renderDish(dish){	
		if(dish != null){
			return(
				<Card>
					<CardImg width="100%" src={this.props.dish.image} alt="{this.props.dish.name}"/>
					<CardBody>
						<CardTitle>{ this.props.dish.name }</CardTitle>
						<CardText>{ this.props.dish.description }</CardText>
					</CardBody>
				</Card>
			)
		}else{
			return(<div></div>)
		}
	}

	renderComments(comments){
		return (

			comments.map((com)=>{
				return(
					<li key={com.id}>
						<p>{com.comment}</p>
						<p>--{com.author}, { new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))}</p>
					</li>
				)
			})
		)		
	}
	
	render(){

		if(this.props.dish != null){

			return(
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-5 m-1">
							{ this.renderDish(this.props.dish) }
						</div>
						<div className="col-12 col-md-5 m-1">
							<h3>Comments</h3>
							<ul className="list-unstyled">
								{ this.renderComments(this.props.dish.comments) }
							</ul>
						</div>
					</div>
				</div>
			);
		}else{
			return (<div></div>);
		}
	}

}

export default DishDetail;