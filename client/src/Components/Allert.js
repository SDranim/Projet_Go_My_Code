import React from 'react'
import {useSelector} from "react-redux"
function Allert() {
const alerts=useSelector(state=>state.alert)
  return (
    <div>
    {
        alerts.map(alert=>  <div class="alert alert-danger"role="alert"
        style={{width:"80%", margin:"50px auto"}} key={alert.id}>
       { alert.msg}
        
      </div>)
    }
    </div>
  
  )
}

export default Allert