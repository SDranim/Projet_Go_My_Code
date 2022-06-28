import { ALL_OFFERS, MY_OFFERS } from "../ActionTypes"

const initialState = {
myOffers:[],
load:true,
}

const offerReducer =(state = initialState, { type, payload }) => {
  switch (type) {
    case ALL_OFFERS:
      return { ...state, myOffers:payload.allOffers,load:false } 

  case MY_OFFERS:
    return { ...state, myOffers:payload.myOffers,load:false } 

  default:
    return state
  }
}

export default offerReducer
