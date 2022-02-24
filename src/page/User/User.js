import React from 'react'
import Style from "./User.module.css"
import {useNavigate} from "react-router-dom"
import {Box, Typography, TextField, Button, IconButton, LinearProgress, linearProgressClasses, Divider, Stack, } from"@mui/material"
import {AccountBox,HouseSiding} from '@mui/icons-material';

const User = () => {

  let navigate = useNavigate();
  const handleClick = (data) => () =>{
    navigate(data)
  }

  return (  
          <Box mt={2} sx={{display:"flex", flexDirection:{xs:"column",md:"row"} ,justifyContent:{xs:"center",md:"space-evenly"}}}  >
      
            <Box className={Style.Box} onClick={handleClick("details")} >
              <Box sx={{display:"flex", alignItems:"center", gridGap:".5rem"}} >
                <AccountBox/>
                <Typography variant="h6" >Personal Info</Typography>
              </Box>
              <p>Provide personal details and how we can reach you</p>
            </Box>

            <Box className={Style.Box} onClick={handleClick("reserved")} >
              <Box sx={{display:"flex", alignItems:"center", gridGap:".5rem"}} >
                <HouseSiding/>
                <Typography variant="h6" >Reserved Rooms</Typography>
              </Box>
              <p>You can know the booked information and edit it</p>
            </Box>
            
         </Box>
  )
}

export default User;