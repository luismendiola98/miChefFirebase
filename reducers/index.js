import { combineReducers } from 'redux';

const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload
    case 'UPDATE_EMAIL': 
      return {...state, email: action.payload}
    case 'UPDATE_PASSWORD':
      return {...state, password: action.payload}
    case 'UPDATE_USERNAME':
      return {...state, username: action.payload}
    case 'UPDATE_BIO':
      return {...state, bio: action.payload}
    default:
      return state
  }
}
const post = (state = null, action) => {
  switch (action.type) {
    case 'UPDATE_PHOTO':
      return {...state, photo: action.payload}
    case 'UPDATE_DESCRIPTION':
      return {...state, description: action.payload}
    case 'UPDATE_LOCATION':
      return {...state, location: action.payload}
    case 'SHARE_PHOTO':
      return {...state, posts: action.payload}  
    case 'GET_POSTS':
      return {...state, feed: action.payload}  
    default:
      return state
  }
}
const rootReducer = combineReducers({
  user,
  post
})

export default rootReducer;