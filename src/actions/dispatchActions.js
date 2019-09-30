export function createPost(postCount, title, body){
  return {
    type: 'CREATE_POST',
    payload: {
      id: postCount,
      post: {
        title: title,
        body: body
      }
    }
  }
}

export function deletePost(id){
  return {
    type : 'DELETE_POST',
    payload : id
  }
}
