import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ComputerIcon from '@mui/icons-material/Computer';
import SecurityIcon from '@mui/icons-material/Security';
import CloudIcon from '@mui/icons-material/Cloud';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import StorageIcon from '@mui/icons-material/Storage';

const SERVICES = [
  {
    icon: <SupportAgentIcon sx={{ fontSize: 32 }} />,
    color: '#2563EB',
    bg: '#EFF6FF',
    title: 'Управлявани ИТ услуги',
    tagline: 'Вашият външен ИТ отдел',
    description:
      'Пълно управление на ИТ среда — от Help Desk и поддръжка на потребителите до проактивен мониторинг, управление на актуализации и стратегически ИТ консултации.',
    features: ['Help Desk (L1/L2/L3)', 'Проактивен мониторинг', 'Управление на актуализации', 'ИТ стратегически консултации'],
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 32 }} />,
    color: '#059669',
    bg: '#ECFDF5',
    title: 'Киберсигурност',
    tagline: 'Защита на най-ценното',
    description:
      'Корпоративно ниво на защита: оценка на уязвимости, защита на крайни устройства, SIEM мониторинг, симулации на фишинг атаки и съответствие с регулаторните изисквания.',
    features: ['Оценка на уязвимости', 'Защита на крайни устройства (EDR)', 'SIEM и мониторинг на логове', 'Съответствие с GDPR'],
  },
  {
    icon: <CloudIcon sx={{ fontSize: 32 }} />,
    color: '#7C3AED',
    bg: '#F5F3FF',
    title: 'Облачни решения',
    tagline: 'Миграция, оптимизация, мащабиране',
    description:
      'Azure и хибридна облачна архитектура, планиране на миграции, оптимизация на лицензи и управление на облачни операции — съобразени с нуждите на българските предприятия.',
    features: ['Azure архитектура', 'Облачна миграция', 'Оптимизация на лицензи', 'Хибридни среди'],
  },
  {
    icon: <NetworkCheckIcon sx={{ fontSize: 32 }} />,
    color: '#DC2626',
    bg: '#FEF2F2',
    title: 'Мрежова инфраструктура',
    tagline: 'Надеждна свързаност в мащаб',
    description:
      'Структурно окабеляване, проектиране на Wi-Fi, конфигурация на Firewall, VPN, SD-WAN и непрекъснат мониторинг на мрежовото здраве — изградени за максимална наличност.',
    features: ['Firewall и VPN настройка', 'Проектиране и изграждане на Wi-Fi', 'SD-WAN', 'Мрежов мониторинг'],
  },
  {
    icon: <StorageIcon sx={{ fontSize: 32 }} />,
    color: '#D97706',
    bg: '#FFFBEB',
    title: 'Архивиране и възстановяване при срив',
    tagline: 'Гарантирана непрекъсваемост на бизнеса',
    description:
      'Многослойни стратегии за архивиране, външна репликация, планиране на RPO/RTO и редовно тестване на DR — за да бъдат данните ви в безопасност и възстановими при всяка ситуация.',
    features: ['Автоматизирано архивиране', 'Външна репликация', 'Планиране на RPO/RTO', 'Тестване на възстановяване'],
  },
  {
    icon: <ComputerIcon sx={{ fontSize: 32 }} />,
    color: '#0891B2',
    bg: '#ECFEFF',
    title: 'ИТ доставки и внедряване',
    tagline: 'Точният хардуер в точния момент',
    description:
      'Доставка на хардуер, лицензиране, имиджиране на работни станции, внедряване на сървъри и управление на жизнения цикъл — от спецификацията до крайния потребител.',
    features: ['Доставка на хардуер', 'Имиджиране на работни станции', 'Внедряване на сървъри', 'Управление на жизнения цикъл'],
  },
];

export default function ServicesSection() {
  return (
    <Box
      component="section"
      id="services"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}
    >
      <Container maxWidth="lg">
        {/* Section header */}
        <Box sx={{ mb: { xs: 6, md: 8 }, maxWidth: 640 }}>
          <Typography
            variant="subtitle2"
            sx={{ color: 'secondary.main', mb: 1.5 }}
          >
            Какво предлагаме
          </Typography>
          <Typography variant="h2" sx={{ mb: 2.5, color: 'text.primary' }}>
            Цялостни ИТ услуги
            <Box component="span" sx={{ color: 'secondary.main' }}> за вашия бизнес</Box>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 520 }}>
            От ежедневните ИТ операции до дългосрочната дигитална трансформация —
            K&amp;D Consult предоставя експертизата и инфраструктурата, от които организацията ви се нуждае, за да се развива.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {SERVICES.map((service) => (
            <Grid key={service.title} size={{ xs: 12, sm: 6, lg: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'background.paper',
                }}
              >
                <CardContent sx={{ p: 3.5, flexGrow: 1 }}>
                  {/* Icon */}
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: 2.5,
                      bgcolor: service.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2.5,
                      color: service.color,
                    }}
                  >
                    {service.icon}
                  </Box>

                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.disabled',
                      fontWeight: 500,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      fontSize: '0.7rem',
                      display: 'block',
                      mb: 0.75,
                    }}
                  >
                    {service.tagline}
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 1.5, color: 'text.primary' }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.65 }}>
                    {service.description}
                  </Typography>

                  <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 0.75 }}>
                    {service.features.map((f) => (
                      <Chip
                        key={f}
                        label={f}
                        size="small"
                        sx={{
                          bgcolor: service.bg,
                          color: service.color,
                          fontWeight: 500,
                          fontSize: '0.7rem',
                          border: 'none',
                          height: 24,
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            href="#contact"
            sx={{ borderRadius: 2, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
          >
            Обсъдете вашите ИТ нужди
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
