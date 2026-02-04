// src/components/HeroSection.jsx
import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

const HeroSection = () => {
  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      id="hero"
      sx={{
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        bgcolor: "background.default",
        py: { xs: 8, md: 12 },
        pt: { xs: 10, md: 0 },
      }}
    >
      <Container width="100%">
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
          justifyContent={{
            xs: "space-around",
            md: "center",
          }}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* LOGO — na mobilu první, na desktopu druhé */}
          <Grid item>
            <Box
              sx={{
                position: "relative",
                width: { xs: 200, sm: 260, md: 380 },
                mx: "auto",
              }}
            >
              {/* rozmazaná organická vrstva */}
              <Box
                sx={{
                  position: "absolute",
                  inset: "12%",
                  borderRadius: "45% 55% 60% 40%",
                  bgcolor: "primary.light",
                  opacity: 0.45,
                  filter: "blur(12px)",
                }}
              />

              {/* hlavní tvar */}
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "50% 50% 45% 55%",
                  bgcolor: "primary.dark",
                  height: { xs: 300, sm: 360, md: 480 },
                  width: { xs: 200, sm: 260, md: 320 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  boxShadow: 8,
                  mx: "auto",
                }}
              >
                {/* vnitřní tvar */}
                <Box
                  sx={{
                    width: "80%",
                    height: "90%",
                    borderRadius: "60% 40% 50% 50%",
                    bgcolor: "background.default",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      inset: "15%",
                      borderRadius: "50% 45% 55% 50%",
                      border: "4px solid",
                      borderColor: "secondary.main",
                    },
                  }}
                />

                {/* logo */}
                <Box
                  component="img"
                  src="logo_2.png"
                  alt="Logo"
                  sx={{
                    position: "absolute",
                    width: "70%",
                    height: "70%",
                    objectFit: "contain",
                  }}
                />
              </Box>

              {/* text pod logem */}
              <Box sx={{ mt: 3, textAlign: "center" }}>
                <Typography variant="h6" sx={{ fontWeight: 800 }}>
                  Milena Štěpánková
                </Typography>
                <Typography variant="body2">
                  Certifikovaná poradkyně pro výživu psů
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* TEXT — na mobilu druhý, na desktopu první */}
          <Grid
            item
            xs={12}
            md={6}
            order={{ xs: 1, md: 0 }}
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Stack spacing={3}>
              <Typography
                variant="overline"
                sx={{ fontSize: 14, fontWeight: 800, letterSpacing: "0.2em" }}
              >
                VÝŽIVOVÉ PORADENSTVÍ PRO PSY
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: 28, sm: 32, md: 54 },
                  lineHeight: 1.1,
                }}
              >
                Výživové poradenství pro psy
              </Typography>
              <Typography
                component="span"
                variant="h4"
                sx={{
                  color: "secondary.main",
                  fontWeight: 800,
                  fontSize: { xs: 22, md: 32 },
                  display: "block",
                  mb: -1,
                }}
              >
                Zdravý pes, spokojený život.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  maxWidth: 480,
                  mx: { xs: "auto", md: 0 },
                  fontSize: { xs: 15, md: 16 },
                }}
              >
                Nejste si jistí, jestli krmíte svého psa správně? Nabízím
                individuální výživové poradenství pro psy – pomohu vám s výběrem
                krmiva, úpravou krmné dávky i řešením nadváhy nebo podváhy, vždy
                s ohledem na potřeby vašeho psa i vaše finanční možnosti.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{
                  justifyContent: { xs: "center", md: "flex-start" },
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<PetsIcon />}
                  onClick={handleScrollToContact}
                  fullWidth={
                    typeof window !== "undefined" && window.innerWidth < 600
                  }
                >
                  Nezávazně se poradit
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href="#services"
                  fullWidth={
                    typeof window !== "undefined" && window.innerWidth < 600
                  }
                >
                  Podívat se na služby
                </Button>
              </Stack>

              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
                sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
              >
                <Typography variant="body2">Sledujte mě</Typography>
                <IconButton size="small">
                  <FacebookIcon />
                </IconButton>
                <IconButton size="small">
                  <InstagramIcon />
                </IconButton>
                <IconButton size="small">
                  <EmailIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
