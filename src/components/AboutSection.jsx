import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import BrushStroke from "./BrushStroke";

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
          textAlign: "center",
        }}
      >
        {/* === HLAVNÍ BLOK: TEXT === */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 8 }}
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 10 }}
        >
          <Stack
            spacing={3}
            alignItems="center"
            justifyContent="center"
            sx={{ maxWidth: 600, mx: "auto" }}
          >
            <BrushStroke color="secondary.light">
              <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 36 } }}>
                O mně
              </Typography>
            </BrushStroke>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: 26, md: 34 },
                mx: "auto",
                maxWidth: 500,
              }}
            >
              Moje cesta k výživovému poradenství
            </Typography>

            <Typography
              variant="body1"
              sx={{
                opacity: 0.85,
                maxWidth: 550,
                mx: "auto",
                fontSize: { xs: 15, md: 17 },
              }}
            >
              Jmenuji se Milena Štěpánková a se zvířaty žiji celý život. Psi
              byli vždy přirozenou součástí naší rodiny a už od dětství jsem se
              podílela na jejich péči, krmení i výcviku. Právě dlouholetá praxe
              a osobní zkušenosti mě postupně přivedly k výživovému poradenství,
              které dnes beru jako své poslání.
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
            <Stack sx={{ textAlign: "center", maxWidth: 250 }}>
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
                1987 – První hlubší kontakt se zvířaty
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Aktivní práce se zvířaty od dětství, péče o psy a začátky
                jezdecké dráhy, které položily základ k dalšímu profesnímu
                směřování.
              </Typography>
            </Stack>

            {/* Connector */}
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
            <Stack sx={{ textAlign: "center", maxWidth: 250 }}>
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
                2012–2019 – Chov a hledání odpovědí
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Pořízení první fenky pointera a vlastní chovatelská praxe. Právě
                problémy s krmením otevřely cestu k hlubšímu studiu výživy psů.
              </Typography>
            </Stack>

            {/* Connector */}
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
            <Stack sx={{ textAlign: "center", maxWidth: 250 }}>
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
                2019 – Výživové poradenství
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Absolvování kurzu výživového poradenství pro psy a zahájení
                konzultací s cílem pomáhat majitelům najít správnou výživu pro
                jejich psy.
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
