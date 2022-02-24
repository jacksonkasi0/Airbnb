import React from "react";
import Style from "./Home.module.css"

import { Link } from "react-router-dom";
import {Box, Typography, Avatar, AvatarGroup, Button, IconButton, Grid} from"@mui/material"
import {WifiRounded,BalconyRounded,TvRounded, PoolRounded, KeyboardArrowDown, KeyboardArrowUp} from '@mui/icons-material';

import ImgSwiper from "../../components/ImgSwiper/ImgSwiper" 
import SmCard from "../../components/SmCard/SmCard";
import HotelCards from "../../components/HotelCards/HotelCards";
import RoomData from '../../Rooms.json';

const smCardData = ["mountain","beach","snow","desert","plain" ]
const CardsData =  RoomData.roomData.slice(0,3);
const CardImg = [1,2,3,4,5,6,7,8,9].map(item=>require('../../assets/img/home/'+item+'.jpg'))

const Home = () => {
  
  const [arrow, setArrow] = React.useState(true)
  

  return (
    <>

      <ImgSwiper Data={CardImg} Type={"home"} />

      <Box sx={{width:{xs:"90%", md:"70%"}}} className={Style.CardBox} >
        <Box>
          <Box sx={{display:"flex", justifyContent:"space-between"}}>
          <Typography variant="h5">Facilities</Typography>
          <Typography variant="h7" color="#FF9335" >See All</Typography>
          </Box>  
         
          <Box sx={{display:"flex", gridGap:"10px"}} >
            <Avatar sx={{color:"#0077ff"}} variant="rounded" className={Style.icons} >
              <PoolRounded />
            </Avatar>
            <Avatar sx={{color:"#ff5e00"}} variant="rounded" className={Style.icons} >
              <WifiRounded />
            </Avatar>
            <Avatar sx={{color:"#06d610"}} variant="rounded" className={Style.icons} >
              <BalconyRounded />
            </Avatar>
            <Avatar sx={{color:"#000"}} variant="rounded" className={Style.icons} >
              <TvRounded />
            </Avatar>
          </Box>
        </Box>
        
        <Box>
          <Typography variant="h5">Hotels For you</Typography>
          <Link to="/browse/all" style={{textDecoration:"none"}} >
            <Button className="Btn" >Search</Button>
          </Link>
        </Box>

        <Box>
          <Typography variant="h5">999+ Results</Typography>
          <AvatarGroup max={5}>
          {
            CardImg.map((item,index)=><Avatar src={item} key={index} /> )
          }
          </AvatarGroup>
        </Box>

      </Box>

    <Box mb={13}  mt={{md:13}} px={1} className={Style.placeContainer} >
      <Typography variant="h4" textAlign="center" mb={2} className="Title white_Title" >Choose a place that suits your mind...</Typography>
      <Box  height={ arrow ? "267px" : "auto"} className={Style.placeBox}>
        <Box my={2} className={Style.place} id="place" >
          <SmCard Data={smCardData} />
        </Box>
      </Box>
      <>
        <Box className={Style.ShowCard} />
        <IconButton className={Style.arrowIcon} onClick={()=>{setArrow(!arrow)}} >
            {arrow ? <KeyboardArrowDown/> : <KeyboardArrowUp/>}
        </IconButton>
      </>  
    </Box>

    <Box mx={2} ml="32px" >
      <Typography variant="h4" textAlign="center" className="Title white_Title" >Most loved palces</Typography>
      <br />
      <br />
      <Grid container spacing={{ xs: 2, md: 3 }} sx={{gridGap:{xs:"1rem",md:"2em"},justifyContent:"center"}} >
          <HotelCards Data={CardsData} />
      </Grid>
    </Box>

    </>
  );
};

export default Home;
