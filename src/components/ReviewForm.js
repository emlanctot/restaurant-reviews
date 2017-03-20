import React from 'react'
import TextField from './TextField';

class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name: '',
      rating: '',
      content: ''
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleReviewChange = this.handleReviewChange.bind(this);
    this.handlePersonChange = this.handlePersonChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    console.log('Form submitted.')
    console.log(this.state);
    let formPayLoad = {
      restaurant_id: this.props.selectedId,
      name: this.state.name,
      rating: this.state.rating,
      content: this.state.content
    }
    this.props.addReview(formPayLoad)
    this.handleClearForm(event);
  }

  handlePersonChange(event) {
    this.setState({ name: event.target.value });
  }
  handleRatingChange(event) {
    this.setState({ rating: event.target.value });
  }
  handleReviewChange(event) {
    this.setState({ content: event.target.value });
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      name: '',
      rating: '',
      content: ''
    })
  }

  render(){
    return(
        <form onSubmit={this.handleFormSubmit}>
          <TextField
            label='Name'
            name='name'
            value={this.state.name}
            handlerFunction={this.handlePersonChange}
          />
          <TextField
            label='Rating (0-100)'
            name='rating'
            value={this.state.rating}
            handlerFunction={this.handleRatingChange}
          />
          <TextField
            label='Review'
            name='review'
            value={this.state.content}
            handlerFunction={this.handleReviewChange}
          />
          <input className="button" type="submit" value="Submit" />
        </form>

    )
  }
}

export default ReviewForm;
