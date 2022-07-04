import axios from "axios";
import { LOADING, FAIL, REGISTER, LOGIN, GET_CURRENT, LOGOUT } from "../ActionTypes";
import { setAlert } from "./Allert";

//register user
export const registerUser = (newUser, navigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.post("/api/authUser/registerUser", newUser);
    const { _id, first_name, last_name, email, password,birthday } = res.data.newUser;
    dispatch({
      type: REGISTER,
      payload: {
        user: { _id, first_name, last_name, email, password, role:"user" ,birthday},
        token: res.data.token,
      },
    });
    navigate("/profileUser");
  }
  catch (error) {
    dispatch({type:FAIL});
    error.response.data.errors.forEach(error => dispatch(setAlert(error.msg)));

}
};

//login user
export const loginUser = (user, navigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.post("/api/authUser/loginUser",user);
    const { _id, first_name, last_name, email, password ,role,photo,birthday} = res.data.foundUser;
    dispatch({
      type: LOGIN,
      payload: {
        user: {_id,email, password,first_name,last_name, role,photo,birthday },
        token: res.data.token,
      },
    });
  }  catch (error) {
    dispatch({type:FAIL});
    error.response.data.errors.forEach(error => dispatch(setAlert(error.msg)));
}
};
//get_current
export const getCurrentUser =()=>async(dispatch)=>{
  const config={
      headers:{
          authorization:localStorage.getItem('token')
      }
  }
  try {
      const res = await axios.get('/api/authUser/currentUser',config)

      dispatch({type:GET_CURRENT, payload: res.data.user})
  } catch (error) {
      dispatch({type:FAIL})
  }
} 
  //logout
export const logout =()=>({type:LOGOUT});
