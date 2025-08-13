import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  Typography,
  TextField,
  Card,
  CardContent,
  Stack,
  Link as MUILink,
  Divider,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Fab,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid v2 (sem 'item')
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

// Landing page em React + Vite usando apenas MUI (sem Tailwind)
// Estrutura: AppBar, Hero, Benefícios, Amostra, Sobre a Autora, Depoimentos, FAQ, Rodapé e FAB (CTA) fixo

export default function AmeSeuProdutoLandingMUI() {
  const [email, setEmail] = useState("");

  const kiwifyLink = "https://pay.kiwify.com.br/zV8k42D";
  const instagram = "https://www.instagram.com/dilavieira_";
  const emailContato = "mailto:dilavieira.modaintima@gmail.com";

  const handleLead = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrar com seu provedor de e-mail/CRM (ex.: Resend, Brevo, Mailchimp)
    alert(`Obrigado! Te enviaremos um presente no e-mail: ${email}`);
    setEmail("");
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#fff" }}>
      {/* NAVBAR */}
      <AppBar position="sticky" elevation={0} sx={{ bgcolor: "rgba(255,255,255,0.9)", backdropFilter: "blur(6px)", color: "text.primary", borderBottom: 1, borderColor: "divider" }}>
        <Toolbar sx={{ gap: 2 }}>
          <MUILink href="#home" underline="none" color="inherit" sx={{ display: "flex", alignItems: "center", gap: 1, fontWeight: 800, fontSize: 18 }}>
            <Box sx={{ width: 28, height: 28, borderRadius: 2, bgcolor: "#e11d48" }} />
            Ame Seu Produto
          </MUILink>
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" spacing={3} sx={{ display: { xs: "none", md: "flex" } }}>
            <MUILink href="#sobre" color="inherit" underline="hover">Sobre o e-book</MUILink>
            <MUILink href="#autora" color="inherit" underline="hover">Sobre a autora</MUILink>
            <MUILink href="#depoimentos" color="inherit" underline="hover">Depoimentos</MUILink>
            <MUILink href="#faq" color="inherit" underline="hover">FAQ</MUILink>
          </Stack>
          <Button href={kiwifyLink} variant="contained" startIcon={<ShoppingCartIcon />} sx={{ borderRadius: 3, bgcolor: "#e11d48", ":hover": { bgcolor: "#be123c" } }}>
            Comprar agora
          </Button>
        </Toolbar>
      </AppBar>

      {/* HERO */}
      <Container id="home" sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 12 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              <Typography variant="h2" fontWeight={800} lineHeight={1.1} sx={{ fontSize: { xs: 36, md: 48 } }}>
                Descubra o propósito do seu negócio e {" "}
                <Box component="span" sx={{ color: "#e11d48" }}>empreenda com verdade</Box>
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: 16, md: 18 } }}>
                Linguagem simples, direta e cheia de afeto para você alinhar o coração ao seu negócio e vender com mais confiança.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button href={kiwifyLink} variant="contained" size="large" sx={{ borderRadius: 3, bgcolor: "#e11d48", ":hover": { bgcolor: "#be123c" } }}>
                  Quero meu e-book
                </Button>
                <Button href="#amostra" variant="outlined" size="large" sx={{ borderRadius: 3, borderColor: "#fecdd3", color: "#831843", ":hover": { borderColor: "#fda4af", bgcolor: "#fff1f2" } }}>
                  Ver amostra gratuita
                </Button>
              </Stack>

              {/* Captura de lead */}
              <Box component="form" onSubmit={handleLead} sx={{ mt: 1, maxWidth: 600 }}>
                <Grid container spacing={1}>
                  <Grid xs={12} sm>
                    <TextField
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      fullWidth
                      label="Seu melhor e-mail para receber o presente"
                    />
                  </Grid>
                  <Grid xs={12} sm="auto">
                    <Button type="submit" variant="outlined" sx={{ height: "100%", borderRadius: 2 }}>
                      Quero o presente
                    </Button>
                  </Grid>
                </Grid>
                <Typography variant="caption" color="text.secondary">Receba um checklist bônus para aplicar hoje mesmo.</Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Box sx={{ position: "relative", display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
              <Paper elevation={8} sx={{ width: { xs: 260, md: 320 }, aspectRatio: "3/4", borderRadius: 4, p: 3, border: 1, borderColor: "#ffe4e6", bgcolor: "#fff" }}>
                <Box sx={{ height: "100%", borderRadius: 3, p: 3, bgcolor: "linear-gradient(135deg,#fecdd3,#fff,#fff)" }}>
                  <Stack alignItems="center" justifyContent="center" sx={{ height: "100%", textAlign: "center" }}>
                    <Typography variant="h4" fontWeight={900}>AME SEU PRODUTO</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>por Dila Vieira</Typography>
                  </Stack>
                </Box>
              </Paper>
              <Paper sx={{ position: "absolute", right: -16, bottom: -16, px: 2, py: 1, borderRadius: 3 }} elevation={3}>
                <Typography variant="body2" fontWeight={700}>Formato: PDF • Acesso imediato</Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* BENEFÍCIOS */}
      <Box id="sobre" sx={{ bgcolor: "#fff", py: 10, borderTop: 1, borderColor: "divider" }}>
        <Container>
          <Typography variant="h3" textAlign="center" fontWeight={800} sx={{ mb: 6, fontSize: { xs: 28, md: 36 } }}>
            O que você vai aprender
          </Typography>
          <Grid container spacing={3}>
            {[
              { title: "Clareza de propósito", desc: "Entenda o porquê do seu negócio e alinhe sua comunicação para atrair clientes certos." },
              { title: "Confiança para vender", desc: "Aprenda a apresentar seu produto com verdade, simplicidade e afeto." },
              { title: "Rotina prática de ação", desc: "Passos práticos para transformar propósito em vendas consistentes." },
              { title: "Posicionamento leve", desc: "Mostre quem você é e o que acredita sem medo de se expor." },
              { title: "Conteúdo que conecta", desc: "Ideias de posts e stories que geram conversa e confiança." },
              { title: "Comunidade e relacionamento", desc: "Como cultivar clientes fiéis que indicam seu trabalho." },
            ].map((b) => (
              <Grid xs={12} md={4} key={b.title}>
                <Paper variant="outlined" sx={{ p: 3, borderRadius: 3, bgcolor: "#fff0f3" }}>
                  <Typography variant="subtitle1" fontWeight={700}>{b.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{b.desc}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Stack alignItems="center" sx={{ mt: 6 }}>
            <Button href={kiwifyLink} variant="contained" size="large" sx={{ borderRadius: 3, bgcolor: "#e11d48", ":hover": { bgcolor: "#be123c" } }}>
              Garantir meu acesso imediato
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* AMOSTRA */}
      <Container id="amostra" sx={{ py: 10 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid xs={12} md={6}>
            <Stack spacing={2}>
              <Typography variant="h3" fontWeight={800} sx={{ fontSize: { xs: 28, md: 36 } }}>Amostra gratuita</Typography>
              <Typography color="text.secondary">Baixe um trecho do e-book e veja a linguagem simples e afetuosa na prática.</Typography>
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" sx={{ borderRadius: 3 }}>Baixar PDF</Button>
                <Button href={kiwifyLink} variant="contained" sx={{ borderRadius: 3, bgcolor: "#e11d48", ":hover": { bgcolor: "#be123c" } }}>Comprar agora</Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} md={6}>
            <Paper variant="outlined" sx={{ p: 3, borderRadius: 3 }}>
              <Stack component="ul" spacing={1} sx={{ pl: 2, m: 0 }}>
                <Typography component="li" variant="body2" color="text.secondary">Linguagem simples, direta e cheia de afeto.</Typography>
                <Typography component="li" variant="body2" color="text.secondary">Exercícios objetivos para clarear seu posicionamento.</Typography>
                <Typography component="li" variant="body2" color="text.secondary">Leitura rápida com aplicação prática imediata.</Typography>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* SOBRE A AUTORA */}
      <Box id="autora" sx={{ bgcolor: "#fff", py: 10, borderTop: 1, borderColor: "divider" }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid xs={12} md={5}>
              <Paper variant="outlined" sx={{ borderRadius: 4, p: 0, aspectRatio: "1 / 1", bgcolor: "#ffe4e6" }} />
            </Grid>
            <Grid xs={12} md={7}>
              <Typography variant="h3" fontWeight={800} sx={{ fontSize: { xs: 28, md: 36 } }}>Prazer, Dila Vieira</Typography>
              <Typography color="text.secondary" sx={{ mt: 2 }}>
                Empreendedora por propósito e maternidade. Conhecida como <strong>Dila Lingerie</strong>, compartilho minha jornada real de construção de um negócio com coração e resultados.
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                <Button href={instagram} variant="outlined" startIcon={<InstagramIcon />} sx={{ borderRadius: 3 }}>Instagram</Button>
                <Button href={emailContato} variant="outlined" startIcon={<EmailIcon />} sx={{ borderRadius: 3 }}>Contato</Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* DEPOIMENTOS */}
      <Container id="depoimentos" sx={{ py: 10 }}>
        <Typography variant="h3" textAlign="center" fontWeight={800} sx={{ mb: 6, fontSize: { xs: 28, md: 36 } }}>Quem já leu, recomenda</Typography>
        <Grid container spacing={3}>
          {[
            { name: "Aline S.", text: "Me ajudou a enxergar o porquê do meu negócio e parei de ter vergonha de vender." },
            { name: "Karina M.", text: "Leitura leve e prática. Em dois dias já estava aplicando as ideias nos stories." },
            { name: "Bianca R.", text: "É como conversar com uma amiga que empreende de verdade. Recomendo!" },
          ].map((d) => (
            <Grid xs={12} md={4} key={d.name}>
              <Card variant="outlined" sx={{ borderRadius: 3, height: "100%" }}>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">“{d.text}”</Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="subtitle2" fontWeight={700}>{d.name}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* FAQ */}
      <Box id="faq" sx={{ bgcolor: "#fff", py: 10, borderTop: 1, borderColor: "divider" }}>
        <Container>
          <Typography variant="h3" textAlign="center" fontWeight={800} sx={{ mb: 4, fontSize: { xs: 28, md: 36 } }}>Perguntas frequentes</Typography>
          <Grid container spacing={2}>
            {[
              { q: "Como recebo o e-book?", a: "Logo após a compra você recebe o acesso por e-mail e pode baixar o PDF imediatamente." },
              { q: "Tem garantia?", a: "Sim. Se não gostar, em até 7 dias devolvemos seu dinheiro." },
              { q: "Qual o público ideal?", a: "Pessoas que querem empreender com verdade, clareza e propósito, começando do zero ou recomeçando." },
              { q: "Vem com bônus?", a: "Você recebe um checklist prático por e-mail para aplicar hoje mesmo." },
            ].map((f) => (
              <Grid xs={12} md={6} key={f.q}>
                <Accordion disableGutters sx={{ borderRadius: 2, boxShadow: "none", border: 1, borderColor: "divider" }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}> 
                    <Typography fontWeight={700}>{f.q}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" color="text.secondary">{f.a}</Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
          <Stack alignItems="center" sx={{ mt: 6 }}>
            <Button href={kiwifyLink} variant="contained" size="large" sx={{ borderRadius: 3, bgcolor: "#e11d48", ":hover": { bgcolor: "#be123c" } }}>
              Comprar agora
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* RODAPÉ */}
      <Box component="footer" sx={{ borderTop: 1, borderColor: "divider", bgcolor: "#fff" }}>
        <Container sx={{ py: 3 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid xs={12} md={6}>
              <Typography variant="body2" color="text.secondary">© {new Date().getFullYear()} Ame Seu Produto — Todos os direitos reservados.</Typography>
            </Grid>
            <Grid xs={12} md={6}>
              <Stack direction="row" spacing={3} justifyContent={{ xs: "flex-start", md: "flex-end" }}>
                <MUILink href={instagram} underline="hover" sx={{ display: "inline-flex", alignItems: "center", gap: 1 }}>
                  <InstagramIcon fontSize="small" /> Instagram
                </MUILink>
                <MUILink href={emailContato} underline="hover" sx={{ display: "inline-flex", alignItems: "center", gap: 1 }}>
                  <EmailIcon fontSize="small" /> E-mail
                </MUILink>
                <MUILink href="#" underline="hover">Política de Privacidade</MUILink>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA FIXO */}
      <Fab color="primary" href={kiwifyLink} variant="extended" sx={{ position: "fixed", right: { xs: 16, md: 24 }, bottom: { xs: 16, md: 24 }, bgcolor: "#e11d48", ":hover": { bgcolor: "#be123c" } }}>
        <ShoppingCartIcon sx={{ mr: 1 }} /> Comprar agora
      </Fab>
    </Box>
  );
}
