import axios from "axios";
import { LOADING, FAIL, REGISTER, LOGIN, GET_CURRENT, LOGOUT } from "../ActionTypes";
import { setAlert } from "./Allert";

//register user
export const registerSeller = (newSeller, navigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.post("/api/authSeller/registerSeller", newSeller);
    const {_id,name,email,password}=res.data.newSeller
    dispatch({ type: REGISTER, payload: {user:{_id,name,email,password,role:"seller"},token:res.data.token} });
    navigate("/profileSeller");
  } catch (error) {
    dispatch({type:FAIL});
    error.response.data.errors.forEach(error => dispatch(setAlert(error.msg)));
  }
};

//login user
export const loginSeller = (foundSeller, navigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.post("/api/authSeller/loginSeller", foundSeller);
    const { _id, name, email, password,  phone,address,discription, photo, slogan} = res.data.foundSeller;
    dispatch({
      type: LOGIN,
      payload: {
        user: {_id,email, password,name, role: "seller",phone,address,discription, photo, slogan },
        token: res.data.token,
      },
    });
    navigate("/profileSeller");
  } catch (error) {
    dispatch({type:FAIL});
    error.response.data.errors.forEach(error => dispatch(setAlert(error.msg)));
  }
};
//get_current
export const getCurrentSeller =()=>async(dispatch)=>{
  const config={
      headers:{
          authorization:localStorage.getItem('token')
      }
  }
  try {
      const res = await axios.get('/api/authSeller/currentSeller',config)
      dispatch({type:GET_CURRENT, payload:{...res.data.user,role:"seller"}})
  } catch (error) {
      dispatch({type:FAIL})
  }
}
  //logout
export const logout =()=>({type:LOGOUT});