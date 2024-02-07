import React from 'react';
import { useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Videos, ChannelCard} from "./"
import { Box } from '@mui/material';
import { fetchFromAPI } from '../utils/fetchFromApi';

const ChannelDetail = () => {
  const {id}=useParams();
  const [videos, setVideos]=useState([])

 
  
  const [channelDetail,setChannelDetail]=useState(null);
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]));


    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items))

  },[id])

  console.log(channelDetail, videos);
  return (
    <Box minHeight="95vh">
    <Box>
    <div style={{background: "linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
    zIndex:10,
    height:"300px"}}/>
    <ChannelCard channelDetail={channelDetail} marginTop={-110}/>
    </Box>
    <Box display="flex" p="2">
    <Box sx={{mr:{sm:"100px"}}}/>
    <Videos videos={videos}/>


    </Box>

    </Box>
)
}

export default ChannelDetail