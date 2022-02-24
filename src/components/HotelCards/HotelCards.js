import React from "react";
import Style from "./HotelCards.module.css";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

const HotelCards = ({ Data }) => {
  
  let navigate = useNavigate();

  const getID = (event) => { 
    const {id} = event.target;
    navigate(`/room/${id}`)
    };

  return (
    <>
      {Data.map((data) => {
        return (
          <Card  sx={{ maxWidth: 345 }} key={data.roomId}>
            <CardActionArea>
              <CardMedia component="img" height="120"  image={data.images[0]} sx={{cursor:"pointer"}} alt={data.title} id={data.roomId} onClick={getID} />
            </CardActionArea>

            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{cursor:"pointer",fontWeight:"bold"}} id={data.roomId}  className={`${Style.title}`} onClick={getID} >{data.title}</Typography>
              <Typography  variant="h7" component="div" sx={{color:"#484848"}} >night / {data.price}$</Typography>
            </CardContent>

            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">SAVE</Button>
            </CardActions>

          </Card>
        );
      })}
    </>
  );
};

export default HotelCards;
