import { ALL_SELLERS, GET_SELLER } from "../ActionTypes"

const initialState = {
    sellers:[],
    seller:null,
    load:true
}

const guestReducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case ALL_SELLERS:
    return { ...state,sellers:payload.allSellers,load:false}
 case GET_SELLER:
  return { ...state,seller:payload.sellerInfo,load:false}
  default:
    return state
  }
}

export default guestReducer
