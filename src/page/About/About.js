import React from "react";
import { Box, Typography} from "@mui/material";
import MyAvatars from "../../components/MyAvatar/MyAvatars";

const About = () => {
  return (
    <Box display={{diplay:"flex",flexDirection:"column",textAlign:"center"}} >
     
      <MyAvatars
        avatarStyle={[true]}  // if u want get random value but don't change use like this 
        topType={[true, 1000]}
        accessoriesType={[true, 1200]}
        // facialHairType={[true,500]} // if don't wand this field (facialHair), so u don't use this  
        clothesType={[true,500]}
        clothesColorType={[true, 1000]} // get random value => u just give [ true , ms ] 
        eyeType={[true,1000]}
        eyebrow={[true,2000]}
        mouthType={[true,1200]}
        skinType={["Brown"]} // if you wand just one value, so u just give the value [ex: "Brown" for skincolor]
      />
      <br/>
      <br/>
      <Box mx={5} >
      <Typography variant="h4" fontWeight="bold" >About us</Typography>
      <Typography variant="h6" >Airbnb was born in 2007 when two Hosts welcomed three guests to their San Francisco home, and has since grown to 4 million Hosts who have welcomed more than 1 billion guest arrivals in almost every country across the globe. Every day, Hosts offer unique stays and one-of-a-kind activities that make it possible for guests to experience the world in a more authentic, connected way.</Typography>
      </Box>
      
    </Box>
  );
};

export default About;


  








