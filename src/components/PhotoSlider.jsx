import { Box, IconButton, Stack } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useState } from "react";

import photo1 from "/public/photos/4FA13EBA-E281-440A-B1D8-A2286ECBA194.png";
import photo2 from "/public/photos/06B4D1B6-BA34-4B54-AFA6-CCC5F0BA774D.png";
import photo3 from "/public/photos/107CCDB0-67F4-4FEF-AA51-F77437982E99.png";
import photo4 from "/public/photos/9242A66D-5612-4BFD-BB8C-45D3C454AE87.png";
import photo5 from "/public/photos/E4670F06-80EF-4770-94B7-A34A3A2FD607.png";

const photos = [photo1, photo2, photo3, photo4, photo5];

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
        height: { xs: 260, sm: "100vh" },
        borderRadius: 2,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: 8,
      }}
    >
      {/* Obrázek */}
      <Box
        component="img"
        src={photos[index]}
        sx={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
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
          left: 12,
          transform: "translateY(-50%)",
          bgcolor: "rgba(255,255,255,0.85)",
          zIndex: 10, // ← DŮLEŽITÁ OPRAVA
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton
        onClick={next}
        sx={{
          position: "absolute",
          top: "50%",
          right: 12,
          transform: "translateY(-50%)",
          bgcolor: "rgba(255,255,255,0.85)",
          zIndex: 10, // ← DŮLEŽITÁ OPRAVA
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
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
              width: 10,
              height: 10,
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
