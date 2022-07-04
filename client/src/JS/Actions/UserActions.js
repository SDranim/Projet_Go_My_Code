import axios from "axios";
import {FAIL, FIND_OFFER, GETU_MSGS, GET_SELLER, SELLER_OFFERS} from "../ActionTypes";
import { setAlert } from "./Allert";
import {getCurrentUser, logout} from "./AuthUserActions";
//update profile
export const updateProfilUser = (user) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.put("/api/User/updateprofilUser", user, config);
    console.log(res.data);
    dispatch(getCurrentUser());
  } catch (error) {
    dispatch({type: FAIL});
  }
};

//delete profile
export const deleteAccountUser = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.delete("/api/User/deleteprofilUser", config);
    dispatch(logout());
  } catch (error) {
    dispatch({type: FAIL});
  }
};

//change password
//Edit Password User
export const editPasswordUser = (updatedPass) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.put("/api/User/updatePasswordUser", updatedPass, config);
    dispatch(logout());
  } catch (error) {
    dispatch({type:FAIL});
    error.response.data.errors.forEach(error => dispatch(setAlert(error.msg)));
  }
};

//get seller
export const getSellerprofile = (id) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get(`/api/User/profilSeller/${id}`, config);
    dispatch({type: GET_SELLER, payload: res.data});
  } catch (error) {
    console.log(error);
  }
};

//get seller offers
export const getSellerOffers = (id) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get(`/api/Seller/selleroffers/${id}`, config);
    dispatch({type: SELLER_OFFERS, payload: res.data});
  } catch (error) {
    console.log(error);
  }
};

//contact seller
export const sendMsgSeller = (newContactS, id) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.post(`/api/User/contactSeller/${id}`, newContactS, config);
  } catch (error) {
    dispatch({type:FAIL});
    error.response.data.errors.forEach(error => dispatch(setAlert(error.msg)));
  }
};

//get all messages
export const allUsersmessages = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/api/Seller/SellerMsgs", config);
    dispatch({type: GETU_MSGS, payload: res.data});
  } catch (error) {
    console.log(error);
  }
};

//delete message
export const deleteUsermessage = (id) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.delete(`/api/Seller/deletetheMsg/${id}`, config);
    dispatch(allUsersmessages());
  } catch (error) {
    console.log(error);
  }
};

//find offer
export const FindOffer = (data) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/User/Findoffers/${data}`);
    console.log(res.data);
    dispatch({
      type: FIND_OFFER,
      payload: res.data,
    });
  } catch (error) {
    dispatch({type: FAIL});
  }
};
