import React from 'react'
import {Box, Divider, Typography} from "@mui/material"
import {FavoriteBorderRounded, StarRounded} from "@mui/icons-material"
import Style from "./BrowseCard.module.css"
import FlipMove from 'react-flip-move';
import { useNavigate } from "react-router-dom"


const BrowseCards = ({Data}) => {

    const navigate = useNavigate()

    const getID = (event) =>{
        const {id} = event.target;
        navigate(`/room/${id}`)
    }

  return (
    <FlipMove >
    {
        Data.map((item,index)=>(
            <Box  mb={3} key={index}>
                <Box id={item.roomId}  mb={3} sx={{display:"flex", flexDirection:{xs:"column", md:"row"}, gridGap:"25px", transition:"all 500ms ease"}} >
                    <Box className={Style.CardImg}  onClick={getID}  >
                        <img src={item.images[0]}  loading="lazy" id={item.roomId} style={{height:"100%", width:"100%", borderRadius:"15px", objectFit:"cover", cursor:"pointer" }} />
                    </Box>
                    <Box sx={{width:{xs:"100%",md:"70%"}}}  >
                        <Box sx={{display:"flex", gridGap:"20px", justifyContent:"space-between"}} >
                            <Box>
                                <Typography variant="h5" id={item.roomId} sx={{cursor:"pointer"}} onClick={getID} >{item.title}</Typography>
                                <br/>
                                <Typography variant="h7" sx={{color:"#484848"}} >{item.subTitle}</Typography>
                            </Box>
                            <FavoriteBorderRounded />
                        </Box>
                        <Box mt={{xs:8,md:12}} sx={{display:"flex", gridGap:"20px", justifyContent:"space-between", alignItems:"center",}} >
                            <Box sx={{display:"flex", alignItems:"center", gridGap:"5px"}} >
                                <StarRounded  fontSize="24px" />
                                <Typography variant="h7">{item.star}</Typography>
                                <Typography variant="h" sx={{color:"#484848"}}> ({item.reviews.number} reviews)</Typography>
                            </Box>
                            <Typography variant="h6" sx={{color:"#484848"}}> night / {item.price}$</Typography>
                        </Box>
                    </Box>
                </Box>
                <Divider/>
        </Box>
        ))
     }
    </FlipMove>
  )
}

export default BrowseCards