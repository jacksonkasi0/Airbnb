import React from 'react'
import Style from "./HotelPage.module.css"
import { styled } from '@mui/material/styles';

import {Box, Typography, TextField, Button, IconButton, LinearProgress, linearProgressClasses, Divider, Stack, } from"@mui/material"
import { useParams, useNavigate } from "react-router-dom"

import {StarRounded, IosShareRounded, FavoriteBorderRounded, AddRounded, RemoveRounded} from '@mui/icons-material/';

import ImgSlider from "../../components/ImgSwiper/ImgSwiper"
import BookingCard from "../../components/Bookingcard/Bookingcard"
import {myIcons} from "../../icons/icons"
import RoomData from "../../Rooms.json"
import Loading from '../../components/Loading/Loading';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#000' : '#308fe8',
  },
}));

const HotelPage = () => {

  const {roomID} = useParams();
  const navigate = useNavigate();

  const intialBookingData = {
    id:roomID,
    bookDate:[null, null],
    adults:1,
    childrens:0,
    infants:0,

  }

  const [myRoom, setMyRoom] = React.useState(null)

  const [screenW, setScreenW] = React.useState(window.screen.availWidth)

  React.useEffect(() => {
    const roomDetails = RoomData.roomData.filter( room => room.roomId === roomID )
    setMyRoom( roomDetails.length != 0 ? roomDetails[0] : null )
  }, [roomID])


  React.useLayoutEffect(()=>{
    let scrFunc = () => setScreenW(window.screen.availWidth);
    window.addEventListener("resize", scrFunc);
  },[])

  return (
    <>
    {
      myRoom === null ?
      
      <Loading/>
      
      :

      <Box mx={3} mt={3} >
      
        <Typography variant="h5" >{myRoom.title}</Typography>
        <Box sx={{display:{xs:"column",sm:"flex"},justifyContent:{xs:"start",sm:"space-between"}, gridGap:"20px", mt:2}} >
          <Box sx={{display:"flex",justifyContent:{xs:"start",sm:"space-between"}, gridGap:"15px"}} >
            <StarRounded fontSize="small"  sx={{color:"#FF5A5F"}} />
            <Typography >{myRoom.star}</Typography>
            <Typography >( {myRoom.reviews.number} reviews )</Typography>
            <Typography sx={{textDecoration:"underline", color:"#484848"}} >{ screenW < 400 ? "location" : myRoom.loaction}</Typography>
          </Box>
            <Box sx={{display:"flex", justifyContent:{xs:"start",sm:"space-between"}, gridGap:"10px", alignItems:"center"}} >
              <IosShareRounded fontSize="small" />
              <Typography  sx={{textDecoration:"underline"}} >share</Typography>
              <FavoriteBorderRounded fontSize="small" />
              <Typography  sx={{textDecoration:"underline"}} >save</Typography>
            </Box>
        </Box>
      
        <ImgSlider Data={myRoom.images} />

        <Box sx={{display:{xs:"culumn",md:"flex"}, justifyContent:"space-between",gridGap:"20px"}} >
        
          <Box mt={3} width={{xs:"100%",md:"60%"}}  >

            <Typography variant="h5" mb={2} >Note this things👀</Typography>
            <Typography variant="h7" mb={3} >{myRoom.subTitle}</Typography>
            <br />
            <br />
            <Divider/>

            <Typography variant="h5" mb={1} mt={3} >About this Hotel</Typography>
            <Typography fontSize="18px" >{myRoom.summary}</Typography>
            <br />
            <br />
            <Divider/>

            <Typography variant="h5" mt={3} >Where you'll sleep</Typography>
            <Box my={1} mb={3} sx={{display:{xs:"culumn",sm:"flex"}, gridGap:"25px"}} >
              {
                myRoom.sleep.map((item,index)=>
                  <Box key={index} >
                    <Typography variant="h6" >{item.title}</Typography>
                    <Typography variant="h7" sx={{color:"#484848"}} >{item.things}</Typography>
                  </Box>
                )
              }
            </Box>
            <Divider/>
            <br />
            <br />

            <Typography variant="h5" >What this place offers</Typography>
              {
                myRoom.amenities.map((item,index)=>
                  <Box key={index} mt={1} sx={{display:"flex", gridGap:"20px", alignItems:"center",}}  >
                    <span>{myIcons(item)}</span>
                    <Typography variant="h6">{item}</Typography>
                  </Box>
                )
              }

            <br />
            <br />

          </Box>

          <Box mt={3}  sx={{width:{xs:"100%", md:"40%"}, display:{xs:"flex",sm:"unset"}, justifyContent:"center"}}>
              <BookingCard Data={intialBookingData} Room={myRoom} Type={"bookingFirst"} />
          </Box>
           
        </Box>
        
        <br />
        <br />        
        <Divider/>

        <Box my={2} sx={{display:"flex", gridGap:"15px",alignItems:"center"}} >
            <StarRounded  sx={{color:"#FF5A5F"}}  />
            <Typography variant="h5" >{myRoom.star}</Typography>
            <Typography variant="h5" >({myRoom.reviews.number} reviews)</Typography>
        </Box>

        <Box sx={{display:"flex", flexDirection:{xs:"column",md:"row", justifyContent:"flex-start", gridGap:"10px"}}} > 
             <Box>
               {
                   Object.keys(myRoom.reviews).slice(1,4).map((item, index)=>{
                    return <table key={index} >
                              <tr>
                                <th style={{width:"150px"}} >
                                  <Typography variant="h6" >{item}</Typography>
                                </th>
                                <th style={{width:screenW < 420 ? "30vw" : "210px", display:screenW < 300 ? "none" : "block"}} > 
                                    <BorderLinearProgress variant="determinate" value={myRoom.reviews[item]*20} />
                                </th>
                                <th >
                                  <p>{myRoom.reviews[item]}</p>
                                </th>
                              </tr>
                          </table>
                  })
               }
             </Box>
              <Divider/>
             <Box>
               {
                   Object.keys(myRoom.reviews).slice(4,7).map((item,index)=>{
                    return <table key={index} >
                              <tr >
                                <th style={{width:"150px"}} >
                                  <Typography variant="h6" >{item}</Typography>
                                </th>
                                <th style={{width:screenW < 420 ? "30vw" : "210px", display:screenW < 300 ? "none" : "block"}} > 
                                    <BorderLinearProgress variant="determinate" value={myRoom.reviews[item]*20} />
                                </th>
                                <th >
                                  <p>{myRoom.reviews[item]}</p>
                                </th>
                              </tr>
                            </table>
                  })
               }
             </Box>
        </Box>

      </Box>
    }
    </>
  )
}

export default HotelPage