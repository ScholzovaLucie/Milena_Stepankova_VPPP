import React, { useState } from "react";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "/logo_2.png";

const Navbar = ({ navItems, handleNavClick }) => {
  const [open, setOpen] = useState(false);
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
              component="img"
              src={Logo}
              alt="Logo"
              sx={{ width: 60, height: 60, objectFit: "contain" }}
            />
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
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 280,
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 1.5,
          }}
          role="presentation"
        >
          {navItems.map((item) => (
            <Button
              key={item.href}
              color="inherit"
              onClick={() => {
                handleNavClick(item.href);
                setOpen(false);
              }}
              sx={{
                justifyContent: "flex-start",
                fontWeight: 600,
                py: 1.2,
              }}
            >
              {item.label}
            </Button>
          ))}

          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              handleNavClick("#contact");
              setOpen(false);
            }}
            sx={{
              mt: 1,
              py: 1.2,
            }}
          >
            Domluvit konzultaci
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
