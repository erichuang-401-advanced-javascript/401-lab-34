import React from 'react';
import { connect } from 'react-redux';
import IndividualPost from "./IndividualPost";
import EditPost from "./EditPost";
import { deletePost, editMode, updatePost } from "../../../actions/dispatchActions";

class PrevPosts extends React.Component {

  handleEdit = (event) => {
    event.preventDefault();
    let id = parseInt(event.target.name);
    this.props.editMode(id);
  };

  handleDelete = (event) => {
    event.preventDefault();
    let id = parseInt(event.target.name);
    this.props.deletePost(id);
  };

  handleUpdate = (event) => {
    event.preventDefault();
    let title = event.target.title.value;
    let body = event.target.body.value;
    let id = parseInt(event.target.name);
    this.props.updatePost(id, title, body);
  };

  render(){
    return(
      <React.Fragment>
        <h4>Previous Posts</h4>
        {this.props.posts.map((article) => {
          return article.editMode
            ? <EditPost key={article.id} article={article} handleUpdate={this.handleUpdate}/>
            : <IndividualPost
              key={article.id}
              article={article}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
            />
        })}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editMode : (id) => {dispatch(editMode(id))},
    updatePost : (id, title, body) => {dispatch(updatePost(id, title, body))},
    deletePost : (id) => {dispatch(deletePost(id))}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrevPosts);
