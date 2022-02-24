import React,{useState} from 'react'
import { Link } from "react-router-dom"
import {Divider, Box, Container, Typography, IconButton, Button, Drawer } from "@mui/material"
import  MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import "./Navbar.css"
import Logo from "../../assets/logo.svg" 
import mdLogo from "../../assets/airbnb-icon.svg" 
import xsLogo from "../../assets/airbnb-tile.svg" 

const pages = ["browse", "account", "about"];


const Navbar = () => {

  //  toggle Drawer ( Side Menu )
  const [leftMenu, setLeftMenu] = useState({
    left:false
  });

  const toggleDrawer = ( value ,open) => (event)=>  {
    if ( event.type === 'keydown' && (event.key === 'Tab' || event.type === 'Shift' ) ){
      return
    }
    setLeftMenu({ ...leftMenu, [value]: open })
  }

  const NavBtn = (page) => {

  let type =  page==="browse" ? "/all" : "";
  return <Link to={"/"+page+type}  key={page} style={{ textDecoration:"none" }}>
          <Button  sx={{display: "block", cursor:"none" }} >
            <Typography variant="h7" fontWeight="600" sx={{color:"#484848", textTransform:"capitalize" }} >{page}</Typography>
          </Button>
      </Link>
  }
  
  
  return (
        <Box > 
          <Container maxWidth="xl" style={{marginTop:"15px", marginBottom:"10px"}} >
              <Box sx={{display:"flex", justifyContent:"space-between", alignItems: "center"}} >

                <Link to="/" className="Title">
                  <picture className="Logo" >
                    <source media="(max-width:599px)" srcSet={xsLogo} style={{ height:"60px"}}   />
                    <source media="(max-width:900px)" srcSet={mdLogo} style={{ height:"60px"}}   />
                    <img src={Logo} style={{ height:"50px"}}   />
                  </picture>
                </Link>

                <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                  {pages.map((page) => NavBtn(page)  )}
                </Box>

                {/* Mobile view Menu Bar & Drawer-Func */}
                <Box sx={{ display: { xs: "flex", sm: "none" }, alignSelf:"flex-end" }}>            
                  <IconButton size="large" onClick={toggleDrawer("left",true)} style={{ color: "black" }} >
                    <MenuRoundedIcon  sx={{ fontSize: 40 }} />
                  </IconButton>

                  <Drawer anchor="left" open={leftMenu["left"]}  onClose={toggleDrawer("left",false)} >
                    <Box sx={{ width: 250, textAlign:"center", mt:10, display:"grid",justifyItems:"center" }} role="presentation" onClick={toggleDrawer("left",false)} onKeyDown={toggleDrawer("left",false)}                     >
                     {pages.map((page) => NavBtn(page)  )}
                    </Box>  
                  </Drawer>
                </Box>
          </Box>

          </Container>
          <Divider variant="middle"  />
         </Box> 
  )
}

export default Navbar