import { A_MSGS } from "../ActionTypes";

const initialState = {
  messages: [],
  load: true,
};

const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case A_MSGS:
      return { ...state, messages: payload.msgs, load: false };

    default:
      return state;
  }
};

export default adminReducer;
