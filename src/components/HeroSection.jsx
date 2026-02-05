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
      maxWidth={"100%"}
      sx={{
        minHeight: { xs: "auto", md: "100vh" },
        maxWidth: "100%",
        width: "100%",
        bgcolor: "background.default",
        py: { xs: 8, md: 12 },
        pt: { xs: 10, md: 0 },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="100%">
        <Grid
          container
          direction={{ xs: "column", sm: "row" }}
          wrap={{ xs: "wrap", sm: "nowrap" }}
          spacing={{ xs: 4, md: 8 }}
          alignItems="center"
          justifyContent="center"
        >
          {/* LOGO — na mobilu první, na desktopu druhé */}
          <Grid item xs={12} sm={6}>
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
            sm={6}
            sx={{
              textAlign: { xs: "center", md: "left" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Stack spacing={3} maxWidth={"100%"}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: 28, sm: 32, md: 54 },
                  lineHeight: 1.1,
                  maxWidth: "100%",
                }}
                maxWidth={"100%"}
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
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
