import React from 'react';

class EditPost extends React.Component {

  render(){
    let article = this.props.article;
    return(
      <React.Fragment>
        <h4>Edit: {article.post.title}</h4>
        <form name={article.id} onSubmit={this.props.handleUpdate}>
          <input
            className='postTitle'
            type='text'
            name='title'
            placeholder={article.post.title}
          />
          <input
            className='postBody'
            type='text'
            name='body'
            placeholder={article.post.body}
          />
          <button>Submit</button>
        </form>
      </React.Fragment>
    )
  }
}

export default EditPost;
