import {
  Box,
  Grid,
  Typography,
  Paper,
  Card,
  CardContent,
  Fade,
  Slide,
  useTheme,
  Container,
  Chip,
} from '@mui/material';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import FaxIcon from '@mui/icons-material/Print';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import SignpostIcon from '@mui/icons-material/Signpost';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useState, useEffect } from 'react';

export default function PersonalServicesSection() {
  const theme = useTheme();
  const [visible, setVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setVisible(true), 200);
    const timer2 = setTimeout(() => setCardsVisible(true), 600);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const services = [
    { 
      icon: <PhotoCameraFrontIcon sx={{ color: 'primary.main', fontSize: 40 }} />, 
      label: 'Passport Photos',
      description: 'Professional passport & ID photos'
    },
    { 
      icon: <VerifiedUserIcon sx={{ color: 'primary.main', fontSize: 40 }} />, 
      label: 'Fingerprinting',
      description: 'Secure digital fingerprint services'
    },
    { 
      icon: <LocalPrintshopIcon sx={{ color: 'primary.main', fontSize: 40 }} />, 
      label: 'Copies & Printing',
      description: 'High-quality copies & document printing'
    },
    { 
      icon: <FaxIcon sx={{ color: 'primary.main', fontSize: 40 }} />, 
      label: 'Faxing Services',
      description: 'Send & receive fax documents'
    },
    { 
      icon: <BusinessCenterIcon sx={{ color: 'primary.main', fontSize: 40 }} />, 
      label: 'Business Cards',
      description: 'Professional business card printing'
    },
    { 
      icon: <WallpaperIcon sx={{ color: 'primary.main', fontSize: 40 }} />, 
      label: 'Banners',
      description: 'Custom banner design & printing'
    },
    { 
      icon: <SignpostIcon sx={{ color: 'primary.main', fontSize: 40 }} />, 
      label: 'Signs',
      description: 'Professional signage solutions'
    },
    { 
      icon: <MailOutlineIcon sx={{ color: 'primary.main', fontSize: 40 }} />, 
      label: 'Postcards',
      description: 'Custom postcard design & printing'
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: 'grey.50' }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Slide direction="up" in={visible} timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              label="Personal & Professional Services"
              sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                fontWeight: 'bold',
                mb: 3,
                px: 2,
                py: 1,
                fontSize: '0.9rem',
                animation: 'pulse 2s infinite',
                '@keyframes pulse': {
                  '0%': { transform: 'scale(1)' },
                  '50%': { transform: 'scale(1.05)' },
                  '100%': { transform: 'scale(1)' }
                }
              }}
            />
            
            <Typography
              variant="h3"
              fontWeight="bold"
              color="primary.main"
              gutterBottom
              sx={{
                background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2
              }}
            >
              Essential Services for Life & Business
            </Typography>
            
            <Typography 
              variant="h6" 
              color="text.secondary" 
              sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}
            >
              From passport photos to business printing, we provide the professional services you need with fast, friendly service.
            </Typography>
          </Box>
        </Slide>

        {/* Services Grid */}
        <Grid container spacing={3} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={service.label}>
              <Fade in={cardsVisible} timeout={1000 + index * 150}>
                <Card
                  elevation={4}
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    border: '2px solid transparent',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    transform: cardsVisible ? 'translateY(0)' : 'translateY(20px)',
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.02)',
                      boxShadow: `0 12px 24px rgba(${theme.palette.primary.main.replace('#', '').match(/.{2}/g).map(hex => parseInt(hex, 16)).join(', ')}, 0.2)`,
                      borderColor: 'primary.main',
                    }
                  }}
                >
                  <CardContent 
                    sx={{ 
                      p: 3, 
                      textAlign: 'center',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Box>
                      <Box 
                        sx={{ 
                          mb: 2,
                          p: 2,
                          borderRadius: '50%',
                          backgroundColor: 'rgba(178, 34, 52, 0.1)',
                          display: 'inline-flex',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'primary.main',
                            '& svg': {
                              color: 'white !important',
                              transform: 'scale(1.1)'
                            }
                          }
                        }}
                      >
                        {service.icon}
                      </Box>
                      
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        color="primary.main"
                        gutterBottom
                        sx={{ fontSize: '1.1rem' }}
                      >
                        {service.label}
                      </Typography>
                      
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ lineHeight: 1.5 }}
                      >
                        {service.description}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Fade in={cardsVisible} timeout={2000}>
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Paper
              elevation={2}
              sx={{
                p: 4,
                backgroundColor: 'primary.main',
                color: 'white',
                borderRadius: 3,
                maxWidth: 600,
                mx: 'auto',
                '&:hover': {
                  transform: 'scale(1.02)',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Need Quick Service?
              </Typography>
              <Typography variant="body1">
                Walk-ins welcome! Most services completed while you wait.
              </Typography>
            </Paper>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}
