import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const FOOTER_LINKS = {
  Services: [
    'Managed IT Services',
    'Cybersecurity',
    'Cloud Solutions',
    'Network Infrastructure',
    'Backup & Disaster Recovery',
    'IT Procurement',
  ],
  Company: ['About Us', 'Our Team', 'Partners', 'Case Studies', 'Blog', 'Careers'],
  Legal: ['Privacy Policy', 'Cookie Policy', 'Terms of Service', 'GDPR Statement'],
};

export default function Footer() {
  return (
    <Box component="footer" id="contact">
      {/* Contact CTA Section */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          bgcolor: 'grey.50',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 5, md: 8 }} sx={{ alignItems: 'flex-start' }}>
            {/* Left: Contact details */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="subtitle2" sx={{ color: 'secondary.main', mb: 1.5 }}>
                Get In Touch
              </Typography>
              <Typography variant="h2" sx={{ mb: 2.5, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
                Let&apos;s Discuss Your IT Needs
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Book a free 30-minute IT audit with one of our senior engineers.
                No commitment, no pressure — just practical insights for your business.
              </Typography>

              <Stack spacing={2.5}>
                {[
                  { icon: <PhoneIcon sx={{ fontSize: 20, color: 'secondary.main' }} />, label: '+359 2 850 53 00', sub: 'Mon–Fri, 9:00–18:00' },
                  { icon: <EmailIcon sx={{ fontSize: 20, color: 'secondary.main' }} />, label: 'info@kdconsult.eu', sub: 'We reply within 2 business hours' },
                  { icon: <LocationOnIcon sx={{ fontSize: 20, color: 'secondary.main' }} />, label: '125 Tsarigradsko Shose Blvd, Sofia 1784', sub: 'Business Park Sofia, Building 2' },
                  { icon: <AccessTimeIcon sx={{ fontSize: 20, color: 'secondary.main' }} />, label: 'Support: 24/7 for Enterprise clients', sub: 'Helpdesk: 8:00–20:00 for others' },
                ].map((item) => (
                  <Box key={item.label} sx={{ display: 'flex', gap: 1.75, alignItems: 'flex-start' }}>
                    <Box
                      sx={{
                        mt: 0.25,
                        width: 36,
                        height: 36,
                        borderRadius: 2,
                        bgcolor: '#EFF6FF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary', mb: 0.25 }}>
                        {item.label}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {item.sub}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Grid>

            {/* Right: Contact form */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                sx={{
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  p: { xs: 3, md: 4 },
                  boxShadow: '0px 8px 24px rgba(13,43,94,0.07)',
                }}
              >
                <Typography variant="h5" sx={{ mb: 0.75, color: 'text.primary' }}>
                  Request a Free IT Audit
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Tell us about your business and current IT setup — we&apos;ll prepare a tailored assessment.
                </Typography>

                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="Full Name" variant="outlined" size="small" />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="Company Name" variant="outlined" size="small" />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="Business Email" type="email" variant="outlined" size="small" />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="Phone Number" type="tel" variant="outlined" size="small" />
                  </Grid>
                  <Grid size={12}>
                    <TextField
                      fullWidth
                      label="Describe your IT needs or challenges"
                      multiline
                      rows={4}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid size={12}>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      fullWidth
                      endIcon={<ArrowForwardIcon />}
                      sx={{ borderRadius: 2 }}
                    >
                      Send Request
                    </Button>
                  </Grid>
                </Grid>

                <Typography variant="caption" color="text.disabled" sx={{ display: 'block', mt: 2 }}>
                  By submitting this form you agree to our Privacy Policy. We never share your data with third parties.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Bottom Footer */}
      <Box sx={{ bgcolor: 'primary.dark', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Brand column */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    bgcolor: 'rgba(255,255,255,0.1)',
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>
                    K
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700 }}>
                  K&amp;D Consult
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', mb: 3, lineHeight: 1.7 }}>
                Enterprise IT consulting and managed services provider based in Sofia, Bulgaria.
                Serving Bulgarian and regional businesses since 2009.
              </Typography>
              <Stack direction="row" spacing={1}>
                {[
                  { icon: <LinkedInIcon sx={{ fontSize: 18 }} />, label: 'LinkedIn' },
                  { icon: <FacebookIcon sx={{ fontSize: 18 }} />, label: 'Facebook' },
                ].map((social) => (
                  <Box
                    key={social.label}
                    component="a"
                    href="#"
                    aria-label={social.label}
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: 2,
                      bgcolor: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'rgba(255,255,255,0.7)',
                      transition: 'background 0.2s',
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.15)', color: '#fff' },
                    }}
                  >
                    {social.icon}
                  </Box>
                ))}
              </Stack>
            </Grid>

            {/* Link columns */}
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <Grid key={title} size={{ xs: 6, sm: 4, md: 2 }}>
                <Typography
                  variant="caption"
                  sx={{
                    color: 'rgba(255,255,255,0.4)',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontSize: '0.7rem',
                    display: 'block',
                    mb: 1.5,
                  }}
                >
                  {title}
                </Typography>
                <Stack spacing={1}>
                  {links.map((link) => (
                    <Link
                      key={link}
                      href="#"
                      underline="none"
                      sx={{
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '0.875rem',
                        '&:hover': { color: '#fff' },
                        transition: 'color 0.2s',
                        display: 'block',
                      }}
                    >
                      {link}
                    </Link>
                  ))}
                </Stack>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'center' },
              gap: 1.5,
            }}
          >
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>
              &copy; {new Date().getFullYear()} K&amp;D Consult Ltd. All rights reserved. UIC: 175248163
            </Typography>
            <Stack direction="row" spacing={3}>
              {['Privacy Policy', 'Terms', 'Cookies'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  underline="none"
                  sx={{
                    color: 'rgba(255,255,255,0.4)',
                    fontSize: '0.8rem',
                    '&:hover': { color: 'rgba(255,255,255,0.8)' },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
