const initState = {
  postCount: 1,
  posts: []
};

export default (state = initState, action) => {
  switch(action.type){
    case 'CREATE_POST':
      return {
        postCount: action.payload.id + 1,
        posts: [ action.payload, ...state.posts ]
      };
    /*
    case 'UPDATE_POST':
      return {
        ...state,
        posts : state.posts.map( post => {
          post.id === action.payload.id ? action.payload.post : post;
        });
      };
    case 'DELETE_POST':
      return {
        ...state,
        posts : state.posts.filter( post => {
          post.id !== action.payload;
        });
      }  */
    default:
      return state;
  }
};
