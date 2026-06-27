import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import HandshakeIcon from '@mui/icons-material/Handshake';

const CERTIFICATIONS = [
  'Microsoft Partner Network',
  'Cisco Certified Partner',
  'Fortinet Partner',
  'Veeam ProPartner',
  'VMware Partner',
  'Съответствие с ISO 27001',
];

const VALUES = [
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 24, color: '#2563EB' }} />,
    bg: '#EFF6FF',
    title: 'Доказан опит',
    desc: '15+ години ИТ решения за 200+ български компании — от финансовия сектор и логистиката до търговията и професионалните услуги.',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 24, color: '#059669' }} />,
    bg: '#ECFDF5',
    title: 'Старши инженери',
    desc: 'Всеки ангажимент се поема от сертифицирани инженери — не от начинаещи техници. Получавате конкретен технически контакт, добре запознат с вашата среда.',
  },
  {
    icon: <HandshakeIcon sx={{ fontSize: 24, color: '#7C3AED' }} />,
    bg: '#F5F3FF',
    title: 'Партньорство, а не сделки',
    desc: 'Свързваме ИТ решенията с бизнес целите ви. Нашите vCIO консултации помагат на ръководството да взема по-информирани и обосновани технологични решения.',
  },
];

export default function AboutSection() {
  return (
    <Box
      component="section"
      id="about"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}
    >
      <Container maxWidth="lg">

        {/* ── Full-width header ── */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography variant="subtitle2" sx={{ color: 'secondary.main', mb: 1.5 }}>
            За K&amp;D Consult
          </Typography>
          <Grid container spacing={{ xs: 0, md: 6 }} sx={{ alignItems: 'flex-end' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h2"
                sx={{ mb: { xs: 2, md: 0 }, fontSize: { xs: '1.75rem', md: '2.5rem' } }}
              >
                Доверен ИТ партньор
                <Box component="span" sx={{ color: 'secondary.main' }}> в България</Box>
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                Основана през 2009 г., K&amp;D Consult се разраства от софийска фирма за ИТ поддръжка
                до един от водещите доставчици на управлявани услуги и ИТ консултации в България —
                с инфраструктура, която работи, и сигурност, която издържа, в сферите на финансите,
                логистиката, търговията, здравеопазването и професионалните услуги.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ mb: { xs: 6, md: 8 } }} />

        {/* ── Two balanced columns ── */}
        <Grid container spacing={{ xs: 5, md: 6 }} sx={{ alignItems: 'stretch' }}>

          {/* Left: dark stat panel */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                background: 'linear-gradient(160deg, #061A3A 0%, #0D2B5E 55%, #1A4A96 100%)',
                p: { xs: 3, md: 4 },
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                position: 'relative',
                height: '100%',
              }}
            >
              {/* Dot-grid texture */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  opacity: 0.06,
                  backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                  pointerEvents: 'none',
                }}
              />

              {/* 2×2 stats grid */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 1.5,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {[
                  { value: '2009', label: 'Основана', sub: 'София, България' },
                  { value: '200+', label: 'Активни клиенти', sub: 'В 8 индустрии' },
                  { value: '40+', label: 'Сертифицирани инженери', sub: 'Само старши специалисти' },
                  { value: '99.9%', label: 'Наличност по SLA', sub: 'Enterprise ниво' },
                ].map((stat) => (
                  <Box
                    key={stat.label}
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 2,
                      p: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '1.625rem',
                        lineHeight: 1,
                        mb: 0.4,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.8125rem', fontWeight: 500, lineHeight: 1.3 }}>
                      {stat.label}
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', mt: 0.3 }}>
                      {stat.sub}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Divider */}
              <Box sx={{ height: '1px', bgcolor: 'rgba(255,255,255,0.1)', position: 'relative', zIndex: 1 }} />

              {/* Quote block */}
              <Box sx={{ position: 'relative', zIndex: 1, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <Box sx={{ width: 28, height: 3, bgcolor: 'secondary.main', borderRadius: 4, mb: 1.75 }} />
                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.88)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                    fontWeight: 300,
                  }}
                >
                  „Нашата мисия е да направим корпоративните ИТ услуги достъпни за всеки български бизнес — независимо от размера или сектора му.“
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, mt: 2 }}>
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.75rem' }}>K</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '0.8125rem' }}>
                      Ръководството на K&amp;D Consult
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.7rem' }}>
                      София, България · осн. 2009
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right: values + certifications + CTA */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={2} sx={{ mb: 4 }}>
              {VALUES.map((v) => (
                <Box
                  key={v.title}
                  sx={{
                    display: 'flex',
                    gap: 2,
                    alignItems: 'flex-start',
                    p: 2,
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'background.paper',
                    transition: 'border-color 0.2s',
                    '&:hover': { borderColor: 'secondary.light' },
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      bgcolor: v.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {v.icon}
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ mb: 0.5, fontSize: '0.9375rem' }}>
                      {v.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {v.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>

            {/* Certifications */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="caption"
                sx={{
                  color: 'text.disabled',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  fontSize: '0.7rem',
                  display: 'block',
                  mb: 1.5,
                }}
              >
                Сертификати и партньорства
              </Typography>
              <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
                {CERTIFICATIONS.map((cert) => (
                  <Chip
                    key={cert}
                    icon={<CheckCircleIcon sx={{ fontSize: 13, color: 'success.main !important' }} />}
                    label={cert}
                    size="small"
                    variant="outlined"
                    sx={{ fontSize: '0.75rem', fontWeight: 500, borderColor: 'divider' }}
                  />
                ))}
              </Stack>
            </Box>

            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              href="#contact"
              sx={{ borderRadius: 2 }}
            >
              Запишете консултация
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
