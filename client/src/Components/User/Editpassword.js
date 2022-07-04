import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { editPasswordUser } from '../../JS/Actions/UserActions'

function Editpassword() {

  const [password, setPassword] = useState("")
  const dispatch=useDispatch()
  const navigate=useNavigate()
 const handlePass=()=>{
dispatch(editPasswordUser({password}))
navigate('/signIn')
  }

  return (
    <div>
    <Link to='/profileUser'>
    <Button style={{backgroundColor:"#570A57"}} variant="outline-light">Back</Button>
    </Link>
    <div className="container h-100">
    <div className="row h-100">
      <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
        <div className="d-table-cell align-middle">
          <div className="text-center mt-4">
            <h2 className="h2" style={{fontFamily: "Dancing Script",fontSize: "50px"}}>Reset password</h2>
            <p style={{fontSize: "10px"}} className="lead">
              Enter new password.
            </p>
          </div>
          <div  style={{   borderRadius: "10px"}} className="card-pass">
            <div style={{   borderRadius: "10px"}}  className="card-body" >
              <div className="m-sm-4">
                <form>
                  <div className="form-group">
                    <label>password</label>
                    <input  onChange={(e)=>setPassword(e.target.value)} value={password}  className="form-control form-control-lg" type="text" name="password" placeholder="Enter new password" />
                  </div>
                  <div className="text-center mt-3">
                    <button type="submit" style={{backgroundColor:"#570A57"}} class="btn btn-lg btn-primary" onClick={handlePass}>Reset password</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Editpassword