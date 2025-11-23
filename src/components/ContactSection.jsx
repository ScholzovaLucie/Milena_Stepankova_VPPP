// src/components/ContactSection.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import BrushStroke from "./BrushStroke";

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="md">
        <Stack
          spacing={3}
          sx={{
            textAlign: "center",
            mb: 6,
            maxWidth: 600,
            mx: "auto",
          }}
        >
          <BrushStroke color="secondary.light">
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: 32, md: 42 },
              }}
            >
              Napište mi
            </Typography>
          </BrushStroke>

          <Typography variant="body1" sx={{ maxWidth: 500, mx: "auto" }}>
            Stačí vyplnit pár informací a já se vám ozvu s návrhem termínu.
          </Typography>

          <Stack
            spacing={1}
            sx={{
              mt: 2,
              alignItems: "center",
            }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <PhoneIcon />
              <Typography variant="body2">+420 111 222 333</Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <EmailIcon />
              <Typography variant="body2">email@seznam.cz</Typography>
            </Stack>
          </Stack>
        </Stack>

        {/* FORM */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            bgcolor: "background.paper",
            boxShadow: 6,
            maxWidth: 600,
            mx: "auto",
          }}
        >
          <Stack spacing={2}>
            <TextField fullWidth label="Jméno" required />
            <TextField fullWidth label="E-mail" type="email" required />
            <TextField fullWidth label="Telefon" />
            <TextField fullWidth label="Věk / plemeno psa" />
            <TextField
              fullWidth
              label="Co právě řešíte?"
              multiline
              minRows={4}
            />
            <Button type="submit" variant="contained" size="large" fullWidth>
              Odeslat zprávu
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;
