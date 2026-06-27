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
    title: 'Managed IT Services',
    tagline: 'Your outsourced IT department',
    description:
      'Full-spectrum IT management — from helpdesk and desktop support to proactive monitoring, patch management, and IT strategy advisory.',
    features: ['Help Desk (L1/L2/L3)', 'Proactive Monitoring', 'Patch Management', 'IT Strategy Advisory'],
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 32 }} />,
    color: '#059669',
    bg: '#ECFDF5',
    title: 'Cybersecurity',
    tagline: 'Protect what matters most',
    description:
      'Enterprise-grade security posture: vulnerability assessments, endpoint protection, SIEM monitoring, phishing simulation, and regulatory compliance.',
    features: ['Vulnerability Assessments', 'Endpoint Security (EDR)', 'SIEM & Log Monitoring', 'GDPR Compliance'],
  },
  {
    icon: <CloudIcon sx={{ fontSize: 32 }} />,
    color: '#7C3AED',
    bg: '#F5F3FF',
    title: 'Cloud Solutions',
    tagline: 'Migrate, optimize, scale',
    description:
      'Azure and hybrid cloud architecture, migration planning, licensing optimization, and managed cloud operations — designed for Bulgarian enterprises.',
    features: ['Azure Architecture', 'Cloud Migration', 'License Optimization', 'Hybrid Environments'],
  },
  {
    icon: <NetworkCheckIcon sx={{ fontSize: 32 }} />,
    color: '#DC2626',
    bg: '#FEF2F2',
    title: 'Network Infrastructure',
    tagline: 'Reliable connectivity at scale',
    description:
      'Structured cabling, Wi-Fi design, firewall configuration, VPN, SD-WAN, and ongoing network health monitoring — built for uptime.',
    features: ['Firewall & VPN Setup', 'Wi-Fi Design & Rollout', 'SD-WAN', 'Network Monitoring'],
  },
  {
    icon: <StorageIcon sx={{ fontSize: 32 }} />,
    color: '#D97706',
    bg: '#FFFBEB',
    title: 'Backup & Disaster Recovery',
    tagline: 'Business continuity assured',
    description:
      'Multi-tier backup strategies, off-site replication, RPO/RTO planning, and regular DR testing to keep your data safe and recoverable.',
    features: ['Automated Backups', 'Off-site Replication', 'RPO/RTO Planning', 'DR Testing'],
  },
  {
    icon: <ComputerIcon sx={{ fontSize: 32 }} />,
    color: '#0891B2',
    bg: '#ECFEFF',
    title: 'IT Procurement & Deployment',
    tagline: 'Right hardware, right time',
    description:
      'Hardware sourcing, licensing procurement, workstation imaging, server deployment, and lifecycle management — from spec to shelf.',
    features: ['Hardware Sourcing', 'Workstation Imaging', 'Server Deployment', 'Lifecycle Management'],
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
            What We Do
          </Typography>
          <Typography variant="h2" sx={{ mb: 2.5, color: 'text.primary' }}>
            Comprehensive IT Services
            <Box component="span" sx={{ color: 'secondary.main' }}> Built for Business</Box>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 520 }}>
            From day-to-day IT operations to long-term digital transformation —
            K&amp;D Consult provides the expertise and infrastructure your organization needs to thrive.
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
            Discuss Your IT Needs
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
