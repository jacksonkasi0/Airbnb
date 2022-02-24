import React from "react";
import Style from "./User.module.css"

import { Box, Typography, Grid,  Button, CardMedia, IconButton, Slide ,CardActionArea, CardContent, CardActions, Card, Dialog} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import BookingCard from "../../components/Bookingcard/Bookingcard";

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { useNavigate } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { deleteRoom } from "../../store/action/Room"; 


import RoomData from "../../Rooms.json";

const ReservedRooms = () => {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const roomsData = useSelector((state)=>{
    return state.roomDetails.rooms;
  })

  console.log(roomsData)

  const [open, setOpen] = React.useState(false);

  const [roomDetail,setRoomDetails] = React.useState({
    roomDetail:"",
    roomData:""
  })

  const handleClose = () => {
    setOpen(false);
  };

  const editRoom =(room,type)=>()=>{
    if(type==="del"){
      return dispatch(deleteRoom(room.id))
    }
    const data_ = RoomData.roomData.find((item) => item.roomId === room.id);
    setRoomDetails({
      roomDetail:data_,
      roomData:room
    })
    setOpen(true);
  }

  const getData = (room) => {
    const data = RoomData.roomData.find((item) => item.roomId === room.id);

    console.log(room)

     const date  = room.bookDate.map((date)=> {
      const t = new Date(date).toDateString().split(" ");
      return( `${t[2]} ${t[1]}  ${t[3] }`)  
     })


    return (
        <Card my={2} sx={{ maxWidth: 260 }} key={data.roomId} >
            <CardActionArea >
              <CardMedia component="img" height="120"  image={data.images[0]} sx={{cursor:"pointer"}} alt={data.title} onClick={()=>navigate(`/room/${room.id}`)} />
            </CardActionArea>

            <CardContent>
              <Typography gutterBottom variant="h5" sx={{cursor:"pointer",fontWeight:"bold"}} className={`${Style.title}`} onClick={()=>navigate(`/room/${room.id}`)} >{data.title}</Typography>

              <Typography sx={{color:"#484848"}}  variant="h7" >({date[0]}) - ({date[1]})</Typography>
              <br />
              <br />
              <Typography  variant="h6" sx={{color:"#484848"}} >Adults &emsp;&nbsp; - {room.adults}</Typography>
              <Typography  variant="h6" sx={{color:"#484848"}} >Children's - {room.childrens}</Typography>
              <Typography  variant="h6" sx={{color:"#484848"}} >Infants &emsp;&nbsp; - {room.infants}</Typography>
        

            </CardContent>

            <CardActions sx={{dispay:"flex", justifyContent:"space-between"}} >
              <Button size="small" sx={{color:"red"}}  onClick={editRoom(room,"del")} >Delete</Button>
              <Button size="small" className="Btn_Black" onClick={editRoom(room,"edit")} >Edit</Button>
            </CardActions>

          </Card>
    );
  };

  return (
    <Box mt={3} mx={2}>
      <Typography variant="h4" color="#484848">Reserved Rooms</Typography>
      <br/>
      <br/>
        <Grid my={2} container spacing={{ xs: 2, md: 3 }} sx={{gridGap:"2em",justifyContent:"center"}} >          
        {roomsData.map((room) => 
            getData(room)
            )}
        </Grid>
        <Dialog
        sx={{cursor:"default"}}
        open={open}
        TransitionComponent={Slide}
        fullScreen={fullScreen}
        scroll="body"
        onClose={handleClose}
        >
          <Box mx={2} my={2} sx={{display:"flex",justifyContent:"space-between"}} >
            <Typography  variant="h5" textAlign="center" sx={{color:"#484848"}} >Edit the Info😀</Typography>
            <IconButton onClick={handleClose} >
              <CloseIcon />
            </IconButton>
          </Box>
        <BookingCard Data={roomDetail.roomData} Room={roomDetail.roomDetail} Type={"Update"} />
        
      </Dialog>
    </Box>
  );
};

export default ReservedRooms;
