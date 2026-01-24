// src/components/ContactSection.jsx
import { useState } from "react";
import emailjs from "@emailjs/browser";
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
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const form = e.target;

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form,
        "YOUR_PUBLIC_KEY"
      );
      setSent(true);
      form.reset();
    } catch (err) {
      alert("Zprávu se nepodařilo odeslat. Zkuste to prosím znovu.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: "background.default",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          spacing={3}
          sx={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
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
                fontSize: { xs: 28, md: 42 },
                textAlign: "center",
              }}
            >
              Napište mi
            </Typography>
          </BrushStroke>

          <Typography
            variant="body1"
            sx={{
              maxWidth: 500,
              mx: "auto",
              textAlign: "center",
              lineHeight: 1.7,
            }}
          >
            Stačí vyplnit pár informací a já se vám ozvu s návrhem dalšího
            postupu.{" "}
          </Typography>

          <Stack
            spacing={1}
            sx={{
              mt: 2,
              alignItems: "center",
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ py: 0.5 }}
            >
              <PhoneIcon />
              <Typography variant="body2">+420 111 222 333</Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ py: 0.5 }}
            >
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
            p: { xs: 2.5, md: 4 },
            borderRadius: 4,
            bgcolor: "background.paper",
            boxShadow: 6,
            maxWidth: 600,
            mx: "auto",
          }}
        >
          <Stack spacing={2}>
            <TextField
              fullWidth
              label="Jméno"
              required
              autoComplete="name"
              name="name"
            />
            <TextField
              fullWidth
              label="E-mail"
              type="email"
              required
              autoComplete="email"
              name="email"
            />
            <TextField
              fullWidth
              label="Telefon"
              type="tel"
              autoComplete="tel"
              name="phone"
            />
            <TextField fullWidth label="Věk / plemeno psa" name="dog_info" />
            <TextField
              fullWidth
              label="Co právě řešíte?"
              multiline
              minRows={4}
              inputMode="text"
              name="message"
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{
                py: 1.5,
                fontSize: { xs: 16, md: 16 },
              }}
              disabled={sending || sent}
            >
              {sending
                ? "Odesílám…"
                : sent
                ? "Zpráva odeslána ✓"
                : "Odeslat zprávu"}
            </Button>
          </Stack>
        </Box>
        {sent && (
          <Stack spacing={1.2} sx={{ mt: 2, textAlign: "center" }}>
            <Typography
              variant="body1"
              sx={{ color: "success.main", fontWeight: 600 }}
            >
              Děkuji za zprávu 🐾
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
              Ozvu se vám co nejdříve a společně najdeme nejlepší řešení pro
              vašeho psa.
              <br />
              Odpovídám obvykle do 1 pracovního dne.
            </Typography>
          </Stack>
        )}
      </Container>
    </Box>
  );
};

export default ContactSection;
