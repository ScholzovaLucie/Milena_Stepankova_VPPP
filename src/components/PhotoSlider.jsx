import { Box, IconButton, Stack } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useState } from "react";

import photo1 from "/public/photos/foto_1.png";
import photo2 from "/public/photos/foto_2.png";
import photo3 from "/public/photos/foto_3.png";
import photo4 from "/public/photos/foto_4.png";
import photo5 from "/public/photos/foto_5.png";
import photo6 from "/public/photos/foto_6.png";
import photo7 from "/public/photos/foto_7.png";
import photo8 from "/public/photos/foto_8.png";
import photo9 from "/public/photos/foto_9.png";
import photo10 from "/public/photos/foto_10.png";
import photo11 from "/public/photos/foto_11.png";
import photo12 from "/public/photos/foto_12.png";
import photo13 from "/public/photos/foto_13.png";
import photo14 from "/public/photos/foto_14.png";
import photo15 from "/public/photos/foto_15.png";
import photo16 from "/public/photos/foto_16.png";
import photo17 from "/public/photos/foto_17.png";
import photo18 from "/public/photos/foto_18.png";
import photo19 from "/public/photos/foto_19.png";
import photo20 from "/public/photos/foto_20.png";
import photo21 from "/public/photos/foto_21.png";
import photo22 from "/public/photos/foto_22.png";

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
  photo17,
  photo18,
  photo19,
  photo20,
  photo21,
  photo22,
];

export default function PhotoSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = () => {
    setPaused(true);
    setIndex((i) => (i === 0 ? photos.length - 1 : i - 1));
  };

  const next = () => {
    setPaused(true);
    setIndex((i) => (i === photos.length - 1 ? 0 : i + 1));
  };

  // jemný autoplay
  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % photos.length),
      5000
    );
    return () => clearInterval(id);
  }, [paused]);

  return (
    <Box
      id="photos-galery"
      sx={{
        py: { xs: 8, md: 10 },
        position: "relative",
        width: "100%",
        height: { xs: "75vh", sm: "85vh", md: "100vh" },
        overflow: "hidden",
        overflowX: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: 8,
        bgcolor: "background.paper",
      }}
    >
      {/* Obrázek */}
      <Box
        component="img"
        src={photos[index]}
        sx={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: { xs: "cover", md: "contain" },
          borderRadius: "15px",
          boxShadow: 3,
          transition: "opacity 0.5s ease",
        }}
      />

      <IconButton
        onClick={prev}
        sx={{
          position: "absolute",
          top: "50%",
          left: { xs: 6, md: 12 },
          transform: "translateY(-50%)",
          bgcolor: "rgba(255,255,255,0.85)",
          zIndex: 10,
          width: { xs: 36, md: 44 },
          height: { xs: 36, md: 44 },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton
        onClick={next}
        sx={{
          position: "absolute",
          top: "50%",
          right: { xs: 6, md: 12 },
          transform: "translateY(-50%)",
          bgcolor: "rgba(255,255,255,0.85)",
          zIndex: 10,
          width: { xs: 36, md: 44 },
          height: { xs: 36, md: 44 },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
      {/* Gradient for dots contrast */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: { xs: 60, md: 80 },
          zIndex: 5,
          pointerEvents: "none",
        }}
      />
      {/* Tečky */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          position: "absolute",
          bottom: 12, // pevně dole uvnitř slideru
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        {photos.map((_, i) => (
          <Box
            key={i}
            onClick={() => {
              setPaused(true);
              setIndex(i);
            }}
            sx={{
              width: { xs: 12, md: 10 },
              height: { xs: 12, md: 10 },
              borderRadius: "50%",
              cursor: "pointer",
              bgcolor: i === index ? "primary.main" : "rgba(0,0,0,0.25)",
              transition: "0.2s",
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}
