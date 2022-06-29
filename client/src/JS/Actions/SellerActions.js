import axios from "axios"
import { FAIL, MY_OFFERS } from "../ActionTypes"
import { getCurrentSeller, logout } from "./AuthSellerActions"


// offers
//get my offers
export const myOffers=()=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    } 
    try {
        const res=await axios.get("/api/Seller/myOffers",config)
        dispatch({type:MY_OFFERS,payload:res.data})
        
    } catch (error) {
        console.log(error)
    }
}
//add 
export const addOffer=(newOffer)=>async(dispatch)=>{

    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    } 
    try {
        await axios.post("/api/seller/addoffer",newOffer,config)
        dispatch(myOffers())
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
        await axios.delete(`/api/Seller/deleteOffer/${id}`,config)           
        dispatch(myOffers())
        
    } catch (error) {
        dispatch({type:FAIL})
    }
    } 

    //update offer 
    export const UpdateOfferS =(updatedOffer,id)=>async(dispatch)=>{
        const config={
            headers:{
                authorization:localStorage.getItem('token')
            }
        }
        try {
            await axios.put(`/api/Seller/updateOffer/${id}`,updatedOffer,config)
            dispatch(myOffers())
          
        } catch (error) {
            dispatch({type:FAIL})
        }
        } 


//profile
//update profile 
export const updateprofilSeller =(user)=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.put('/api/Seller/updateprofilSeller',user,config)
        console.log(res.data)    
        dispatch(getCurrentSeller())
    } catch (error) {
        dispatch({type:FAIL})
    }
    } 

      //Edit Password Seller
  export const editPasswordSeller =( updatedPass)=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
        await axios.put('/api/Seller/updatePasswordSeller',updatedPass,config)               
        dispatch(logout())
    } catch (error) {
        dispatch({type:FAIL})
    }
    } 

    //delete profile
export const deleteAccountSeller =()=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
        await axios.delete('/api/Seller/deleteprofilSeller',config)           
        dispatch(logout())
        
    } catch (error) {
        dispatch({type:FAIL})
    }
    } 
