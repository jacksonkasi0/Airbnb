import React from 'react';
import {useDispatch} from "react-redux";
import { createUser } from '../../store/action/User';
import {Box, Typography, TextField, Button, IconButton, LinearProgress, linearProgressClasses, Divider, Stack, } from"@mui/material"
import Style from "./User.module.css";


const UserDetails = ({userData}) => {
  
  const dispatch = useDispatch()

  const [user,setUser] = React.useState({
    name:userData.name,
    email:userData.email,
    phoneNo:userData.phoneNo,
    aadharNo:userData.aadharNo,
    address:userData.address,
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

  const [edit, setEdit] = React.useState(true);

  const handleClick =(type)=>(event)=>{
    if(type==="edit"){
     return setEdit(false);
    }
    if(type==="save"){
      event.preventDefault()
      if(isError || user.phoneNo.length <10){
        alert("Please enter a valid number")
        return
      }
      dispatch(createUser(user))
    }
    else{
      setUser(userData)
    }
    return setEdit(true);
  }


  return (
    <>
       <Box  mt={3} mx={2} sx={{display:"flex", justifyContent:{xs:"center",md:"space-between"}}} >
         <Box>
            <Typography variant="h4"  color="#484848"  >Personal Info</Typography>
            <Box my={2}   component="form">
              <Typography variant="h6" >User Name</Typography>
              <input disabled={edit} className={Style.dataInput}  name='name' required value={user.name}  onChange={handleChange}  />
              
              <Typography variant="h6" >Mail Address</Typography>
              <input disabled={edit} className={Style.dataInput} name='email' type="email" required value={user.email} onChange={handleChange}  />
              
              <Typography variant="h6" >Phone No</Typography>
              <input disabled={edit} className={Style.dataInput} name='phoneNo' type="number" required value={user.phoneNo} onChange={handleChange}  />
              
              <Typography variant="h6" >Aadhar No</Typography>
              <input disabled={edit} className={Style.dataInput} name='aadharNo' required value={user.aadharNo}  onChange={handleChange} />
              
              <Typography variant="h6" >Address</Typography>
              <textarea disabled={edit} className={Style.dataAddr} name='address' required value={user.address} onChange={handleChange}  />

              <br />
              {
                edit ?
                <Button className="Btn_Black" onClick={handleClick("edit")} >Edit</Button>
                :
              <Box sx={{display:"flex", justifyContent:"space-between"}} >
                <Button sx={{color:"#000"}} onClick={handleClick("cancel")} >Cancel</Button>
                <Button className="Btn_Black" type='submit' onClick={handleClick("save")} >Save</Button>
              </Box>
              }
            </Box>
            
         </Box>
       </Box>
    </>
  )
}

export default UserDetails;