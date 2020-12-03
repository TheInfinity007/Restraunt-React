import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const minLength = (len) => (val) => (val) && (val.length >= len);
const maxLength = (len) => (val) => !(val) || (val.length <= len); 

class CommentForm extends Component{

	constructor(props){
		super(props);

		this.state = {
			isCommentModalOpen: false
		}
		this.toggleCommentModal = this.toggleCommentModal.bind(this);

	}

	toggleCommentModal(){
		this.setState({
			isCommentModalOpen: !this.state.isCommentModalOpen
		})
	}

	render(){
		return(
			<div>
				<Button  outline color="secondary" onClick={this.toggleCommentModal}>
					<span className="fa fa-pencil"></span> Submit Comment
				</Button>
			
				<Modal isOpen={this.state.isCommentModalOpen} toggle={this.toggleCommentModal}>
					<ModalHeader toggle={this.toggleCommentModal}>Submit Comment</ModalHeader>
					<ModalBody>
						<LocalForm>
							<div className="form-group">
								<Label>Rating</Label>
								<Control.select model = ".rating" className="form-control" name="rating">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</Control.select>
							</div>
							<div className="form-group">
								<Label htmlFor="author">Name</Label>
								<Control.text model = ".author" className="form-control" id="author" name="author" placeholder="Name" validators={{minLength: minLength(3), maxLength: maxLength(15)}}/>
								<Errors className="text-danger" model=".author" show="touched" messages={{minLength: 'Must be greater than 2 characters', maxLength: 'Must be 15 characters or less'}} />
							</div>
							<div className="form-group">
								<Label htmlFor="comment">Comment</Label>
								<Control.textarea model = ".comment" className="form-control" id="comment" name="comment" rows="6" />
							</div>
							<Button color="primary">Submit</Button>
						</LocalForm>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

export default CommentForm;