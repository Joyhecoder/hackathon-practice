import React, {useState} from 'react'
import '../../css/styles.css';
import {
  Grid,
  TextField,
  Paper,
  Button
} from '@material-ui/core';




const Login = () => {
 const [userName, setUserName] = useState('')
 const [password, setPassword] = useState('')
 

 //!need to connect this with backend for authentication
 const handleSubmit = (e) =>{
  e.preventDefault()
  console.log(userName,password);
 }
 
  return (
    <div className="login">
   
      <div className="picture-login">
        <img className="toDoPicture" src="https://images.unsplash.com/photo-1598791318878-10e76d178023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="To do list picture" />
      </div>

      <div className="login-form">
       
          <Paper className="loginForm">
            <Grid container spacing={3} direction={'column'} justifyContent={'center'} alignItems={"center"}>

              <Grid item xs={12}>
                <TextField label="Username" onChange={e=>setUserName(e.target.value)}></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField label="Password" type={'password'} onChange={e=>setPassword(e.target.value)}></TextField>
              </Grid>
          
              <Grid item xs={12}>
                <Button fullWidth onClick={(e)=>handleSubmit(e)}>Login</Button>
              </Grid>
            </Grid>
          </Paper>
        
      </div>
    </div>
        
    
  )
}

export default Login