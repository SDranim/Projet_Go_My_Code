import {GET_CURRENT, LOGIN, LOGOUT, REGISTER} from "../ActionTypes"

const initialState = {
    auth:false,
    load:true,
    user:null
}

const authReducer=(state = initialState, { type, payload }) => {
  switch (type) {

  case REGISTER:
    case LOGIN:
    localStorage.setItem('token', payload.token )
    return { ...state, auth:true, load:false, user: payload.user}
    case GET_CURRENT:
        return { ...state, auth:true, load:false, user: payload.user}
    case LOGOUT :
      localStorage.removeItem('token')
      return {...state, auth:false, load:false, user:null}
  default:
    return state
  }
}
export default authReducer