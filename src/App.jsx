// src/App.jsx
import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  IconButton,
  Button,
  Stack,
  Drawer,
  List,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PetsIcon from "@mui/icons-material/Pets";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";

const navItems = [
  { label: "Úvod", href: "#hero" },
  { label: "O mně", href: "#about" },
  { label: "Služby", href: "#services" },
];

const App = () => {
  const [open, setOpen] = React.useState(false);

  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* NAVBAR */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: "rgba(255,248,240,0.96)",
          color: "text.primary",
          borderBottom: "1px solid rgba(15,23,42,0.06)",
          backdropFilter: "blur(12px)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1 }}>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ flexGrow: 1 }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 3,
                  bgcolor: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "common.white",
                }}
              >
                {/* sem si můžeš dát vlastní logo z .af souboru */}
                <PetsIcon />
              </Box>
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 800, lineHeight: 1 }}
                >
                  Milena Štěpánková
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ textTransform: "uppercase", letterSpacing: "0.09em" }}
                >
                  Výživa psů
                </Typography>
              </Box>
            </Stack>

            <Stack
              direction="row"
              spacing={3}
              sx={{ display: { xs: "none", md: "flex" } }}
              alignItems="center"
            >
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  color="inherit"
                  onClick={() => handleNavClick(item.href)}
                  sx={{ fontWeight: 600 }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleNavClick("#contact")}
                sx={{ ml: 1 }}
              >
                Domluvit konzultaci
              </Button>
            </Stack>

            <IconButton
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* mobile menu */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { width: "75%", bgcolor: "background.default" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: 1,
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
            Menu
          </Typography>
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItemButton
              key={item.href}
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ p: 2 }}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={() => handleNavClick("#contact")}
          >
            Domluvit konzultaci
          </Button>
        </Box>
      </Drawer>

      {/* hlavní obsah */}
      <Box sx={{ pt: { xs: 8, md: 9 } }}>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </Box>

      {/* footer */}
      <Box
        sx={{
          py: 4,
          bgcolor: "primary.dark",
          color: "rgba(255,255,255,0.85)",
          mt: 4,
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
          >
            <Typography variant="body2">
              © {new Date().getFullYear()} Milena Štěpánková – výživové
              poradenství pro psy.
            </Typography>
            <Typography variant="body2">
              Web vytvořen s láskou ke psům i lidem 🐾
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default App;
