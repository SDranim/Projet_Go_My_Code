import { ALL_OFFERS, A_MSGS, A_OFFERS, A_SELLERS, A_USERS } from "../ActionTypes"
import axios from "axios"
//get msg
export const allmessages=()=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
        const res=await axios.get("/api/Admin/allMsgs",config)
        dispatch({type:A_MSGS,payload:res.data})
        
    } catch (error) {
        console.log(error)
    }
}

//delete message 
export const deletemessage=(id)=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
         await axios.delete(`/api/Admin/deleteMsg/${id}`,config)
         dispatch(allmessages())
    } catch (error) {
        console.log(error)
    }
}

//getUsers
export const allUsers=()=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
        const res=await axios.get("/api/Admin/allUsers",config)
        dispatch({type:A_USERS,payload:res.data})
        
    } catch (error) {
        console.log(error)
    }
}

//delete user
export const deleteUser=(id)=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
         await axios.delete(`/api/Admin/deleteUser/${id}`,config)
         dispatch(allUsers())
    } catch (error) {
        console.log(error)
    }
}

//get sellers 
export const allSellers=()=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
        const res=await axios.get("/api/Admin/allSellers",config)
        dispatch({type:A_SELLERS,payload:res.data})
        
    } catch (error) {
        console.log(error)
    }
}
//delete seller
export const deleteSeller=(id)=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
         await axios.delete(`/api/Admin/deleteseller/${id}`,config)
         dispatch(allSellers())
    } catch (error) {
        console.log(error)
    }
}

//get offers 
export const allOffers=()=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
        const res=await axios.get("/api/Admin/allOffers",config)
        dispatch({type:A_OFFERS,payload:res.data})
        
    } catch (error) {
        console.log(error)
    }
}

//delete offer 
export const deleteOffer=(id)=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
         await axios.delete(`/api/Admin/deleteOffer/${id}`,config)
         dispatch(allOffers())
    } catch (error) {
        console.log(error)
    }
}
