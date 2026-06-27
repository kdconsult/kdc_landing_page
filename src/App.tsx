import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import theme from './theme';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        <NavBar />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PricingSection />
        <TestimonialsSection />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
