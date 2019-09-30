import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../../actions/dispatchActions';

class Form extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    let title = event.target.title.value || 'Title not entered';
    let body = event.target.body.value || 'A person of few words, are we?';
    this.props.createPost(this.props.postCount, title, body);
  };

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          className='postTitle'
          type='text'
          name='title'
          placeholder='title goes here'
        />
        <input
          className='postBody'
          type='text'
          name='body'
          placeholder='words go here'
        />
        <button>Submit</button>
      </form>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    postCount: state.postCount,
    posts: state.posts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (postCount, title, body) => {dispatch(createPost(postCount, title, body))}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
