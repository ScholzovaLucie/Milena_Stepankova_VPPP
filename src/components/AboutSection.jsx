import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import BrushStroke from "./BrushStroke";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const AboutSection = () => {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: "background.paper",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {/* === HLAVNÍ BLOK: OBRÁZEK + TEXT === */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 8 }}
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 10, textAlign: "center" }}
        >
          {/* OBRÁZEK */}
          <Box
            component="img"
            src="4FA13EBA-E281-440A-B1D8-A2286ECBA194.png"
            alt="O mně"
            sx={{
              width: { xs: "80%", md: 320 },
              maxWidth: 350,
              borderRadius: 3,
              boxShadow: 3,
              mx: "auto",
            }}
          />

          {/* TEXT */}
          <Stack spacing={3} sx={{ maxWidth: 600, mx: "auto" }}>
            <BrushStroke color="secondary.light">
              <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 36 } }}>
                O mě
              </Typography>
            </BrushStroke>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: 28, md: 36 },
                mx: "auto",
                maxWidth: 500,
              }}
            >
              Moje cesta k výživovému poradenství
            </Typography>

            <Typography
              variant="body1"
              sx={{
                opacity: 0.8,
                maxWidth: 550,
                mx: "auto",
                fontSize: { xs: 15, md: 17 },
              }}
            >
              Zde si doplníš vlastní úvodní text – příběh o tom, jak jsi začala,
              tvůj vztah ke psům, motivaci a celkový přístup k výživě.
            </Typography>
          </Stack>
        </Stack>

        {/* === TIMELINE === */}
        <Box
          sx={{
            width: "100%",
            maxWidth: 900,
            mx: "auto",
            mt: 6,
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 4, md: 6 }}
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            sx={{ position: "relative" }}
          >
            {/* Mobile vertical line */}
            <Box
              sx={{
                display: { xs: "block", md: "none" },
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: "2px",
                bgcolor: "secondary.main",
                transform: "translateX(-50%)",
                opacity: 0.4,
              }}
            />

            {/* ITEM 1 */}
            <Stack
              sx={{
                position: "relative",
                textAlign: "center",
                maxWidth: 250,
              }}
            >
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  bgcolor: "secondary.main",
                  mx: "auto",
                  mb: 1,
                }}
              />

              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                2015 – První zkušenosti
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Sem si doplníš text. Například: Začala jsem pomáhat prvním
                známým řešit potravní intoleranci jejich psů…
              </Typography>
            </Stack>

            {/* Connector line (desktop) */}
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                height: "2px",
                width: 80,
                bgcolor: "secondary.main",
                opacity: 0.4,
              }}
            />

            {/* ITEM 2 */}
            <Stack
              sx={{
                position: "relative",
                textAlign: "center",
                maxWidth: 250,
              }}
            >
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  mx: "auto",
                  mb: 1,
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                2019 – Studium výživy psů
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Vlož vlastní text o studiu, kurzech, získání certifikací…
              </Typography>
            </Stack>

            {/* Connector line (desktop) */}
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                height: "2px",
                width: 80,
                bgcolor: "secondary.main",
                opacity: 0.4,
              }}
            />

            {/* ITEM 3 */}
            <Stack
              sx={{
                position: "relative",
                textAlign: "center",
                maxWidth: 250,
              }}
            >
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  bgcolor: "secondary.main",
                  mx: "auto",
                  mb: 1,
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                2023 – Konzultace na plný úvazek
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Popíšeš, jak jsi začala pracovat sama na sebe, otevřela
                konzultace a začala pomáhat více rodinám.
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
