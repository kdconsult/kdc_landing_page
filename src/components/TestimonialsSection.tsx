import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';

const TESTIMONIALS = [
  {
    name: 'Георги Петров',
    role: 'Изпълнителен директор',
    company: 'FinTech Solutions BG',
    initials: 'ГП',
    color: '#2563EB',
    rating: 5,
    quote:
      'K&D Consult превърна нашата ИТ инфраструктура от спирачка в конкурентно предимство. Екипът ни мигрира към Azure без нито минута прекъсване и намали инфраструктурните ни разходи с 38%. Изключителна техническа дълбочина и истинско бизнес партньорство.',
    service: 'Облачна миграция',
    verified: true,
  },
  {
    name: 'Мария Стоянова',
    role: 'Оперативен директор',
    company: 'Interlogistics Ltd.',
    initials: 'МС',
    color: '#059669',
    rating: 5,
    quote:
      'След ransomware инцидент при предишния ни доставчик, K&D внедри цялостна програма за сигурност. Тяхната EDR и SIEM конфигурация засече и неутрализира два опита за пробив в първите три месеца. Спокойствието, което ни дадоха, няма цена.',
    service: 'Киберсигурност',
    verified: true,
  },
  {
    name: 'Николай Димитров',
    role: 'Технически директор',
    company: 'ProBuild Group',
    initials: 'НД',
    color: '#7C3AED',
    rating: 5,
    quote:
      'Три офиса, 120 служители и непрекъснато разрастваща се хибридна работна среда — K&D управлява всичко безпроблемно. Времето за реакция е трайно под 15 минути, а инженерите им наистина разбират нашия бизнес контекст.',
    service: 'Управлявани ИТ услуги',
    verified: true,
  },
  {
    name: 'Елена Радева',
    role: 'Финансов мениджър',
    company: 'Arcadia Retail Chain',
    initials: 'ЕР',
    color: '#DC2626',
    rating: 5,
    quote:
      'Преминахме към план Business на K&D след разочарование от двама предишни доставчика. От първия ден качеството на Help Desk и проактивността бяха на съвсем различно ниво. Престоят падна почти до нула, а екипът ни е по-продуктивен от всякога.',
    service: 'План Business',
    verified: true,
  },
  {
    name: 'Стефан Иванов',
    role: 'ИТ мениджър',
    company: 'Pharma Distributors BG',
    initials: 'СИ',
    color: '#D97706',
    rating: 5,
    quote:
      'Планът за DR и услугата за архивиране, разработени от K&D, покриват всички наши регулаторни изисквания и се оказаха напълно работещи при реален сървърен срив. Възстановяването приключи за под 2 часа — преди отнемаше дни.',
    service: 'Backup и DR',
    verified: true,
  },
  {
    name: 'Иванка Костадинова',
    role: 'Управляващ съдружник',
    company: 'LegalCore Sofia',
    initials: 'ИК',
    color: '#0891B2',
    rating: 5,
    quote:
      'Като адвокатска кантора, поверителността на данните е от първостепенно значение. Поддръжката за съответствие с GDPR и мрежовата сегментация от K&D дадоха на нашите съдружници увереност, че клиентските данни се обработват по най-високите стандарти. Препоръчваме ги за всяка регулирана индустрия.',
    service: 'GDPR и сигурност',
    verified: true,
  },
];

function StarRating({ count }: { readonly count: number }) {
  return (
    <Stack direction="row" spacing={0.25}>
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} sx={{ fontSize: 16, color: '#F59E0B' }} />
      ))}
    </Stack>
  );
}

export default function TestimonialsSection() {
  return (
    <Box
      component="section"
      id="testimonials"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: { xs: 6, md: 8 }, maxWidth: 600 }}>
          <Typography variant="subtitle2" sx={{ color: 'secondary.main', mb: 1.5 }}>
            Клиентски истории
          </Typography>
          <Typography variant="h2" sx={{ mb: 2.5 }}>
            Доверен партньор на българския бизнес
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Реални резултати от реални клиенти. Клиентите остават с нас с години, защото постигаме измерими резултати, а не просто технически услуги.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {TESTIMONIALS.map((t) => (
            <Grid key={t.name} size={{ xs: 12, sm: 6, lg: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'background.paper',
                }}
              >
                <CardContent sx={{ p: 3.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Quote icon + rating */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <FormatQuoteIcon sx={{ fontSize: 36, color: t.color, opacity: 0.3 }} />
                    <StarRating count={t.rating} />
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.primary',
                      lineHeight: 1.7,
                      flexGrow: 1,
                      mb: 3,
                      fontStyle: 'italic',
                      fontSize: '0.9375rem',
                    }}
                  >
                    „{t.quote}“
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mt: 'auto' }}>
                    <Avatar
                      sx={{
                        bgcolor: t.color,
                        width: 44,
                        height: 44,
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {t.initials}
                    </Avatar>
                    <Box sx={{ minWidth: 0, flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 600, color: 'text.primary', fontSize: '0.875rem' }}
                        >
                          {t.name}
                        </Typography>
                        {t.verified && (
                          <VerifiedIcon sx={{ fontSize: 14, color: t.color, flexShrink: 0 }} />
                        )}
                      </Box>
                      <Typography
                        variant="caption"
                        sx={{ color: 'text.secondary', fontSize: '0.75rem' }}
                      >
                        {t.role}, {t.company}
                      </Typography>
                    </Box>
                    <Chip
                      label={t.service}
                      size="small"
                      sx={{
                        bgcolor: `${t.color}15`,
                        color: t.color,
                        fontWeight: 500,
                        fontSize: '0.68rem',
                        height: 22,
                        flexShrink: 0,
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Summary bar */}
        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            p: { xs: 3, md: 4 },
            bgcolor: 'primary.main',
            borderRadius: 3,
            background: 'linear-gradient(135deg, #0D2B5E 0%, #1A4A96 100%)',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-evenly',
            gap: 3,
          }}
        >
          {[
            { value: '4.9/5', label: 'Среден рейтинг от клиенти', sub: 'На база 180+ отзива' },
            { value: '94%', label: 'Задържане на клиенти', sub: 'На годишна база' },
            { value: '< 15 min', label: 'Средно време за реакция', sub: 'При критични инциденти' },
          ].map((stat) => (
            <Box key={stat.label} sx={{ textAlign: 'center' }}>
              <Typography variant="h3" sx={{ color: '#fff', fontWeight: 700, mb: 0.25 }}>
                {stat.value}
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500, fontSize: '0.9rem' }}>
                {stat.label}
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}>
                {stat.sub}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
