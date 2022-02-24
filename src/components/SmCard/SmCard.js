import React from 'react'
import Style from "./SmCard.module.css"
import {Box, Typography} from"@mui/material"
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { useNavigate } from "react-router-dom"



const SmCard = ({Data}) => {
  
  const navigate = useNavigate();

  const [like, setLike] = React.useState(false) 
  
  const handleSwitch = (event) =>{
    navigate(`/browse/${event.target.id}`)
  }

  const handleClick = ()=>{
     setLike(sate=>!sate)
  }

  
  return (
    <>
    {
      
      Data.map((item,index)=>
        <Box sx={{padding:"10px", bgcolor:"#fff"}} className={Style.placeCard} key={index} >
            
            <img 
            src={require("../../assets/img/SmCard/"+item+".jpg")} 
            loading="lazy"
            id={item} 
            style={{height:"150px",
              width:"140px",
              borderRadius:"10px",
              objectFit:"cover", 
              boxShadow:"rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px", 
              cursor:"pointer" }}  
            onClick={handleSwitch} />

            <Box textAlign="start" display="flex" justifyContent="space-between" >
              <Box mt={1} >
                <Typography variant="h5" textTransform="capitalize" id={item} sx={{cursor:"pointer"}} onClick={handleSwitch}>{item}</Typography>
                <Typography variant="h7" color="gainsboro" >See All</Typography>
              </Box>
              <Box sx={{  color:`${like ? '#FF005F' : 'black' }`, mt:4.3 }} onClick={handleClick} >
                {like ? <FavoriteRoundedIcon fontSize="small" /> : <FavoriteBorderRoundedIcon fontSize="small" /> }
              </Box>
            </Box>
          </Box>
        )}
    </>
  )
}

export default SmCard;