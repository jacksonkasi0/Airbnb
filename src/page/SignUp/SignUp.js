import React from 'react'
import {Box, Typography, TextField, Button, IconButton, LinearProgress, linearProgressClasses, Divider, Stack, } from"@mui/material"
import {useDispatch} from "react-redux";
import {createUser} from "../../store/action/User"

const SignUp = () => {

  const dispatch = useDispatch()

  const [user,setUser] = React.useState({
    name:"",
    email:"",
    phoneNo:"",
    aadharNo:"",
    address:"",
  })

  const [isError, setIsError] = React.useState(false);

  const handleChange = (event)=>{
      const {name,value} = event.target;
      if(name==="phoneNo"){
        if (event.target.value.length > 10) {
          setIsError(true);
        }
        else{
          setIsError(false);
        }
      }
      setUser((currValue)=>{
        return{
          ...currValue,
          [name]:value
        }
      })
  }
  
    const handleClear = ()=>{
      setUser({
        name:"",
        email:"",
        phoneNo:"",
        aadharNo:"",
        address:"",
      })
    }

  const handleSubmit =(event)=>{
    event.preventDefault()
    if(isError || user.phoneNo.length <10){
      alert("Please enter a valid number")
      return
    }
    dispatch(createUser(user))
  }

  return (
    <Box >
      <Box  sx={{minWidth:{xs:"80%", sm:"200px"}, maxWidth:"500px", margin:"auto" }} px={2} pt={5}
        component="form" onSubmit={handleSubmit} >

        <Box my={1}>
          <Typography variant='h6' >User Name</Typography>
          <TextField variant="outlined"  value={user.name} name='name' required fullWidth onChange={handleChange} />
        </Box>
        <Box my={1}>
          <Typography variant='h6' >Email Address</Typography>
          <TextField variant="outlined"  value={user.email} name='email' type="email" required fullWidth onChange={handleChange} />
        </Box>
        <Box my={1} >
          <Typography variant='h6' >Phone Number</Typography>
          <TextField variant="outlined"  value={user.phoneNo} name='phoneNo' type="number" error={isError}
          required fullWidth onChange={handleChange} />
        </Box>
        <Box my={1} >
          <Typography variant='h6' >Aadhar Number</Typography>
          <TextField variant="outlined"  value={user.aadharNo} name='aadharNo' required fullWidth onChange={handleChange} />
        </Box>
        <Box my={1} >
          <Typography variant='h6' >Address</Typography>
          <TextField 
            variant="outlined"  value={user.address} name='address' multiline rows={5}
            required  fullWidth onChange={handleChange} />
        </Box>
        <Box my={3} sx={{display:"flex", justifyContent:"space-between"}} >
          <Button sx={{color:"#000"}} onClick={handleClear} >Clear</Button>
          <Button className="Btn" type='submit' >SignUp</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default SignUp