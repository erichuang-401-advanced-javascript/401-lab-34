import React from 'react';
import { connect } from 'react-redux';

class PrevPosts extends React.Component {

  // handleEdit = (event) => {
  //   event.preventDefault();
  //   let id = parseInt(event.target.name);
  //
  // }

  handleDelete = (event) => {
    event.preventDefault();
    let id = parseInt(event.target.name);
    this.props.deletePost(id);
  };

  render(){
    return(
      <React.Fragment>
        <h4>Previous Posts</h4>
        {this.props.posts.map((article) => (
          <section key={article.id}>
            <h4>{article.post.title}</h4>
            <p>{article.post.body}</p>
            {/*<button name={article.id} onClick={this.handleEdit}>Edit</button>*/}
            <button name={article.id}>Edit</button>
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
