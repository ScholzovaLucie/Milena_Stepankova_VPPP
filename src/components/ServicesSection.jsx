// src/components/ServicesSection.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import BrushStroke from "./BrushStroke";

const services = [
  {
    title: "Úvodní konzultace",
    description:
      "Projdeme společně aktuální krmivo, zdravotní stav i denní režim vašeho psa a nastavíme první doporučení.",
    tag: "60 minut",
  },
  {
    title: "Dlouhodobý výživový plán",
    description:
      "Podrobný plán krok za krokem, včetně doporučení konkrétních krmiv a nastavení porcí.",
    tag: "balíček",
  },
  {
    title: "Redukce váhy / nabrání hmotnosti",
    description:
      "Citlivé hubnutí nebo přibírání bez stresu, ladění porcí a pohybového režimu psa.",
    tag: "speciální režim",
  },
  {
    title: "Výběr krmiva & přechod",
    description:
      "Pomohu s výběrem vhodného krmiva (granule, BARF, vařená strava) a nastavením bezpečného přechodu.",
    tag: "online i osobně",
  },
];

const ServicesSection = () => {
  return (
    <Box
      id="services"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: "primary.dark",
        color: "common.white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* dekorace v pozadí */}
      <Box
        sx={{
          position: "absolute",
          inset: "-40%",
          background:
            "radial-gradient(circle at 0 0, rgba(255,255,255,0.12), transparent 55%)," +
            "radial-gradient(circle at 100% 100%, rgba(0,0,0,0.3), transparent 55%)",
          opacity: 0.9,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Stack
          direction={{ xs: "column", md: "column" }}
          spacing={3}
          alignItems={{ xs: "center", md: "center" }}
          justifyContent="space-between"
          textAlign="center"
          sx={{ mb: 5 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 30, md: 40 },
              textTransform: "uppercase",
            }}
          >
            Co pro vás můžu udělat
          </Typography>

          <Typography
            variant="body1"
            sx={{ maxWidth: 360, color: "rgba(255,255,255,0.9)" }}
          >
            Každý pes je jiný. Balíčky proto vždy přizpůsobujeme konkrétním
            potřebám – od štěňat až po psí seniory.
          </Typography>
        </Stack>

        <Grid
          container
          spacing={4}
          sx={{
            display: "flex",
            justifyContent: "center", // celé zarovná na střed
            alignItems: "stretch",
          }}
        >
          {services.map((service, index) => (
            <Grid
              item
              xs={12}
              md={6}
              key={service.title}
              sx={{
                display: "flex",
                justifyContent: "center", // výchozí zarovnání
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 520, // všechny jsou stejně široké
                  display: "flex",
                  justifyContent: index % 2 === 0 ? "flex-start" : "flex-end", // zig-zag
                }}
              >
                <Card
                  sx={{
                    width: "90%", // záměrně ne 100%, aby zig-zag byl vidět
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 5,
                    bgcolor: "rgba(255,255,255,0.96)",
                    color: "text.primary",
                    boxShadow: 6,
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      sx={{ mb: 2 }}
                    >
                      <Box
                        sx={{
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          bgcolor: "primary.light",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <PetsIcon fontSize="small" />
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 800 }}>
                        {service.title}
                      </Typography>
                    </Stack>
                    <Typography variant="body2">
                      {service.description}
                    </Typography>
                  </CardContent>

                  <CardActions
                    sx={{
                      px: 2.5,
                      pb: 2.5,
                      pt: 0,
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Chip label={service.tag} size="small" color="primary" />
                    <Button
                      size="small"
                      href="#contact"
                      sx={{ fontWeight: 700 }}
                    >
                      Chci tuto službu
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
