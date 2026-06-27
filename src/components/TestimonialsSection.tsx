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
    name: 'Georgi Petrov',
    role: 'CEO',
    company: 'FinTech Solutions BG',
    initials: 'GP',
    color: '#2563EB',
    rating: 5,
    quote:
      "K&D Consult transformed our IT from a bottleneck into a competitive advantage. Their team migrated us to Azure with zero downtime and reduced our infrastructure costs by 38%. Exceptional technical depth and true business partnership.",
    service: 'Cloud Migration',
    verified: true,
  },
  {
    name: 'Maria Stoyanova',
    role: 'Operations Director',
    company: 'Interlogistics Ltd.',
    initials: 'MS',
    color: '#059669',
    rating: 5,
    quote:
      "After a ransomware incident with our previous provider, K&D implemented a comprehensive security program. Their EDR and SIEM setup caught and neutralized two attempted breaches in the first three months. Peace of mind is priceless.",
    service: 'Cybersecurity',
    verified: true,
  },
  {
    name: 'Nikolay Dimitrov',
    role: 'CTO',
    company: 'ProBuild Group',
    initials: 'ND',
    color: '#7C3AED',
    rating: 5,
    quote:
      "Three office locations, 120 employees, and a growing hybrid workforce — K&D manages it all seamlessly. Response times are consistently under 15 minutes and their engineers genuinely understand our business context.",
    service: 'Managed IT Services',
    verified: true,
  },
  {
    name: 'Elena Radeva',
    role: 'Finance Manager',
    company: 'Arcadia Retail Chain',
    initials: 'ER',
    color: '#DC2626',
    rating: 5,
    quote:
      "We switched to K&D's Business plan after being let down by two other providers. From day one, the helpdesk quality and proactivity were completely different. Downtime has dropped to near zero and our team is more productive than ever.",
    service: 'Business Plan',
    verified: true,
  },
  {
    name: 'Stefan Ivanov',
    role: 'IT Manager',
    company: 'Pharma Distributors BG',
    initials: 'SI',
    color: '#D97706',
    rating: 5,
    quote:
      "The DR planning and backup service K&D designed for us met all our regulatory requirements and actually worked when we needed it during a server failure. Recovery was complete in under 2 hours versus days previously.",
    service: 'Backup & DR',
    verified: true,
  },
  {
    name: 'Ivanka Kostadinova',
    role: 'Managing Partner',
    company: 'LegalCore Sofia',
    initials: 'IK',
    color: '#0891B2',
    rating: 5,
    quote:
      "As a law firm, data confidentiality is paramount. K&D's GDPR compliance support and network segmentation gave our partners confidence that client data is handled to the highest standard. Highly recommended for regulated industries.",
    service: 'GDPR & Security',
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
            Client Stories
          </Typography>
          <Typography variant="h2" sx={{ mb: 2.5 }}>
            Trusted by Bulgarian Businesses
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Real outcomes from real clients. Our clients stay with us for years
            because we deliver measurable results, not just technical services.
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
                    &ldquo;{t.quote}&rdquo;
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
            { value: '4.9/5', label: 'Average Client Rating', sub: 'Based on 180+ reviews' },
            { value: '94%', label: 'Client Retention Rate', sub: 'Year-over-year' },
            { value: '< 15 min', label: 'Avg. Response Time', sub: 'For critical incidents' },
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
