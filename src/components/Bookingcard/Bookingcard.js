import React from 'react'
import "./style.css"

import { useSelector, useDispatch } from 'react-redux'
import { addRoom, updateRoom } from "../../store/action/Room"

import {Box, Typography, TextField, Button, IconButton, Divider, Stack, Zoom } from"@mui/material"
import { useParams } from "react-router-dom"

import {StarRounded, IosShareRounded, CloseRounded, AddRounded, RemoveRounded} from '@mui/icons-material/';

import addWeeks from 'date-fns/addWeeks';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDateRangePicker from '@mui/lab/MobileDateRangePicker';
import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker';

import {  useSnackbar } from 'notistack';



const BookingCard = ({Data,Room,Type}) => {

  const dispatch = useDispatch();

  const userInfo = useSelector((state)=>{
    return state.userDetails.users;
  })

  const roomsInfo = useSelector((state)=>{
    return state.roomDetails.rooms;
  })


  const userNun = userInfo.name === ""

  const [screenW, setScreenW] = React.useState(window.screen.availWidth)
  
  React.useLayoutEffect(()=>{
    let scrFunc = () => setScreenW(window.screen.availWidth);
    window.addEventListener("resize", scrFunc);
  },[])
  
  const [bookRoom, setBookRoom] = React.useState(Data);

  const action = key =>(
    <React.Fragment>
      <IconButton onClick={()=>{closeSnackbar(key)}} sx={{color:"#ffff"}} >
      < CloseRounded />
      </IconButton>
    </React.Fragment>
  )

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const handleSnackbar = (value,type) =>{
    enqueueSnackbar( value,
      {
        variant:type,
        TransitionComponent:Zoom,
        action,
      }
  )};
  
  const isSame =  roomsInfo.some( (item) =>  item.id === bookRoom.id) // if the room already booked, it will return true
  
  const handleChange = (value,type)=>{
    setBookRoom((currValue)=>{
      return {
        ...currValue,
        [type]:value
      }
    })
  }

  const [countAdd, setCountAdd] = React.useState({
    adults:false,
    childrens:false,
    infants:false
  });
  
  const [countSub, setCountSub] = React.useState({
    adults:false,
    childrens:false,
    infants:false
  });

  React.useEffect(()=>{
    let Add = (bookRoom.adults + bookRoom.childrens + bookRoom.infants);
    if(Add>0){
        setCountAdd({
          adults: Add === 15 ? true : false,
          childrens:Add === 15 ? true : false,
          infants: Add === 15 ? true : false
        })
    }
    if(Add<15){
        setCountSub({
        adults: Add === 0 ?true : false,
        childrens: Add === 0 ? true : false,
        infants: Add === 0 ? true : false
        })
    }
  },[bookRoom])


  const handleAdd = (name) => () =>{
    let count = bookRoom[name]+1;
    setBookRoom((currValue)=>{
      return {
        ...currValue,
        [name]: (count > 0 && count <= 15) ? count : 15
      }
    });
  }

  const handleSub = (name) => () =>{
    let count = bookRoom[name]-1;
    setBookRoom((currValue)=>{
      return {
        ...currValue,
        [name]: ( count >= 0 && count < 15 ) ? count : 0
      }
    });
  }

  
  const handleReserveRoom = () =>{
    if(Type!=="Update"){
      if(isSame){
        handleSnackbar("you can't book the same room at multiple time🙅‍♂️, you can go edit page😊","error")
        return
      }
    }

    if(!userNun){
      if(bookRoom.bookDate[0] !== null){
        let Num = (bookRoom.adults + bookRoom.childrens + bookRoom.infants);
        if(Num!==0){
          if(Type === "bookingFirst"){
            dispatch(addRoom(bookRoom))
            handleSnackbar("Successfully reserved room","success")
            return setBookRoom(Data)
          }
          if(Type === "Update"){
            console.log(bookRoom)
            dispatch(updateRoom(bookRoom))
            handleSnackbar("Successfully update room details","success")
            console.log(roomsInfo);
            return
          }
        }else{
          handleSnackbar("User should be add atleast one adults","default")
        }
      }else{
        handleSnackbar("Please check availability","warning")
      }
    }else{
      handleSnackbar("please first create an account!","warning")
    }
  }

  return (
   
    <Box  sx={{mx:"auto", width:{xs:"95%", md:"75%"}, minWidth:{md:"350px"}}} className="bookingCard">
              
    <Box mb={3} sx={{display:"flex", justifyContent:"center", gridGap:"15px" }} >
      <Typography variant="h6">${Room.price} / night</Typography>
      <Box ml={3} sx={{display:"flex", gridGap:"15px", alignItems:"center"}} >
        <Box sx={{display:"flex"}} >
          <StarRounded fontSize="small" sx={{color:"#FF5A5F"}} />
          <Typography >{Room.star}</Typography>
        </Box>
        <Typography >( {Room.reviews.number} reviews )</Typography>
      </Box>
    </Box>
    
    {
     (Type!=="Update" && isSame ) && <Typography textAlign="center" color="#484848" >You'r already reserved this room😀</Typography>
    }
    <br/>

    <Box sx={{display:"flex", justifyContent:"center"}}  >
      <LocalizationProvider dateAdapter={AdapterDateFns} >
        <Stack spacing={3} sx={{mb:3, }}>
          {

            screenW > 650 ?

            <DesktopDateRangePicker
            disablePast
            startText="CHECK-IN"
            endText="CHECK-OUT"
              value={bookRoom.bookDate}
              onChange={(e)=>handleChange(e,"bookDate")}

              renderInput={(check_in, check_out) =>(
                <React.Fragment>
                  <TextField {...check_in} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...check_out} />
                </React.Fragment>
              )}
            />
              
            :
              
            <MobileDateRangePicker
              disablePast
              startText="CHECK-IN"
              endText="CHECK-OUT"
              value={bookRoom.bookDate}
              onChange={(e)=>handleChange(e,"bookDate")}  

              
              renderInput={(check_in, check_out) =>(
                <React.Fragment>
                  <TextField {...check_in} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...check_out} />
                </React.Fragment>
              )}
              />
            }
        </Stack>
      </LocalizationProvider>
    </Box>
        
    <Button  className="Btn_Black" size="small" sx={{px:5, py:2, margin:"auto", display:bookRoom.bookDate[0] === null ? "none" : "block"  }} 
    onClick={()=>{setBookRoom(currVal=>{return {...currVal,["bookDate"]:[null,null]} }) }} >Clear Date</Button>


    <Box>
      <Box my={2} sx={{display:"flex", justifyContent:"space-between", gridGap:"10px", alignItems:"center"}} >
        <Box>
          <Typography variant="h6">Adults</Typography>
          <Typography variant="h7" sx={{color:"#484848"}} >Age 13+</Typography>
        </Box>
        <Box sx={{display:"flex",alignItems:"center", gridGap:"10px"}} >
          <IconButton sx={{border:"1px solid #000"}} disabled={countSub.adults} onClick={handleSub("adults")} >
            <RemoveRounded/>
          </IconButton>
          <Box sx={{ mx: 2 }}>{bookRoom.adults}</Box>
          <IconButton sx={{border:"1px solid #000"}} disabled={countAdd.adults} onClick={handleAdd("adults")} >
            <AddRounded/>
          </IconButton>
        </Box>
      </Box>

      <Box my={2} sx={{display:"flex", justifyContent:"space-between", gridGap:"10px",alignItems:"center"}} >
        <Box>
          <Typography variant="h6">Childrens</Typography>
          <Typography variant="h7" sx={{color:"#484848"}} >Ages 2–12</Typography>
        </Box>
        <Box sx={{display:"flex",alignItems:"center", gridGap:"10px"}} >
          <IconButton sx={{border:"1px solid #000"}} disabled={countSub.childrens} onClick={handleSub("childrens")} >
            <RemoveRounded/>
          </IconButton>
          <Box sx={{ mx: 2 }}>{bookRoom.childrens}</Box>
          <IconButton sx={{border:"1px solid #000"}}  disabled={countAdd.childrens} onClick={handleAdd("childrens")} >
            <AddRounded/>
          </IconButton>
        </Box>
      </Box>

      <Box my={2} sx={{display:"flex", justifyContent:"space-between", gridGap:"10px",alignItems:"center"}} >
        <Box>
          <Typography variant="h6">Infants</Typography>
          <Typography variant="h7" sx={{color:"#484848"}} >Under 2</Typography>
        </Box>
        <Box sx={{display:"flex",alignItems:"center", gridGap:"10px"}} >
          <IconButton sx={{border:"1px solid #000"}} disabled={countSub.infants} onClick={handleSub("infants")} >
            <RemoveRounded/>
          </IconButton>
          <Box sx={{ mx: 2 }}>{bookRoom.infants}</Box>
          <IconButton sx={{border:"1px solid #000"}} disabled={countAdd.infants} onClick={handleAdd("infants")} >
            <AddRounded/>
          </IconButton>
        </Box>
      </Box>
      
    </Box>

    <Button className="Btn" sx={{px:5, py:2, margin:"auto", display:"block"}} onClick={handleReserveRoom} >{bookRoom.bookDate[0] === null ? "Check availability" : "Reserve"}</Button>


    </Box>
  )
}


export default BookingCard;