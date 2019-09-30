import React from 'react';
import { connect } from 'react-redux';

class PrevPosts extends React.Component {

  //handleEdit

  handleDelete = (event) => {
    event.preventDefault();
    // this.props.deletePost(event.target.key);
    console.log(event.target.name);
  };

  render(){
    return(
      <React.Fragment>
        <h4>Previous Posts</h4>
        {this.props.posts.map((article) => (
          <section key={article.id}>
            <h4>{article.post.title}</h4>
            <p>{article.post.body}</p>
            <button>Edit</button>
            <button name={article.id} onClick={this.handleDelete}>Delete</button>
          </section>
        ))}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // editPost :
    deletePost : (id) => dispatch({
      type : 'DELETE_POST',
      payload : id
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrevPosts);
