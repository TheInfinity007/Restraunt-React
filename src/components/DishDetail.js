import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';

class DishDetail extends Component{

	constructor(props){
		super(props);

		this.state = {
			// dish = 
		}
		console.log(this.props.dish);
	}

	render(){
		dish = this.props.dish;
		if(dish != null){
			return(
				<Card>
					<CardImg width="100%" src={dish.image} alt="{dish.name}"/>
					<CardBody>
						<CardTitle>{ dish.name }</CardTitle>
						<CardText>{ dish.description }</CardText>
					</CardBody>
				</Card>
			);
		}
	}

}

export default DishDetail;