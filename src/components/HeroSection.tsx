import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import VerifiedIcon from '@mui/icons-material/Verified';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircle';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SecurityIcon from '@mui/icons-material/Security';
import CloudIcon from '@mui/icons-material/Cloud';

const TRUST_BADGES = [
  { icon: <VerifiedIcon sx={{ fontSize: 14 }} />, label: 'Съответствие с ISO 27001' },
  { icon: <VerifiedIcon sx={{ fontSize: 14 }} />, label: 'Microsoft Partner' },
  { icon: <VerifiedIcon sx={{ fontSize: 14 }} />, label: '15+ години опит' },
];

const STATS = [
  { value: '200+', label: 'Обслужени клиенти' },
  { value: '99.9%', label: 'Наличност по SLA' },
  { value: '15+', label: 'Години в ИТ' },
  { value: '24/7', label: 'Поддръжка' },
];

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(150deg, #061A3A 0%, #0D2B5E 40%, #1A4A96 75%, #2563EB 100%)',
        pt: { xs: 10, md: 0 },
        pb: { xs: 8, md: 0}
      }}
    >
      {/* Background geometric pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.08,
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(255,255,255,0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(37,99,235,0.3) 0%, transparent 50%),
            linear-gradient(0deg, transparent 24%, rgba(255,255,255,0.03) 25%, rgba(255,255,255,0.03) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.03) 75%, rgba(255,255,255,0.03) 76%, transparent 77%),
            linear-gradient(90deg, transparent 24%, rgba(255,255,255,0.03) 25%, rgba(255,255,255,0.03) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.03) 75%, rgba(255,255,255,0.03) 76%, transparent 77%)
          `,
          backgroundSize: '100% 100%, 100% 100%, 60px 60px, 60px 60px',
        }}
      />

      {/* Glow blobs */}
      <Box
        sx={{
          position: 'absolute',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)',
          top: -200,
          right: -100,
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(96,165,250,0.15) 0%, transparent 70%)',
          bottom: 0,
          left: -100,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 7 }}>
            {/* Trust badges */}
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', mb: 3, gap: 1 }}>
              {TRUST_BADGES.map((badge) => (
                <Chip
                  key={badge.label}
                  icon={badge.icon}
                  label={badge.label}
                  size="small"
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.12)',
                    color: 'rgba(255,255,255,0.9)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    '& .MuiChip-icon': { color: '#60A5FA' },
                    backdropFilter: 'blur(8px)',
                    fontWeight: 500,
                  }}
                />
              ))}
            </Stack>

            <Typography
              variant="h1"
              sx={{
                color: '#FFFFFF',
                mb: 3,
                fontSize: { xs: '2.25rem', sm: '3rem', md: '3.5rem' },
              }}
            >
              Корпоративно ИТ,
              <Box component="span" sx={{ display: 'block', color: '#93C5FD' }}>
                управлявано прецизно
              </Box>
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                color: 'rgba(255,255,255,0.75)',
                mb: 4,
                maxWidth: 560,
                fontSize: { xs: '1rem', md: '1.125rem' },
              }}
            >
              K&amp;D Consult предлага цялостни решения за ИТ инфраструктура, киберсигурност
              и облачни технологии за български и регионални компании — подкрепени от
              над 15 години доказан опит и денонощна експертна поддръжка.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 6 }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                href="#contact"
                sx={{ borderRadius: 2 }}
              >
                Безплатен ИТ одит
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<PlayCircleOutlineIcon />}
                href="#services"
                sx={{
                  borderRadius: 2,
                  color: '#fff',
                  borderColor: 'rgba(255,255,255,0.35)',
                  borderWidth: 2,
                  '&:hover': {
                    borderColor: '#fff',
                    bgcolor: 'rgba(255,255,255,0.08)',
                    borderWidth: 2,
                  },
                }}
              >
                Вижте услугите
              </Button>
            </Stack>

            {/* Stats row */}
            <Grid container spacing={3}>
              {STATS.map((stat) => (
                <Grid key={stat.label} size={{ xs: 6, sm: 3 }}>
                  <Box>
                    <Typography
                      variant="h3"
                      sx={{
                        color: '#FFFFFF',
                        fontWeight: 700,
                        fontSize: { xs: '1.75rem', md: '2rem' },
                        mb: 0.25,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '0.75rem',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right side floating cards */}
          <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ position: 'relative', width: 360, height: 400 }}>
              {[
                { icon: <CloudIcon sx={{ fontSize: 28, color: '#60A5FA' }} />, title: 'Облачна инфраструктура', desc: 'Хибридни среди — Azure и on-premises', top: 0, left: 20 },
                { icon: <SecurityIcon sx={{ fontSize: 28, color: '#34D399' }} />, title: 'Киберсигурност', desc: 'Проактивно откриване и реакция на заплахи', top: 130, left: 80 },
                { icon: <SupportAgentIcon sx={{ fontSize: 28, color: '#F59E0B' }} />, title: 'Денонощен Help Desk', desc: 'Дежурни инженери на разположение', top: 260, left: 10 },
              ].map((card) => (
                <Box
                  key={card.title}
                  sx={{
                    position: 'absolute',
                    top: card.top,
                    left: card.left,
                    width: 300,
                    bgcolor: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: 3,
                    p: 2.5,
                    backdropFilter: 'blur(16px)',
                    display: 'flex',
                    gap: 2,
                    alignItems: 'flex-start',
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'translateX(6px)' },
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.08)',
                      borderRadius: 2,
                      p: 1,
                      flexShrink: 0,
                    }}
                  >
                    {card.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '0.9375rem', mb: 0.25 }}>
                      {card.title}
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8125rem', lineHeight: 1.5 }}>
                      {card.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Bottom wave */}
      <Box
        component="svg"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        sx={{
          position: 'absolute',
          bottom: -1,
          left: 0,
          right: 0,
          width: '100%',
          height: 80,
          display: 'block',
        }}
      >
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#F8FAFD" />
      </Box>
    </Box>
  );
}
