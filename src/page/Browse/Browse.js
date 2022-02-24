import React from "react";
import { Chip, Box, Divider } from '@mui/material';
import {FilterListRounded} from '@mui/icons-material';

import { useParams, useNavigate } from "react-router-dom"

import BrowseCards from "../../components/BrowseCards/BrowseCards"

import Style from "./Browse.module.css"

import { myIcons } from "../../icons/icons";
import RoomData from '../../Rooms.json';

const Browse = () => {

  const { type } = useParams();
  const navigate = useNavigate();

  const [chip, setChip] = React.useState(type)
  const [cardData, setCardData] = React.useState(RoomData.roomData)


  React.useEffect(() => {
    if(type === "all"){
      setCardData(RoomData.roomData);
      return
    }
    let listData = RoomData.roomData.filter((data)=>{
        return data.type === type;
    });
    setCardData(listData)
  }, [type])
  

  const handleClick = (event)=>{
   const {textContent} = event.target
    setChip(textContent);
    console.log(type)
    navigate(`/browse/${textContent}`)
  }

  const chips =  ["all","mountain","beach","snow","desert","plain"].map(item=>(// create place chips
    <Chip
    key={item}
    label={item}
    variant={item === chip ? "filled": "outlined" }
    onClick={handleClick}
    />
  ))

  return (
    <Box mx={2} >
      <Box my={2} sx={{display:"flex", gridGap:"20px", flexWrap:"wrap"}}  >
    
        <Chip icon={<FilterListRounded />}  label="Filters" sx={{color:"#000"}} />
        <Divider variant="middle" orientation="vertical" flexItem  />

        <Chip label="Price" variant="outlined" sx={{color:"#FF005E"}} />
        <Chip label="Type of place" variant="outlined" sx={{color:"#FF005E"}} />

        <Divider  variant="middle" orientation="vertical" flexItem  />
        {chips} 
      </Box>
      
      <Divider  />
      <br />
    <BrowseCards Data={cardData} />

    </Box>
  );
};

export default Browse;
