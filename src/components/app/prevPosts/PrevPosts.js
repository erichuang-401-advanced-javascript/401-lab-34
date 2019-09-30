import React from 'react';
import { connect } from 'react-redux';
import IndividualPost from "./IndividualPost";
import { deletePost } from "../../../actions/dispatchActions";

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
        {this.props.posts.map((article) => {
          if( article.editMode ) {
            console.log(article.id);
          }
          return <IndividualPost key={article.id} article={article} handleDelete={this.handleDelete}/>
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
    // editMode : (id) => dispatch({type:''})
    deletePost : (id) => {dispatch(deletePost(id))}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrevPosts);
