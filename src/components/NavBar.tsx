import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const elevated = useScrollTrigger({
    disableHysteresis: true,
    threshold: 60,
  });

  return (
    <>
      <AppBar
        position="fixed"
        elevation={elevated ? 4 : 0}
        sx={{
          bgcolor: elevated ? 'background.paper' : 'transparent',
          borderBottom: elevated ? '1px solid' : 'none',
          borderColor: 'divider',
          transition: 'all 0.3s ease',
          backdropFilter: elevated ? 'blur(12px)' : 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ height: 72, gap: 2 }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexGrow: { xs: 1, md: 0 }, mr: { md: 4 } }}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  bgcolor: 'primary.main',
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #1A4A96 0%, #0D2B5E 100%)',
                }}
              >
                <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700, lineHeight: 1, fontSize: '1rem' }}>
                  K
                </Typography>
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: elevated ? 'text.primary' : '#fff',
                  letterSpacing: '-0.02em',
                  transition: 'color 0.3s ease',
                  fontSize: '1.125rem',
                }}
              >
                K&amp;D Consult
              </Typography>
            </Box>

            {/* Desktop Nav */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, flexGrow: 1 }}>
              {NAV_LINKS.map((link) => (
                <Button
                  key={link.label}
                  href={link.href}
                  sx={{
                    color: elevated ? 'text.secondary' : 'rgba(255,255,255,0.85)',
                    fontWeight: 500,
                    px: 1.5,
                    '&:hover': {
                      color: elevated ? 'primary.main' : '#fff',
                      bgcolor: elevated ? 'action.hover' : 'rgba(255,255,255,0.1)',
                    },
                    transition: 'color 0.2s ease',
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>

            {/* Phone + CTA */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                <PhoneIcon
                  sx={{
                    fontSize: 16,
                    color: elevated ? 'secondary.main' : 'rgba(255,255,255,0.7)',
                    transition: 'color 0.3s ease',
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: elevated ? 'text.secondary' : 'rgba(255,255,255,0.85)',
                    fontWeight: 500,
                    transition: 'color 0.3s ease',
                  }}
                >
                  +359 2 850 53 00
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="secondary"
                size="medium"
                href="#contact"
                sx={{ borderRadius: 2 }}
              >
                Get a Free Audit
              </Button>
            </Box>

            {/* Mobile hamburger */}
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{
                display: { xs: 'flex', md: 'none' },
                color: elevated ? 'text.primary' : '#fff',
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 280, pt: 2, pb: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, mb: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
              K&amp;D Consult
            </Typography>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {NAV_LINKS.map((link) => (
              <ListItem
                key={link.label}
                component="a"
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                sx={{ cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }}
              >
                <ListItemText
                  primary={link.label}
                  slotProps={{ primary: { fontWeight: 500 } }}
                />
              </ListItem>
            ))}
          </List>
          <Divider sx={{ my: 1 }} />
          <Box sx={{ px: 2, pt: 1 }}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              href="#contact"
              onClick={() => setDrawerOpen(false)}
              sx={{ borderRadius: 2, py: 1.25 }}
            >
              Get a Free Audit
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
