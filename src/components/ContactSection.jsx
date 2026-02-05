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
  Checkbox,
  FormControlLabel,
  Link,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { services } from "./ServicesSection";

const ContactSection = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [consent, setConsent] = useState(false);
  const [serviceInterest, setServiceInterest] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const resetAfterSend = () => {
    setConsent(false);
    setServiceInterest("");
    setSent(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setErrorMsg("");

    const form = e.target;

    try {
      await emailjs.sendForm(
        "service_chp3e09",
        "template_9lbquzg",
        form,
        "rs4VbdOfi0NbYm8Vu"
      );
      setSent(true);
      form.reset();
      setConsent(false);
      setServiceInterest("");
    } catch (err) {
      setErrorMsg(
        "Zprávu se nepodařilo odeslat. Prosím zkuste to znovu za chvíli nebo použijte e-mail / telefon."
      );
    } finally {
      setSending(false);
      setTimeout(() => {
        setSent(false);
      }, 4000);
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
              <Typography variant="body2">+420 777 015 493</Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ py: 0.5 }}
            >
              <EmailIcon />
              <Typography variant="body2">info@krmaninamiru.cz</Typography>
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
              onChange={() => {
                if (sent) setSent(false);
              }}
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
            <FormControl fullWidth>
              <InputLabel id="service-interest-label">
                O jakou službu máte zájem?
              </InputLabel>
              <Select
                labelId="service-interest-label"
                label="O jakou službu máte zájem?"
                name="service_interest"
                value={serviceInterest}
                onChange={(e) => {
                  setServiceInterest(e.target.value);
                  if (sent) setSent(false);
                }}
                required
              >
                {services.map((s) => (
                  <MenuItem key={s.title} value={s.title}>
                    {s.title} — {s.price}
                  </MenuItem>
                ))}
                <MenuItem value="Nejsem si jistý / potřebuji poradit">
                  Nejsem si jistý / potřebuji poradit
                </MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Co právě řešíte?"
              multiline
              minRows={4}
              inputMode="text"
              name="message"
            />
            <FormControlLabel
              sx={{
                mt: 1,
                alignItems: "flex-start",
              }}
              control={
                <Checkbox
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                  sx={{ mt: 0.4 }}
                />
              }
              label={
                <Box sx={{ lineHeight: 1.5 }}>
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{ fontWeight: 500 }}
                  >
                    Souhlasím se zpracováním údajů a&nbsp;
                  </Typography>
                  <Link
                    href="/informovany-souhlas.pdf"
                    target="_blank"
                    rel="noopener"
                    underline="always"
                    sx={{ fontSize: 14, fontWeight: 600 }}
                  >
                    &nbsp;informovaným souhlasem (PDF)&nbsp;
                  </Link>
                </Box>
              }
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
              disabled={sending || !consent}
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
        {errorMsg && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {errorMsg}
          </Alert>
        )}
      </Container>
    </Box>
  );
};

export default ContactSection;
