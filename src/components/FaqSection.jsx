import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqItems = [
  {
    q: "Jak probíhá výživová konzultace pro psa?",
    a: "Výživová konzultace probíhá osobně nebo online. Společně projdeme aktuální krmení psa, jeho zdravotní stav, věk, hmotnost a případné potíže. Na základě těchto informací nastavím vhodnou krmnou dávku a doporučím optimální způsob krmení.",
  },
  {
    q: "Je výživové poradenství vhodné i pro zdravého psa?",
    a: "Ano. Správně nastavené krmení pomáhá udržet psa v dobré kondici a předcházet zdravotním potížím. Konzultace je vhodná i pro štěňata, sportovní psy nebo psí seniory.",
  },
  {
    q: "Pomůžete mi i při nadváze nebo podváze psa?",
    a: "Ano. Nastavím bezpečný a dlouhodobě udržitelný plán krmení, který pomůže psovi zhubnout nebo naopak zdravě přibrat bez zbytečné zátěže.",
  },
  {
    q: "Pomáháte i s přechodem na nové krmivo nebo BARF?",
    a: "Ano. Pomohu s přechodem na nové krmivo, granule, vařenou stravu i BARF tak, aby změna byla postupná a pes ji dobře zvládl.",
  },
  {
    q: "Probíhá výživové poradenství online?",
    a: "Ano. Konzultace výživy psů probíhá online po celé České republice. V případě domluvy je možné i osobní setkání.",
  },
  {
    q: "Musím po konzultaci kupovat konkrétní značku krmiva?",
    a: "Ne. Nejsem vázána na žádnou konkrétní značku. Doporučení vždy přizpůsobuji potřebám psa i vašim finančním možnostem.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const FaqSection = () => {
  return (
    <Box
      id="faq"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: "background.paper",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Container maxWidth="md">
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: 2.2,
            fontSize: { xs: 26, md: 36 },
            fontWeight: 800,
          }}
        >
          Často kladené dotazy
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            mb: 4,
            opacity: 0.8,
          }}
        >
          Odpovědi na nejčastější otázky týkající se výživy a krmení psů
        </Typography>

        {faqItems.map((item, index) => (
          <Accordion
            key={index}
            disableGutters
            square
            sx={{
              mb: 1.5,
              borderRadius: 3,
              boxShadow: 2,
              "&:before": { display: "none" },
              "&.Mui-expanded": {
                boxShadow: 4,
              },
              overflow: "hidden",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                px: 2.5,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                py: { xs: 1.5, md: 1.5 },
                minHeight: "unset",
                "&.Mui-expanded": {
                  minHeight: "unset",
                },
                "& .MuiAccordionSummary-content": {
                  my: 0,
                },
                "& .MuiAccordionSummary-content.Mui-expanded": {
                  margin: 0,
                },
              }}
            >
              <Typography sx={{ fontWeight: 600 }}>{item.q}</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                px: 2.5,
                pb: 2.5,
                pt: 0,
              }}
            >
              <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                {item.a}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        <Box sx={{ mt: 4, textAlign: "center", opacity: 0.8 }}>
          <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
            Pokud jste tu nenašli odpověď na svou otázku, napište mi – ráda vám
            poradím.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FaqSection;
