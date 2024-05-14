import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const ExerciseVideos = (props) => {
  const { exerciseVideos, name } = props;
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        videos on YouTube
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "80px", xs: "0" } }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
            <Stack>
            <iframe title={item.video.title} src={`https://www.youtube.com/embed/${item.video.videoId}`} width='375px' height='275px'/>
            <Box>
                <Typography variant='h5' color='#000'>
                    {item.video.title}
                </Typography>
                <Typography variant='h6' color='#000'>
                    {item.video.channelName}
                </Typography>
            </Box>
            </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
