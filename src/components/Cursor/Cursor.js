import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Cursor.css";

const Cursor = () => {
  const [myclass, setMyclass] = useState("");
  const [position, setPosition] = useState({
    left: 0,
    top: 0,
  });

  const cursor = (e) => {
    
    setPosition({
      left: e.pageX,
      top: e.pageY,
    });

    let Title = document.querySelectorAll(".Title"); // select all class element

    for(let i = 0; i < Title.length; i++){
      Title[i].onmouseenter = () => {
        setMyclass("focus");
      };
  
      Title[i].onmouseleave = () => {
        setMyclass("");
      };

    }

  };

  window.onmousemove = cursor;

  return (
    <>
      <Box className={`cursor cursor-follower ${myclass}`} style={ position }/>
      <Box className={`cursor cursor-dot ${myclass}`} style={ position } />
    </>
  );
};

export default Cursor;
