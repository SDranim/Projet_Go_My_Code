import axios from "axios";
import { LOADING, FAIL, REGISTER, LOGIN, GET_CURRENT, LOGOUT } from "../ActionTypes";

//register user
export const registerUser = (newUser, navigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.post("/api/authUser/registerUser", newUser);
    const { _id, first_name, last_name, email, password } = res.data.newUser;
    dispatch({
      type: REGISTER,
      payload: {
        user: { _id, first_name, last_name, email, password, role: "user" },
        token: res.data.token,
      },
    });
    navigate("/profileUser");
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};

//login user
export const loginUser = (user, navigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.post("/api/authUser/loginUser",user);
    const { _id, first_name, last_name, email, password } = res.data.foundUser;
    dispatch({
      type: LOGIN,
      payload: {
        user: {_id,email, password,first_name,last_name, role: "user" },
        token: res.data.token,
      },
    });
    navigate("/profileUser");
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
//get_current
export const getCurrent =()=>async(dispatch)=>{
  const config={
      headers:{
          authorization:localStorage.getItem('token')
      }
  }
  try {
      const res = await axios.get('/api/authUser/current',config)
      console.log(res.data)
  
      dispatch({type:GET_CURRENT, payload: res.data})
  } catch (error) {
      dispatch({type:FAIL})
  }
  } 
  //logout
export const logout =()=>({type:LOGOUT});
