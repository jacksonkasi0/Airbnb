import React from 'react'
import Style from "./Account.module.css"

import { useSelector } from 'react-redux'
import {Link, useParams, useLocation,} from "react-router-dom"
import {Box, Typography, Breadcrumbs, TextField, Button, IconButton, LinearProgress, linearProgressClasses, Divider, Stack, } from"@mui/material"

import { NavigateNext } from "@mui/icons-material"

import SignUp from "../SignUp/SignUp"
import User from "../User/User"
import UserDetails from "../User/UserDetails"
import ReservedRooms from "../User/ReservedRooms"


const Account = () => {

  
  const {page} = useParams();

  const roomsInfo = useSelector((state)=>{
    return state.roomDetails.rooms;
  })

  const userInfo = useSelector((state)=>{
    return state.userDetails.users;
  })
  const userNun = userInfo.name === ""

  const UserPage =(state)=>{
    const path = {
      details: <UserDetails userData={userInfo} />,
      reserved: <ReservedRooms roomsData={roomsInfo} />,
      default: <User />
    };
    return (path[state] || path["default"])
  }


  const breadcrumbNameMap = {
    '/account': 'User',
    '/account/details': 'Details',
    '/account/reserved': 'Reserved',
  };

  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const PathLocation =()=>{
    return (
      <Breadcrumbs  mx={2} separator={<NavigateNext fontSize="small" />} >
        <Typography variant="h7" color="#484848" > Account </Typography>
        {pathnames.map(( _, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
  
          return last ? (
            <Typography variant="h7" color="#000" key={to}>
              {breadcrumbNameMap[to]}
            </Typography>
          ) : (
            <Link className={Style.navLink} to={to} key={to}>
              <Typography variant="h7" >{breadcrumbNameMap[to]}</Typography>
            </Link>
          );
        })}
      </Breadcrumbs>
    );
  };
  

  return (
    <>
    {
      userNun ? <SignUp/> :
      <>
        <Box  mt={3} mx={2} >
          
          {PathLocation()}

          {UserPage(page)}

        </Box>

      </>
    }
    </>
  )
}

export default Account