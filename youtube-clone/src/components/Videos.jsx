import { Stack,Box } from '@mui/material'
import React from 'react';
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard"
import Loader from './Loader';
const Videos = ({videos,direction}) => {
  if(!videos?.length) return "loading.."
  return(
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos