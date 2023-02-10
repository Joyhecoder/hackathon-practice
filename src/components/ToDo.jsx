import React, {useState} from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from "@material-ui/core/Typography";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import { makeStyles } from "@mui/styles";
import "../css/styles.css"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles({
  root:{

  },
  toDoTitle: {
    backgroundColor: "#52796f",
    fontSize: "2rem",
    fontWeight: "bolder",
    color: "whitesmoke",
  }
})

const ToDo = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(null);
  const [toDo, setToDo] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(toDo);
    //!store toDo in db and display it on the list
  }
  return (
    <Box sx={{flexGrow: 1}} className="toDo-Container">
      <Grid container>

        <Grid item xs={12}  >
          <Box m={7}  >
            <div className="toDo-title" >To Do List</div>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box ml={7} mr={7} className="toDo-form">
          <TextField fullWidth id="toDo" label="To Do" variant="outlined" onChange={e=>setToDo(e.target.value)} />
          
          <Button variant="outlined" onClick={e=>handleSubmit(e)}>Submit</Button>
          </Box>
        </Grid>

        <Grid 
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
          <Box ml={7} mr={7} className="toDo-list">
            <ul>
              <li>
                <Typography variant='h5'>clean dishes</Typography>
                <Button variant="outlined">Edit</Button>
              </li>
              <li>
                <Typography variant='h5' m={9}>clean dishes</Typography>
                <Button variant="outlined" m={2}>Edit</Button>
              </li>
              <li>
                <Typography variant='h5' m={9}>clean dishes</Typography>
                <Button variant="outlined" m={2}>Edit</Button>
              </li>
              <li>
                <Typography variant='h5' m={9}>clean dishes</Typography>
                <Button variant="outlined" m={2}>Edit</Button>
              </li>
             
              
            </ul>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ToDo