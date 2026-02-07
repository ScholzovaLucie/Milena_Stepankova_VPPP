import React, { useState } from "react";
import { Box, Container, Typography, Stack, Button } from "@mui/material";

const AboutSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box
      id="about"
      sx={{
        bgcolor: "background.paper",
      }}
      pb={10}
    >
      <Container
        maxWidth="90%"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { md: "row", xs: "column" },
          textAlign: "center",
          gap: { xs: 5, md: 2 },
          pt: { md: 5, xs: 5 },
        }}
      >
        <Box
          sx={{
            width: { md: "33%", xs: "90%" },
            height: "auto",
            objectFit: "contain",
          }}
        >
          <Box
            component="img"
            src="/photos/uvod.jpg"
            alt="Me"
            sx={{ width: "80%", height: "auto", objectFit: "contain" }}
            borderRadius={6}
            border={3}
            borderColor="secondary.main"
            boxShadow={8}
          />
        </Box>
        {/* === HLAVNÍ BLOK: TEXT === */}
        <Stack
          width={{ md: "33%", xs: "95%" }}
          direction="column"
          spacing={{ xs: 4, md: 4 }}
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 26, md: 34 },
              mx: "auto",
            }}
            width="100%"
          >
            Moje cesta k výživovému poradenství
          </Typography>

          <Typography
            variant="body1"
            sx={{
              opacity: 0.85,
              mx: "auto",
              fontSize: { xs: 15, md: 17 },
              whiteSpace: "pre-line",
              textAlign: { xs: "center", md: "center" },
            }}
          >
            {`Jmenuji se Milena Štěpánková. Zvířatům se věnuji od útlého dětství. 
              Psi byli v naší rodině odjakživa – starala jsem se o ně, krmila je a chodila na cvičák.`}

            {expanded &&
              `
              V roce 1987, když mi bylo 9 let, jsem začala aktivně jezdit na koni.
              Později jsem se vyučila v Národním hřebčíně Kladruby nad Labem v oboru „chovatel koní a jezdec z povolání“, kde jsem se poprvé osobně setkala s pointery, které choval náš třídní profesor pan Ing. Karel Regner.
              O řadu let později, když jsem se rozhodla pořídit si svou první fenku pointera, stal se pan Regner znovu mým učitelem a rádcem. Právě tato fenka, Cedra z Vinných Tratí (*2012), mě přivedla k hlubšímu zájmu o výživu psů, protože byla velmi špatně krmitelná.
              Postupem času se počet našich psů rozrostl a v roce 2019 jsem založila chovatelskou stanici. V současné době žijeme s osmi psy (7× pointer, 1× portugalský ohař) a máme odchované čtyři vrhy štěňat pointerů.
              Protože vím, jak obrovská a nepřehledná je dnešní nabídka krmiv, rozhodla jsem se absolvovat kurz výživového poradenství pro psy u specialistky paní Adély Palacké. Kurz jsem úspěšně dokončila a dnes jsem připravena pomoci i vám najít správnou výživu pro vašeho psa.
              `}
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Button
              variant="outlined"
              size="medium"
              onClick={() => setExpanded(!expanded)}
              sx={{
                borderRadius: 999,
                px: 3,
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              {expanded ? "Zobrazit méně" : "Číst celý příběh"}
            </Button>
          </Box>
        </Stack>

        {/* === TIMELINE === */}
        <Box
          sx={{
            width: { md: "33%", xs: "90%" },
            mx: "auto",
            mt: 2,
          }}
        >
          <Stack
            direction="column"
            spacing={{ xs: 2, md: 2 }}
            alignItems="center"
            justifyContent="center"
            sx={{ position: "relative" }}
          >
            {/* Mobile vertical line */}
            <Box
              sx={{
                width: "2px",
                bgcolor: "secondary.main",
                opacity: 0.4,
                zIndex: 0,
              }}
            />

            {/* ITEM 1 */}
            <Stack
              sx={{
                textAlign: "center",
                maxWidth: { xs: "100%", md: 250 },
                px: { xs: 2, md: 0 },
                position: "relative",
                zIndex: 1,
                bgcolor: "background.paper",
                px: 1,
                borderRadius: 1,
              }}
            >
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  bgcolor: "secondary.main",
                  mx: "auto",
                  mb: 1,
                }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, fontSize: { xs: 16, md: 18 } }}
              >
                1987
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, fontSize: { xs: 16, md: 18 } }}
              >
                První hlubší kontakt se zvířaty
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Aktivní práce se zvířaty od dětství, péče o psy a začátky
                jezdecké dráhy, které položily základ k dalšímu profesnímu
                směřování.
              </Typography>
            </Stack>

            {/* Connector */}
            <Box
              sx={{
                display: "block",
                width: "2px",
                height: 30,
                bgcolor: "secondary.main",
                opacity: 0.4,
              }}
            />

            {/* ITEM 2 */}
            <Stack
              sx={{
                textAlign: "center",
                maxWidth: { xs: "100%", md: 250 },
                px: { xs: 2, md: 0 },
                position: "relative",
                zIndex: 1,
                bgcolor: "background.paper",
                px: 1,
                borderRadius: 1,
              }}
            >
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  mx: "auto",
                  mb: 1,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: 16, md: 18 },
                  bgcolor: "background.paper",
                  px: 1,
                  borderRadius: 1,
                }}
              >
                2012–2019
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: 16, md: 18 },
                  bgcolor: "background.paper",
                  px: 1,
                  borderRadius: 1,
                }}
              >
                Chov a hledání odpovědí
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  bgcolor: "background.paper",
                  px: 1,
                  borderRadius: 1,
                }}
              >
                Pořízení první fenky pointera a vlastní chovatelská praxe. Právě
                problémy s krmením otevřely cestu k hlubšímu studiu výživy psů.
              </Typography>
            </Stack>

            {/* Connector */}
            <Box
              sx={{
                display: "block",
                width: "2px",
                height: 30,
                bgcolor: "secondary.main",
                opacity: 0.4,
              }}
            />

            {/* ITEM 3 */}
            <Stack
              sx={{
                textAlign: "center",
                maxWidth: { xs: "100%", md: 250 },
                px: { xs: 2, md: 0 },
                position: "relative",
                zIndex: 1,
                bgcolor: "background.paper",
                px: 1,
                borderRadius: 1,
              }}
            >
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  bgcolor: "secondary.main",
                  mx: "auto",
                  mb: 1,
                }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, fontSize: { xs: 16, md: 18 } }}
              >
                2025
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, fontSize: { xs: 16, md: 18 } }}
              >
                Výživové poradenství
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Absolvování kurzu výživového poradenství pro psy a zahájení
                konzultací s cílem pomáhat majitelům najít správnou výživu pro
                jejich psy.
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
