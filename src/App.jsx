// src/App.jsx
import React from "react";
import { Link } from "@mui/material";

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

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import PhotoSlider from "./components/PhotoSlider";
import BcsGuide from "./components/BcsGuide";
import FaqSection from "./components/FaqSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const navItems = [
  { label: "Úvod", href: "#hero" },
  { label: "O mně", href: "#about" },
  { label: "Služby", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "BCS návody", href: "#bcs-guide" },
  { label: "Fotky", href: "#photos-galery" },
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
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        overflowX: "hidden",
      }}
    >
      {/* NAVBAR */}
      <Navbar navItems={navItems} handleNavClick={handleNavClick} />

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
        <FaqSection />
        <BcsGuide />
        <PhotoSlider />
        <ContactSection />
      </Box>

      {/* footer */}
      <Footer />
    </Box>
  );
};

export default App;
