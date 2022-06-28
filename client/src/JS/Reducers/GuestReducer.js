import { ALL_SELLERS } from "../ActionTypes"

const initialState = {
    sellers:[],
    load:true
}

const guestReducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case ALL_SELLERS:
    return { ...state,sellers:payload.allSellers,load:false}

  default:
    return state
  }
}

export default guestReducer
