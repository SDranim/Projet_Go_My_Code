import axios from "axios";
import { LOADING, FAIL, REGISTER, LOGIN, GET_CURRENT, LOGOUT } from "../ActionTypes";

//register user
export const registerSeller = (newSeller, navigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.post("/api/authSeller/registerSeller", newSeller);
    const {_id,name,email,password}=res.data.newSeller
    dispatch({ type: REGISTER, payload: {user:{_id,name,email,password,role:"seller"},token:res.data.token} });
    navigate("/profileSeller");
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};

//login user
export const loginSeller = (foundSeller, navigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.post("/api/authSeller/loginSeller", foundSeller);
    const { _id, name, email, password } = res.data.foundSeller;
    dispatch({
      type: LOGIN,
      payload: {
        user: {_id,email, password,name, role: "seller" },
        token: res.data.token,
      },
    });
    navigate("/profileSeller");
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
      const res = await axios.get('/api/authSeller/current',config)
      console.log(res.data)
  
      dispatch({type:GET_CURRENT, payload: res.data})
  } catch (error) {
      dispatch({type:FAIL})
  }
  } 
  //logout
export const logout =()=>({type:LOGOUT});