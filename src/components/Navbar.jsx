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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PetsIcon from "@mui/icons-material/Pets";

const navItems = [
  { label: "Úvod", href: "#hero" },
  { label: "O mně", href: "#about" },
  { label: "Služby", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "BCS návody", href: "#bcs-guide" },
  { label: "Fotky", href: "#photos-galery" },
];

const Navbar = ({ navItems, handleNavClick }) => {
  return (
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
  );
};

export default Navbar;
