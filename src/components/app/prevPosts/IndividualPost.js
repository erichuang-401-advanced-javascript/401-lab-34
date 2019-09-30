import React from 'react';

class IndividualPost extends React.Component {

  render(){
    let article = this.props.article;
    return(
      <section>
        <h4>{article.post.title}</h4>
        <p>{article.post.body}</p>
        <button name={article.id} onClick={this.props.handleEdit}>Edit</button>
        <button name={article.id} onClick={this.props.handleDelete}>Delete</button>
      </section>
    )
  }

}

export default IndividualPost;
