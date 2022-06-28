import axios from "axios"
import { ALL_OFFERS, ALL_SELLERS } from "../ActionTypes"

//get all offers 
export const allOffers=()=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    } 
    try {
        const res=await axios.get("/api/Guest/allOffers",config)
        dispatch({type:ALL_OFFERS,payload:res.data})
        
    } catch (error) {
        console.log(error)
    }
}

//get all sellers 
export const allSellers=()=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    } 
    try {
        const res=await axios.get("/api/Guest//allSellers",config)
        dispatch({type:ALL_SELLERS,payload:res.data})
        
    } catch (error) {
        console.log(error)
    }
}

//contact us 
export const sendMsg=(newMsg)=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    } 
    try {
        await axios.post("/api/Guest/contactUs",newMsg,config)
    } catch (error) {
        console.log(error)
    }
}