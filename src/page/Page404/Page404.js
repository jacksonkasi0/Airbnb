import React from 'react'
import {Box, Typography} from"@mui/material"
import Typewriter from 'typewriter-effect';

import Style from "./Page404.module.css"

const Page404 = () => {
  return (
    <Box mx={2} mb={3} sx={{display:"grid"}} >
        <Box className={Style.round} sx={{my:{xs:".8rem",md:"1.5rem"}, mx:"auto"}} >
          <img src={require("../../assets/img/oops.png")} className={Style.avatar} />
        </Box>
        <Typography sx={{color:"#555658", fontWeight:"bold", textAlign:"center"}} variant="h3" >
            Oops!
        </Typography>
        <Typography sx={{color:"#FF5A5F", fontWeight:"bold", textAlign:"center",mt:2}} variant="h5" >
          <Typewriter 
            options={{
              strings: ["We can't seem to find the page you're looking for 😞"],
              autoStart: true,
              loop: true,
            }}
          />
        </Typography>
    </Box>
  )
}

export default Page404