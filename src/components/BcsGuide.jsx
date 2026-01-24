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
          maxWidth: "100%",
        }}
      >
        <Typography variant="h3" sx={{ mb: 4, fontWeight: 700 }}>
          Body Condition Score – návody
        </Typography>

        {/* ---- FLEX WRAP – přehledné uspořádání ---- */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
            gap: 4,
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
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  {g.title}
                </Typography>

                <Box
                  component="img"
                  src={g.img}
                  onClick={() => showPreview(g.img)}
                  alt={g.title}
                  sx={{
                    width: "100%",
                    borderRadius: 2,
                    cursor: "pointer",
                    boxShadow: 3,
                    transition: "0.25s",
                    "&:hover": { opacity: 0.85 },
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
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "white",
              p: 2,
              borderRadius: 2,
              maxWidth: "90vw",
              maxHeight: "90vh",
              boxShadow: 24,
            }}
          >
            <Box
              component="img"
              src={preview}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        </Modal>
      </Container>
    </Box>
  );
}
