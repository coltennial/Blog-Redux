const blogs = (state = [], action) => {
  switch(action.type) {
    case 'BLOGS': 
      return action.blogs 
    case 'ADD_BLOG':
      return [action.blog, ...state]
    case 'EDIT_BLOG':
      return state.map(blog => {
        if (blog.id === action.id)
          return {...blog, complete: !blog.complete}
      })
    case 'REMOVE_BLOG':
      return state.filter(blog => {
        if (blog.id !== action.id) 
          return blog;
      })
    case 'TOGGLE_BLOG': 
      return state.map( blog => {
        if (blog.id === action.id)
          return {...blog, complete: !blog.complete}
      })
    default: 
      return state;
  }
}

export default blogs;