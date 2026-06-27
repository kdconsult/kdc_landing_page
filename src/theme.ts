import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#0D2B5E',
			light: '#1A4A96',
			dark: '#061A3A',
			contrastText: '#FFFFFF',
		},
		secondary: {
			main: '#2563EB',
			light: '#60A5FA',
			dark: '#1D4ED8',
			contrastText: '#FFFFFF',
		},
		background: {
			default: '#F8FAFD',
			paper: '#FFFFFF',
		},
		text: {
			primary: '#0F1C35',
			secondary: '#4B5D7A',
		},
		divider: '#E2E8F0',
	},
	typography: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		h1: {
			fontWeight: 700,
			letterSpacing: '-0.02em',
			lineHeight: 1.15,
		},
		h2: {
			fontWeight: 700,
			letterSpacing: '-0.015em',
			lineHeight: 1.2,
		},
		h3: {
			fontWeight: 600,
			letterSpacing: '-0.01em',
			lineHeight: 1.3,
		},
		h4: {
			fontWeight: 600,
			letterSpacing: '-0.005em',
			lineHeight: 1.4,
		},
		h5: {
			fontWeight: 600,
			lineHeight: 1.4,
		},
		h6: {
			fontWeight: 600,
			lineHeight: 1.5,
		},
		subtitle1: {
			lineHeight: 1.6,
		},
		subtitle2: {
			fontWeight: 500,
			letterSpacing: '0.07em',
			textTransform: 'uppercase' as const,
		},
		body1: {
			lineHeight: 1.7,
		},
		body2: {
			lineHeight: 1.65,
		},
	},
	shape: {
		borderRadius: 8,
	},
	components: {
		MuiButton: {
			defaultProps: {
				disableElevation: true,
			},
			styleOverrides: {
				root: {
					textTransform: 'none',
					fontWeight: 600,
					borderRadius: 8,
					letterSpacing: '0.01em',
				},
				sizeLarge: {
					padding: '12px 28px',
					fontSize: '1rem',
				},
			},
			variants: [
				{
					props: { variant: 'contained', color: 'primary' },
					style: {
						background: 'linear-gradient(135deg, #1A4A96 0%, #0D2B5E 100%)',
						'&:hover': {
							background: 'linear-gradient(135deg, #2256B0 0%, #153670 100%)',
						},
					},
				},
				{
					props: { variant: 'contained', color: 'secondary' },
					style: {
						background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
						'&:hover': {
							background: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)',
						},
					},
				},
				{
					props: { variant: 'outlined', color: 'primary' },
					style: {
						borderWidth: 2,
						'&:hover': { borderWidth: 2 },
					},
				},
			],
		},
		MuiCard: {
			defaultProps: {
				elevation: 0,
			},
			styleOverrides: {
				root: {
					border: '1px solid #E2E8F0',
					borderRadius: 12,
					transition: 'box-shadow 0.25s ease, transform 0.25s ease',
					'&:hover': {
						boxShadow: '0px 16px 40px rgba(13, 43, 94, 0.12)',
						transform: 'translateY(-3px)',
					},
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundImage: 'none',
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundImage: 'none',
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					fontWeight: 500,
				},
			},
		},
	},
});

theme = responsiveFontSizes(theme);
export default theme;
