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

export const services = [
  {
    title: "Individuální výživové poradenství pro psy",
    description: (
      <Typography component="ul" sx={{ pl: 2, m: 0 }}>
        <li>Individuální konzultace podle potřeb vašeho psa</li>
        <li>Zohlednění zdravotního stavu, kondice, zátěže i životního stylu</li>
        <li>Kontrola krmné dávky a složení krmiva</li>
        <li>Výpočet energetické potřeby psa</li>
        <li>Návrh konkrétních úprav krmení</li>
        <li>Pomoc s přechodem na jiné krmivo (granule, BARF, vařená strava)</li>
        <li>Kontrolní kroky po 14 dnech a po měsíci</li>
      </Typography>
    ),
    tag: "individuálně",
    price: "1 000 Kč",
  },
  {
    title: "Úprava hmotnosti a kondice psa",
    description: (
      <Typography component="ul" sx={{ pl: 2, m: 0 }}>
        <li>Plán krmení pro hubnutí</li>
        <li>Plán krmení pro nabírání hmotnosti</li>
        <li>Dlouhodobě udržitelný režim</li>
        <li>Průběžná kontrola kondice psa</li>
        <li>Neomezené konzultace po donu 1,5 měsíce.</li>
        <li>Zhodnocení průběhu změny a kondice po změně.</li>
        <li>V případě potřeby konzultace po dobu 3 měsíců.</li>
      </Typography>
    ),
    tag: "dlouhodobě",
    price: "2 000 Kč",
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
                    borderRadius: 6,
                    bgcolor: "rgba(255,255,255,0.98)",
                    color: "text.primary",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 28px 60px rgba(0,0,0,0.22)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      px: { xs: 2.5, md: 3 },
                      py: { xs: 2.5, md: 3 },
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      sx={{ mb: 2 }}
                    >
                      <Box
                        sx={{
                          width: 38,
                          height: 38,
                          borderRadius: "50%",
                          background:
                            "linear-gradient(135deg, #ffb74d, #f57c00)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#1a1a1a",
                          boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
                        }}
                      >
                        <PetsIcon fontSize="small" />
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 800,
                          fontSize: { xs: 16, md: 18 },
                          lineHeight: 1.3,
                          letterSpacing: 0.3,
                        }}
                      >
                        {service.title}
                      </Typography>
                    </Stack>
                    <Box
                      sx={{
                        fontSize: { xs: 14, md: 15 },
                        lineHeight: 1.7,
                      }}
                    >
                      {service.description}
                    </Box>
                  </CardContent>

                  <CardActions
                    sx={{
                      px: { xs: 2.5, md: 3 },
                      pb: { xs: 2.5, md: 3 },
                      pt: 1,
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderTop: "1px solid rgba(0,0,0,0.08)",
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={1.5}
                      alignItems="center"
                      sx={{ width: "100%", justifyContent: "space-between" }}
                    >
                      <Chip
                        label={service.tag}
                        size="small"
                        color="primary"
                        sx={{ fontWeight: 600 }}
                      />
                      <Box
                        sx={{
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 3,
                          bgcolor: "primary.main",
                          color: "primary.contrastText",
                          fontWeight: 800,
                          fontSize: 14,
                          boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
                        }}
                      >
                        {service.price}
                      </Box>
                    </Stack>
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
