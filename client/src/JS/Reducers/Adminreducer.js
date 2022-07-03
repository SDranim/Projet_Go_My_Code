import { A_MSGS, A_OFFERS, A_SELLERS, A_USERS } from "../ActionTypes";

const initialState = {
  messages: [],
  users:[],
  sellers:[],
  offers:[],
  load: true,
};

const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case A_MSGS:
      return { ...state, messages: payload.msgs, load: false };
    case A_USERS:
        return { ...state, users: payload.allUsers, load: false };
    case A_SELLERS:
          return { ...state, sellers: payload.allSellers, load: false };
    case A_OFFERS:
          return { ...state, offers: payload.allOffers, load: false };

  

    default:
      return state;
  }
};

export default adminReducer;
