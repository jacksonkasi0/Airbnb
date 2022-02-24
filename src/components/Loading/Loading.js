import React from "react";
import {Divider, Skeleton,Stack} from '@mui/material'
import { Box } from "@mui/system";


const Loading = () => {
  return (
    <Box  marginX={7} marginY={5}  >
      <Stack spacing={1}>
        <Box sx={{display:"flex", justifyContent:"space-between" }} >
            <Box sx={{display:"block",width:"50%" }} >
                <Skeleton animation="wave"  variant="text" height={50} />
                <Skeleton animation="wave"  variant="text" width="70%" height={50} />
            </Box> 
            <Box sx={{display:"flex", justifyContent:"space-around", paddingTop:"7px"}} width={150} >
                <Skeleton animation="wave"  variant="circular" width={35} height={35} />
                <Skeleton animation="wave"  variant="circular" width={35} height={35} />
                <Skeleton animation="wave"  variant="circular" width={35} height={35} />
            </Box>
        </Box>

        <Box sx={{display:"flex", justifyContent:"space-between", minWidth:"200px", maxWidth:"28%" }} >
            <Skeleton animation="wave"  variant="text" width="20%" height={18} />
            <Skeleton animation="wave"  variant="text" width="70%" height={18} />
        </Box>
        <br />
        <Box sx={{width:"100%"}} >
            <Box sx={{display:"flex", gridGap:"20px"}} >
                <Box sx={{width:"38%", borderRadius:"10px", overflow:"hidden"}} >
                    <Skeleton animation="wave"  variant="rectangular" width="100%"  height={250}  />
                </Box>
                <Box sx={{width:"50%",display:"flex", flexDirection:"column", gridGap:"10px"}} >
                    <Skeleton animation="wave"  variant="text" width="100%" height={22} />
                    <Skeleton animation="wave"  variant="text" width="100%" height={22} />
                    <Skeleton animation="wave"  variant="text" width="100%" height={22} />
                    <Skeleton animation="wave"  variant="text" width="100%" height={22} />
                    <Skeleton animation="wave"  variant="text" width="100%" height={22} />
                    <Skeleton animation="wave"  variant="text" width="100%" height={22} />
                    <Skeleton animation="wave"  variant="text" width="100%" height={22} />
                    <Skeleton animation="wave"  variant="text" width="100%" height={22} />
                </Box>
            </Box>
        </Box>

      </Stack>
    </Box>
  );
};

export default Loading;
