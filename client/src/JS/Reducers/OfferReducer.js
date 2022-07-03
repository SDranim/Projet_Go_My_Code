import { ALL_OFFERS, FIND_OFFER, MY_OFFERS, SELLER_OFFERS } from "../ActionTypes"

const initialState = {
myOffers:[],
offers:[],
load:true,
}

const offerReducer =(state = initialState, { type, payload }) => {
  switch (type) {
    case ALL_OFFERS:
      return { ...state, myOffers:payload.allOffers,load:false } 

  case MY_OFFERS:
    return { ...state, myOffers:payload.myOffers,load:false } 
case SELLER_OFFERS:
    return { ...state, myOffers:payload.sellerOffers,load:false } 
case FIND_OFFER:
  return{...state,offers:payload.allFindOffers,load:false}

  default:
    return state
  }
}

export default offerReducer
