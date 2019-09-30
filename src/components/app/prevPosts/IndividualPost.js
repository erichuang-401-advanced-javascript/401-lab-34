import React from 'react';

//props = article { id, post: { title, body } };
class IndividualPost extends React.Component {

  render(){
    let article = this.props.article;
    return(
      <React.Fragment>
        <h4>{article.post.title}</h4>
        <p>{article.post.body}</p>
        <button name={article.id}>Edit</button>
        <button name={article.id} onClick={this.props.handleDelete}>Delete</button>
      </React.Fragment>
    )
  }

}

export default IndividualPost;
