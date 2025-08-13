import React, { useState } from "react"; import { AppBar, Toolbar, Button, Container, Box, Typography, TextField, Card, CardContent, Stack, Link as MUILink, Divider, Paper, Accordion, AccordionSummary, AccordionDetails, Fab, Chip, Avatar, useMediaQuery, } from "@mui/material"; import Grid from "@mui/material/Grid"; // MUI v5 Grid (com item/container) import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; import InstagramIcon from "@mui/icons-material/Instagram"; import EmailIcon from "@mui/icons-material/Email"; import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Landing refinada (foco mobile-first) – MUI v5 // Melhorias: tipografia responsiva, espaçamentos maiores no mobile, CTA persistente, hero mais "clean", // cartões com contraste suave, chips de prova social, botões 100% largura no mobile, checklist visual.

export default function AmeSeuProdutoLandingMUI() { const [email, setEmail] = useState(""); const isMobile = useMediaQuery("(max-width:900px)");

const kiwifyLink = "https://pay.kiwify.com.br/zV8k42D"; const instagram = "https://www.instagram.com/dilavieira_"; const emailContato = "mailto:dilavieira.modaintima@gmail.com";

const handleLead = (e: React.FormEvent) => { e.preventDefault(); alert(Obrigado! Te enviaremos um presente no e-mail: ${email}); setEmail(""); };

return ( <Box sx={{ minHeight: "100vh", bgcolor: "#fff" }}> {/* BG decorativo sutil */} <Box aria-hidden sx={{ position: "fixed", inset: 0, background: { xs: "radial-gradient(60% 40% at 20% 10%, #ffe4e6 0%, rgba(255,228,230,0) 60%), radial-gradient(50% 35% at 90% 0%, #fce7f3 0%, rgba(252,231,243,0) 60%)", md: "radial-gradient(40% 35% at 15% 10%, #ffe4e6 0%, rgba(255,228,230,0) 60%), radial-gradient(35% 35% at 85% 5%, #fce7f3 0%, rgba(252,231,243,0) 60%)", }, pointerEvents: "none", zIndex: 0, }} />

{/* NAVBAR */}
  <AppBar position="sticky" elevation={0} sx={{ bgcolor: "rgba(255,255,255,0.8)", backdropFilter: "saturate(180%) blur(8px)", color: "text.primary", borderBottom: 1, borderColor: "divider", zIndex: 10 }}>
    <Toolbar sx={{ gap: 1.5, minHeight: { xs: 60, sm: 72 } }}>
      <MUILink href="#home" underline="none" color="inherit" sx={{ display: "flex", alignItems: "center", gap: 1.25, fontWeight: 800, fontSize: { xs: 18, sm: 20 } }}>
        <Box sx={{ width: 28, height: 28, borderRadius: 2, bgcolor: "#e11d48" }} />
        Ame Seu Produto
      </MUILink>
      <Box sx={{ flexGrow: 1 }} />
      <Stack direction="row" spacing={2.5} sx={{ display: { xs: "none", md: "flex" } }}>
        <MUILink href="#sobre" color="inherit" underline="hover">Sobre</MUILink>
        <MUILink href="#autora" color="inherit" underline="hover">Autora</MUILink>
        <MUILink href="#depoimentos" color="inherit" underline="hover">Depoimentos</MUILink>
        <MUILink href="#faq" color="inherit" underline="hover">FAQ</MUILink>
      </Stack>
      <Button href={kiwifyLink} variant="contained" startIcon={<ShoppingCartIcon />} sx={{ borderRadius: 3, bgcolor: "#e11d48", px: { xs: 2.5, md: 3.5 }, py: 1.25, fontWeight: 800, ":hover": { bgcolor: "#be123c" } }}>
        Comprar
      </Button>
    </Toolbar>
  </AppBar>

  {/* HERO */}
  <Container id="home" sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 6, md: 10 }, position: "relative", zIndex: 1 }}>
    <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
      <Grid item xs={12} md={6}>
        <Stack spacing={{ xs: 2.5, md: 3 }}>
          <Chip label="PDF • Acesso imediato" color="default" variant="outlined" sx={{ alignSelf: { xs: "stretch", sm: "flex-start" }, fontWeight: 700, borderRadius: 999 }} />
          <Typography variant="h1" fontWeight={900} lineHeight={1.08} sx={{ fontSize: { xs: 28, sm: 34, md: 48 } }}>
            Descubra o propósito do seu negócio e <Box component="span" sx={{ color: "#e11d48" }}>empreenda com verdade</Box>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: 16, md: 18 } }}>
            Linguagem simples, direta e cheia de afeto para alinhar o coração ao seu negócio e vender com mais confiança.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
            <Button fullWidth={isMobile} href={kiwifyLink} size="large" variant="contained" sx={{ borderRadius: 3, bgcolor: "#e11d48", fontWeight: 800, ":hover": { bgcolor: "#be123c" } }}>Quero meu e-book</Button>
            <Button fullWidth={isMobile} href="#amostra" size="large" variant="outlined" sx={{ borderRadius: 3, borderColor: "#fecdd3", color: "#831843", fontWeight: 800, ":hover": { borderColor: "#fda4af", bgcolor: "#fff1f2" } }}>Ver amostra</Button>
          </Stack>

          {/* Captura de lead */}
          <Box component="form" onSubmit={handleLead} sx={{ mt: 0.5, maxWidth: 620 }}>
            <Grid container spacing={1.25} alignItems="stretch">
              <Grid item xs={12} sm={8}>
                <TextField
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  label="Seu melhor e-mail para receber o presente"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button type="submit" variant="outlined" fullWidth sx={{ height: { xs: 48, sm: "100%" }, borderRadius: 2.5, fontWeight: 800 }}>Quero o presente</Button>
              </Grid>
            </Grid>
            <Typography variant="caption" color="text.secondary">Checklist bônus por e-mail para aplicar hoje mesmo.</Typography>
          </Box>

          {/* Prova social */}
          <Stack direction="row" spacing={2} alignItems="center" sx={{ pt: 1 }}>
            <Avatar sx={{ bgcolor: "#fee2e2" }}>A</Avatar>
            <Avatar sx={{ bgcolor: "#ffe4e6" }}>K</Avatar>
            <Avatar sx={{ bgcolor: "#fce7f3" }}>B</Avatar>
            <Typography variant="body2" color="text.secondary">Leituras 5★ de empreendedoras reais</Typography>
          </Stack>
        </Stack>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box sx={{ position: "relative", display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
          <Paper elevation={8} sx={{ width: { xs: 260, md: 340 }, aspectRatio: "3/4", borderRadius: 4, p: 3, border: 1, borderColor: "#ffe4e6", bgcolor: "#fff" }}>
            <Box sx={{ height: "100%", borderRadius: 3, p: 3, background: "linear-gradient(135deg,#ffe4e6, #fff)" }}>
              <Stack alignItems="center" justifyContent="center" sx={{ height: "100%", textAlign: "center" }}>
                <Typography variant="h4" fontWeight={900}>AME SEU PRODUTO</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>por Dila Vieira</Typography>
              </Stack>
            </Box>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  </Container>

  {/* BENEFÍCIOS */}
  <Box id="sobre" sx={{ py: { xs: 6, md: 10 }, borderTop: 1, borderColor: "divider", position: "relative", zIndex: 1 }}>
    <Container>
      <Typography variant="h2" textAlign="center" fontWeight={900} sx={{ mb: { xs: 3.5, md: 6 }, fontSize: { xs: 24, md: 36 } }}>
        O que você vai aprender
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {[
          { title: "Clareza de propósito", desc: "Entenda o porquê do seu negócio e alinhe sua comunicação para atrair clientes certos." },
          { title: "Confiança para vender", desc: "Aprenda a apresentar seu produto com verdade, simplicidade e afeto." },
          { title: "Rotina prática de ação", desc: "Passos práticos para transformar propósito em vendas consistentes." },
          { title: "Posicionamento leve", desc: "Mostre quem você é e o que acredita sem medo de se expor." },
          { title: "Conteúdo que conecta", desc: "Ideias de posts e stories que geram conversa e confiança." },
          { title: "Comunidade e relacionamento", desc: "Como cultivar clientes fiéis que indicam seu trabalho." },
        ].map((b) => (
          <Grid item xs={12} sm={6} md={4} key={b.title}>
            <Paper variant="outlined" sx={{ p: 3, borderRadius: 3, bgcolor: "#fff", borderColor: "#ffe4e6" }}>
              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <CheckCircleIcon sx={{ color: "#e11d48" }} />
                <Box>
                  <Typography variant="subtitle1" fontWeight={800}>{b.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>{b.desc}</Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Stack alignItems="center" sx={{ mt: { xs: 4, md: 6 } }}>
        <Button href={kiwifyLink} size="large" variant="contained" sx={{ borderRadius: 3, bgcolor: "#e11d48", fontWeight: 800, ":hover": { bgcolor: "#be123c" } }}>
          Garantir meu acesso imediato
        </Button>
      </Stack>
    </Container>
  </Box>

  {/* AMOSTRA */}
  <Container id="amostra" sx={{ py: { xs: 6, md: 10 } }}>
    <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
      <Grid item xs={12} md={6}>
        <Stack spacing={2}>
          <Typography variant="h2" fontWeight={900} sx={{ fontSize: { xs: 24, md: 36 } }}>Amostra gratuita</Typography>
          <Typography color="text.secondary">Baixe um trecho do e-book e veja a linguagem simples e afetuosa na prática.</Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
            <Button fullWidth={isMobile} variant="outlined" sx={{ borderRadius: 3 }}>Baixar PDF</Button>
            <Button fullWidth={isMobile} href={kiwifyLink} variant="contained" sx={{ borderRadius: 3, bgcolor: "#e11d48", fontWeight: 800, ":hover": { bgcolor: "#be123c" } }}>Comprar agora</Button>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper variant="outlined" sx={{ p: { xs: 2.5, md: 3 }, borderRadius: 3, borderColor: "#ffe4e6" }}>
          <Stack spacing={1.25}>
            {[
              "Linguagem simples, direta e cheia de afeto.",
              "Exercícios objetivos para clarear seu posicionamento.",
              "Leitura rápida com aplicação prática imediata.",
            ].map((t) => (
              <Stack key={t} direction="row" spacing={1.5} alignItems="flex-start">
                <CheckCircleIcon sx={{ color: "#e11d48" }} />
                <Typography variant="body2" color="text.secondary">{t}</Typography>
              </Stack>
            ))}
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  </Container>

  {/* SOBRE A AUTORA */}
  <Box id="autora" sx={{ py: { xs: 6, md: 10 }, borderTop: 1, borderColor: "divider" }}>
    <Container>
      <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
        <Grid item xs={12} md={5}>
          <Paper variant="outlined" sx={{ borderRadius: 4, p: 0, aspectRatio: "1 / 1", bgcolor: "#ffe4e6" }} />
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography variant="h2" fontWeight={900} sx={{ fontSize: { xs: 24, md: 36 } }}>Prazer, Dila Vieira</Typography>
          <Typography color="text.secondary" sx={{ mt: 1.5 }}>
            Empreendedora por propósito e maternidade. Conhecida como <strong>Dila Lingerie</strong>, compartilho minha jornada real de construção de um negócio com coração e resultados.
          </Typography>
          <Stack direction="row" spacing={1.5} sx={{ mt: 2.5 }}>
            <Button href={instagram} variant="outlined" startIcon={<InstagramIcon />} sx={{ borderRadius: 3 }}>Instagram</Button>
            <Button href={emailContato} variant="outlined" startIcon={<EmailIcon />} sx={{ borderRadius: 3 }}>Contato</Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  </Box>

  {/* DEPOIMENTOS */}
  <Container id="depoimentos" sx={{ py: { xs: 6, md: 10 } }}>
    <Typography variant="h2" textAlign="center" fontWeight={900} sx={{ mb: { xs: 3.5, md: 6 }, fontSize: { xs: 24, md: 36 } }}>Quem já leu, recomenda</Typography>
    <Grid container spacing={{ xs: 2, md: 3 }}>
      {[
        { name: "Aline S.", text: "Me ajudou a enxergar o porquê do meu negócio e parei de ter vergonha de vender." },
        { name: "Karina M.", text: "Leitura leve e prática. Em dois dias já estava aplicando as ideias nos stories." },
        { name: "Bianca R.", text: "É como conversar com uma amiga que empreende de verdade. Recomendo!" },
      ].map((d) => (
        <Grid item xs={12} md={4} key={d.name}>
          <Card variant="outlined" sx={{ borderRadius: 3, height: "100%", borderColor: "#ffe4e6" }}>
            <CardContent>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Avatar>{d.name[0]}</Avatar>
                <Typography variant="subtitle2" fontWeight={800}>{d.name}</Typography>
              </Stack>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body2" color="text.secondary">“{d.text}”</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>

  {/* FAQ */}
  <Box id="faq" sx={{ py: { xs: 6, md: 10 }, borderTop: 1, borderColor: "divider" }}>
    <Container>
      <Typography variant="h2" textAlign="center" fontWeight={900} sx={{ mb: { xs: 3, md: 4 }, fontSize: { xs: 24, md: 36 } }}>Perguntas frequentes</Typography>
      <Grid container spacing={{ xs: 2, md: 2 }}>
        {[
          { q: "Como recebo o e-book?", a: "Logo após a compra você recebe o acesso por e-mail e pode baixar o PDF imediatamente." },
          { q: "Tem garantia?", a: "Sim. Se não gostar, em até 7 dias devolvemos seu dinheiro." },
          { q: "Qual o público ideal?", a: "Pessoas que querem empreender com verdade, clareza e propósito, começando do zero ou recomeçando." },
          { q: "Vem com bônus?", a: "Você recebe um checklist prático por e-mail para aplicar hoje mesmo." },
        ].map((f) => (
          <Grid item xs={12} md={6} key={f.q}>
            <Accordion disableGutters sx={{ borderRadius: 2, boxShadow: "none", border: 1, borderColor: "#ffe4e6", bgcolor: "#fff" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}> 
                <Typography fontWeight={800}>{f.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">{f.a}</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
      <Stack alignItems="center" sx={{ mt: { xs: 4, md: 6 } }}>
        <Button href={kiwifyLink} size="large" variant="contained" sx={{ borderRadius: 3, bgcolor: "#e11d48", fontWeight: 800, ":hover": { bgcolor: "#be123c" } }}>
          Comprar agora
        </Button>
      </Stack>
    </Container>
  </Box>

  {/* RODAPÉ */}
  <Box component="footer" sx={{ borderTop: 1, borderColor: "divider", bgcolor: "#fff" }}>
    <Container sx={{ py: 3 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="body2" color="text.secondary">© {new Date().getFullYear()} Ame Seu Produto — Todos os direitos reservados.</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack direction="row" spacing={2} justifyContent={{ xs: "flex-start", md: "flex-end" }}>
            <MUILink href={instagram} underline="hover" sx={{ display: "inline-flex", alignItems: "center", gap: 1 }}>
              <InstagramIcon fontSize="small" /> Instagram
            </MUILink>
            <MUILink href={emailContato} underline="hover" sx={{ display: "inline-flex", alignItems: "center", gap: 1 }}>
              <EmailIcon fontSize="small" /> E-mail
            </MUILink>
            <MUILink href="/politica-privacidade.html" underline="hover">Política de Privacidade</MUILink>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  </Box>

  {/* CTA FIXO */}
  <Fab color="primary" href={kiwifyLink} variant="extended" sx={{ position: "fixed", right: { xs: 16, md: 24 }, bottom: { xs: 16, md: 24 }, bgcolor: "#e11d48", fontWeight: 800, ":hover": { bgcolor: "#be123c" }, zIndex: 20 }}>
    <ShoppingCartIcon sx={{ mr: 1 }} /> Comprar agora
  </Fab>
</Box>

); }

