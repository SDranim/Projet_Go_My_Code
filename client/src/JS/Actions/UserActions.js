import axios from "axios";
import { FAIL } from "../ActionTypes"
import { getCurrentUser, logout } from "./AuthUserActions";
//update profile 
export const updateProfilUser =(user)=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.put('/api/User/updateprofilUser',user,config)
        console.log(res.data)    
        dispatch(getCurrentUser())
    } catch (error) {
        dispatch({type:FAIL})
    }
    } 

//delete profile
export const deleteAccountUser =()=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
        await axios.delete('/api/User/deleteprofilUser',config)           
        dispatch(logout())
        
    } catch (error) {
        dispatch({type:FAIL})
    }
    } 

//change password
  //Edit Password User
  export const editPasswordUser =( updatedPass)=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
        await axios.put('/api/User/updatePasswordUser',updatedPass,config)               
        dispatch(logout())
    } catch (error) {
        dispatch({type:FAIL})
    }
    } 