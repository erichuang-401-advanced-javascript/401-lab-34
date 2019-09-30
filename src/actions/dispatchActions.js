export function createPost(postCount, title, body){
  return {
    type: 'CREATE_POST',
    payload: {
      editMode: false,
      id: postCount,
      post: {
        title: title,
        body: body
      }
    }
  }
}

export function editMode(id){
  return {
    type : 'EDIT_MODE',
    payload : id
  }
}

export function updatePost(id, title, body){
  return {
    type: 'UPDATE_POST',
    payload: {
      id: id,
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
