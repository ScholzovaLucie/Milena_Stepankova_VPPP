import { Box, Container, Typography, Modal } from "@mui/material";
import { useState } from "react";

import bcsGiant from "/public/photos/bcs-giant.png";
import bcsLarge from "/public/photos/bcs-large.png";
import bcsMedium from "/public/photos/bcs-medium.png";
import bcsSmall from "/public/photos/bcs-small.png";
import bcsToy from "/public/photos/bcs-toy.png";

const guides = [
  { title: "Giant Dog", img: bcsGiant },
  { title: "Large Dog", img: bcsLarge },
  { title: "Medium Dog", img: bcsMedium },
  { title: "Small Dog", img: bcsSmall },
  { title: "Toy Dog", img: bcsToy },
];

export default function BcsGuide() {
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState(null);

  const showPreview = (img) => {
    setPreview(img);
    setOpen(true);
  };

  return (
    <Box
      id="bcs-guide"
      sx={{
        py: { xs: 8, md: 10 },
        width: "100%",
        mt: 8,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          width: "100%",
          overflowX: "hidden",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: 4,
            fontWeight: 700,
            fontSize: { xs: 22, md: 28 },
            textAlign: "center",
          }}
        >
          Body Condition Score – návody
        </Typography>

        {/* ---- FLEX WRAP – přehledné uspořádání ---- */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
            rowGap: { xs: 4, md: 4 },
            gap: { xs: 3, md: 4 },
            width: "100%",
            justifyItems: "center",
          }}
        >
          {guides.slice(0, 5).map((g, index, arr) => {
            const isLastOdd = index === arr.length - 1 && arr.length % 2 === 1;

            return (
              <Box
                key={g.title}
                sx={{
                  width: "100%",
                  maxWidth: 520,
                  gridColumn: {
                    md: isLastOdd ? "1 / -1" : "auto",
                  },
                  justifySelf: {
                    md: isLastOdd ? "center" : "stretch",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1,
                    fontWeight: 600,
                    fontSize: { xs: 16, md: 18 },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {g.title}
                </Typography>

                <Box
                  component="img"
                  src={g.img}
                  onClick={() => showPreview(g.img)}
                  alt={g.title}
                  sx={{
                    width: "100%",
                    maxHeight: { xs: 320, md: "none" },
                    objectFit: "contain",
                    borderRadius: 2,
                    cursor: "pointer",
                    boxShadow: 3,
                    transition: "0.25s",
                    "&:hover": { opacity: 0.85 },
                    "&:active": { transform: "scale(0.98)" },
                  }}
                />
              </Box>
            );
          })}
        </Box>

        {/* ---- Modal (náhled) ---- */}
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box
            sx={{
              position: "absolute",
              top: { xs: "50%", md: "50%" },
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "white",
              p: { xs: 1, md: 2 },
              borderRadius: 2,
              width: { xs: "100%", md: "auto" },
              height: { xs: "100%", md: "auto" },
              maxWidth: "100vw",
              maxHeight: "100vh",
              boxShadow: 24,
            }}
          >
            <Box
              component="img"
              src={preview}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: { xs: "contain", md: "contain" },
              }}
            />
          </Box>
        </Modal>
      </Container>
    </Box>
  );
}
