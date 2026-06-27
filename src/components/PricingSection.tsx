import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';

const PLANS = [
  {
    name: 'Essential',
    tagline: 'Основа за малкия бизнес',
    priceNote: 'От',
    price: '€149',
    unit: 'на устройство/мес.',
    description: 'Основни управлявани ИТ услуги за малки екипи — мониторинг, Help Desk и базова защита.',
    features: [
      'Отдалечена поддръжка (в работно време)',
      'Проактивен мониторинг на устройства',
      'Управление на актуализации за Windows',
      'Антивирусна защита на крайни устройства',
      'Месечен ИТ отчет',
      'До 25 устройства',
    ],
    excluded: ['Поддръжка на място', 'Денонощно покритие', 'Разширена сигурност'],
    cta: 'Започнете',
    popular: false,
    accentColor: '#2563EB',
    accentBg: '#EFF6FF',
  },
  {
    name: 'Business',
    tagline: 'Най-популярен',
    priceNote: 'От',
    price: '€249',
    unit: 'на устройство/мес.',
    description: 'Цялостни управлявани ИТ услуги с разширено работно време, облачна интеграция и мониторинг на сигурността.',
    features: [
      'Поддръжка 8:00–20:00 + дежурство',
      'Поддръжка на място (8 часа/мес.)',
      'Пълно управление на актуализации',
      'EDR + SIEM мониторинг',
      'Облачно архивиране (365 дни съхранение)',
      'Управление на Azure / Microsoft 365',
      'Тримесечен бизнес преглед',
      'До 100 устройства',
    ],
    excluded: ['Денонощен NOC', 'Индивидуални SLA'],
    cta: 'Започнете',
    popular: true,
    accentColor: '#0D2B5E',
    accentBg: '#EFF6FF',
  },
  {
    name: 'Enterprise',
    tagline: 'Цялостен ИТ партньор',
    priceNote: 'Индивидуална цена',
    price: null,
    unit: 'съобразена с вашия мащаб',
    description: 'Персонализирано ИТ партньорство с денонощен NOC, индивидуални SLA, поддръжка за съответствие и стратегическо консултиране.',
    features: [
      'Денонощен NOC и поддръжка',
      'Неограничена поддръжка на място',
      'Индивидуален SLA (99.9% наличност)',
      'Разширен анализ на заплахи',
      'Планиране и тестване на възстановяване при срив',
      'Поддръжка за съответствие (GDPR, ISO)',
      'Личен мениджър на акаунта',
      'vCIO консултантски услуги',
      'Неограничен брой устройства',
    ],
    excluded: [],
    cta: 'Заявете оферта',
    popular: false,
    accentColor: '#7C3AED',
    accentBg: '#F5F3FF',
  },
];

const ADD_ONS = [
  { name: 'Лицензиране на Microsoft 365', price: 'От €8/потребител/мес.' },
  { name: 'Azure облачен хостинг', price: 'От €49/мес.' },
  { name: 'Допълнителни часове на място', price: '€75/час' },
  { name: 'Обучение по киберсигурност', price: 'От €15/потребител/мес.' },
  { name: 'Пространство за архиви (за TB)', price: '€25/мес.' },
  { name: 'ИТ доставки', price: 'Без надценка върху хардуера' },
];

export default function PricingSection() {
  return (
    <Box
      component="section"
      id="pricing"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'grey.50',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        {/* Section header */}
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <Typography variant="subtitle2" sx={{ color: 'secondary.main', mb: 1.5 }}>
            Прозрачно ценообразуване
          </Typography>
          <Typography variant="h2" sx={{ mb: 2.5 }}>
            Планове за всеки мащаб
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 520, mx: 'auto' }}>
            Без скрити такси и без обвързващи договори. Изберете подходящия за вас план днес
            и го разширявайте с растежа на бизнеса си.
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
          {PLANS.map((plan) => (
            <Grid key={plan.name} size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'visible',
                  bgcolor: plan.popular ? 'primary.main' : 'background.paper',
                  border: plan.popular ? '2px solid' : '1px solid',
                  borderColor: plan.popular ? 'primary.main' : 'divider',
                  boxShadow: plan.popular ? '0px 24px 56px rgba(13,43,94,0.22)' : 'none',
                  transform: plan.popular ? 'scale(1.02)' : 'none',
                  '&:hover': {
                    transform: plan.popular ? 'scale(1.02) translateY(-3px)' : 'translateY(-3px)',
                  },
                  zIndex: plan.popular ? 2 : 1,
                }}
              >
                {plan.popular && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -14,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 10,
                    }}
                  >
                    <Chip
                      icon={<StarIcon sx={{ fontSize: 14, color: '#F59E0B !important' }} />}
                      label="Най-популярен"
                      size="small"
                      sx={{
                        bgcolor: '#FFFBEB',
                        color: '#92400E',
                        fontWeight: 600,
                        border: '1px solid #FCD34D',
                        height: 28,
                      }}
                    />
                  </Box>
                )}

                <CardContent sx={{ p: 3.5, flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', borderRadius: 'inherit' }}>
                  {/* Plan header */}
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        display: 'block',
                        fontWeight: 500,
                        letterSpacing: '0.07em',
                        textTransform: 'uppercase',
                        fontSize: '0.7rem',
                        color: plan.popular ? 'rgba(255,255,255,0.6)' : 'text.disabled',
                        mb: 0.5,
                      }}
                    >
                      {plan.tagline}
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ color: plan.popular ? '#fff' : 'text.primary', mb: 1 }}
                    >
                      {plan.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: plan.popular ? 'rgba(255,255,255,0.7)' : 'text.secondary',
                        lineHeight: 1.6,
                      }}
                    >
                      {plan.description}
                    </Typography>
                  </Box>

                  {/* Price */}
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: plan.popular ? 'rgba(255,255,255,0.5)' : 'text.disabled',
                        fontSize: '0.75rem',
                        display: 'block',
                        mb: 0.25,
                      }}
                    >
                      {plan.priceNote}
                    </Typography>
                    {plan.price ? (
                      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5 }}>
                        <Typography
                          variant="h2"
                          sx={{
                            color: plan.popular ? '#fff' : 'primary.main',
                            fontWeight: 700,
                            lineHeight: 1,
                          }}
                        >
                          {plan.price}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: plan.popular ? 'rgba(255,255,255,0.6)' : 'text.secondary' }}
                        >
                          {plan.unit}
                        </Typography>
                      </Box>
                    ) : (
                      <Typography
                        variant="h4"
                        sx={{ color: plan.popular ? '#fff' : 'secondary.main', fontWeight: 700 }}
                      >
                        Да поговорим
                      </Typography>
                    )}
                  </Box>

                  <Divider
                    sx={{
                      mb: 3,
                      borderColor: plan.popular ? 'rgba(255,255,255,0.15)' : 'divider',
                    }}
                  />

                  {/* Features */}
                  <Stack spacing={1.25} sx={{ flexGrow: 1, mb: 3 }}>
                    {plan.features.map((f) => (
                      <Box key={f} sx={{ display: 'flex', gap: 1.25, alignItems: 'flex-start' }}>
                        <CheckCircleIcon
                          sx={{
                            fontSize: 18,
                            color: plan.popular ? '#34D399' : 'success.main',
                            flexShrink: 0,
                            mt: 0.15,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            color: plan.popular ? 'rgba(255,255,255,0.85)' : 'text.primary',
                            fontSize: '0.875rem',
                            lineHeight: 1.5,
                          }}
                        >
                          {f}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>

                  <Button
                    variant={plan.popular ? 'contained' : 'outlined'}
                    color={plan.popular ? 'secondary' : 'primary'}
                    size="large"
                    fullWidth
                    endIcon={<ArrowForwardIcon />}
                    href="#contact"
                    sx={{
                      borderRadius: 2,
                      mt: 'auto',
                      ...(plan.popular
                        ? {}
                        : {
                            borderWidth: 2,
                            '&:hover': { borderWidth: 2 },
                          }),
                    }}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Add-ons */}
        <Box sx={{ mt: { xs: 8, md: 10 } }}>
          <Typography variant="h4" sx={{ mb: 1, textAlign: 'center' }}>
            Допълнителни услуги
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: 'center', mb: 4 }}
          >
            Разширете всеки план с допълнителни услуги, таксувани отделно.
          </Typography>
          <Grid container spacing={2}>
            {ADD_ONS.map((addon) => (
              <Grid key={addon.name} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 2,
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    transition: 'border-color 0.2s',
                    '&:hover': { borderColor: 'secondary.main' },
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.primary' }}>
                    {addon.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: 'secondary.main', fontWeight: 600, whiteSpace: 'nowrap', ml: 1 }}
                  >
                    {addon.price}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mt: 5, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            Всички цени са без ДДС. Минимален срок на договор: 12 месеца. Отстъпки за обем при над 50 устройства.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
