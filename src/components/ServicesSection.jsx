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
    title: "Individuální výživové poradenství pro psy",
    description:
      "Individuální konzultace zaměřená na konkrétní výživové potřeby vašeho psa – zohledním zdravotní stav psa, jeho kondici, zátěž i životní styl a doporučím vhodné krmení.",
    tag: "individuálně",
  },
  {
    title: "Analýza krmení a krmné dávky psa",
    description:
      "Posoudím aktuální krmnou dávku vašeho psa, složení krmiva i energetickou potřebu psa a navrhnu případné úpravy krmení.",
    tag: "odborný posudek",
  },
  {
    title: "Úprava hmotnosti a kondice psa",
    description:
      "Navrhnu bezpečný a dlouhodobě udržitelný režim krmení při hubnutí nebo nabírání hmotnosti psa, včetně kontroly kondice.",
    tag: "dlouhodobě",
  },
  {
    title: "Přechod na nové krmivo a způsob krmení",
    description:
      "Pomohu s přechodem vašeho psa na jiné krmivo nebo způsob krmení (granule, BARF, vařená strava) bez zbytečné zátěže pro psa.",
    tag: "individuální přístup",
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
              fontSize: { xs: 26, md: 40 },
              textTransform: "uppercase",
            }}
          >
            S čím vám mohu pomoci
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: 520,
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.8,
            }}
          >
            Poskytuji výživové poradenství pro psy zaměřené na individuální
            potřeby každého psa – jeho věk, zdravotní stav, kondici, zátěž i
            životní styl.
            <br />
            <br />
            Pomáhám s výživou vašeho psa – ať už se jedná o štěně v růstu, psího
            sportovce, seniora nebo pracovního psa.
            <br />
            <br />
            U psů s nadváhou či podváhou připravuji dlouhodobý a udržitelný plán
            krmení, jehož cílem je dosažení co nejlepší kondice psa bez zbytečné
            zátěže.
            <br />
            <br />
            Při úvodní konzultaci společně probereme, s čím ohledně krmení psa
            potřebujete pomoci, a získám od vás všechny důležité informace. Na
            jejich základě vypočítám energetickou potřebu psa, nastavím krmnou
            dávku a posoudím vhodnost současného krmiva.
            <br />
            <br />V případě potřeby doporučím alternativu krmení, vždy s ohledem
            na zdravotní stav psa i vaše finanční možnosti.
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
                justifyContent: "center",
                px: { xs: 1, md: 0 },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 520,
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    md: index % 2 === 0 ? "flex-start" : "flex-end",
                  },
                }}
              >
                <Card
                  sx={{
                    width: { xs: "100%", md: "90%" },
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
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 800,
                          fontSize: { xs: 16, md: 18 },
                        }}
                      >
                        {service.title}
                      </Typography>
                    </Stack>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: 14, md: 15 },
                        lineHeight: 1.7,
                      }}
                    >
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
