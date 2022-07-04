import { REMOVEALERT, SETALERT } from "../ActionTypes"

export const setAlert=(msg)=>async(dispatch)=>{
    const id=Math.random()
    dispatch({type:SETALERT,payload:{id,msg}})
    setTimeout(() => {
        dispatch({type:REMOVEALERT,payload:id})
    }, 5000);
}