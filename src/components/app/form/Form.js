import React from 'react';
import { connect } from 'react-redux';

class Form extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    let title = event.target.title.value;
    let body = event.target.body.value;
    this.props.createPost(this.props.postCount, title, body);
  };

  render(){
    return(
      <React.Fragment>
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
      </React.Fragment>
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
    createPost: (postCount, title, body) => dispatch({
      type: 'CREATE_POST',
      payload: {
        id: postCount,
        post: {
          title: title,
          body: body
        }
      }
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
