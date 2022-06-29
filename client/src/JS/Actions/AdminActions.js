import { A_MSGS } from "../ActionTypes"
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