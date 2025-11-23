// src/components/BrushStroke.jsx
import React from "react";
import { Box } from "@mui/material";

const BrushStroke = ({ children, ...props }) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
        overflow: "visible", // DŮLEŽITÉ – umožní přesah

        "&::before": {
          content: '""',
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-40%, -50%)",

          /* ŠIRŠÍ než text → přesah  */
          width: "150%", // délka brush přes text
          height: "120%", // výška

          backgroundImage: "url('/underline.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
          backgroundSize: "50% 100%",
          opacity: 0.7,
          zIndex: 1,
          pointerEvents: "none",
        },

        "& > *": {
          position: "relative",
          zIndex: 2, // text nad brush
        },
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default BrushStroke;
