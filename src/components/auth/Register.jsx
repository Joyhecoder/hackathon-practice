import React, {useState} from 'react'
import "../../css/styles.css"
import {
  Grid,
  TextField,
  Paper,
  Button
} from '@material-ui/core';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#a3b18a !important",
    opacity: '.9'
  }
})

const Register = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const classes = useStyles()
  //!need to connect this with backend for database
  const handleSubmit =(e) =>{
    e.preventDefault()
    console.log(userName, email, password)
  }

  return (
    <div>
      <div className="register">
        <img className="backgroundImg" src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80" alt="background pic" />
        <div className="registerForm">
          <Paper className="Form" className={classes.root}>
              <Grid container spacing={3} direction={'column'} justifyContent={'center'} alignItems={"center"}>

                <Grid item xs={12}>
                  <TextField label="Email" onChange={e=>setEmail(e.target.value)}></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Username" onChange={e=>setUserName(e.target.value)}></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Password" type={'password'} onChange={e=>setPassword(e.target.value)}></TextField>
                </Grid>
            
                <Grid item xs={12}>
                  <Button fullWidth onClick={(e)=>handleSubmit(e)}>Register</Button>
                </Grid>
              </Grid>
          </Paper>
        </div>

      </div>
     

      
    </div>
  )
}

export default Register