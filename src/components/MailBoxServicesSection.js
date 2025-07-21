import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  Fade,
  Slide,
  useTheme,
  Container,
  Chip,
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PrintIcon from '@mui/icons-material/LocalPrintshop';
import GavelIcon from '@mui/icons-material/Gavel';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import BusinessIcon from '@mui/icons-material/Business';
import SecurityIcon from '@mui/icons-material/Security';
import { useState, useEffect } from 'react';

export default function MailboxServicesSection() {
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
      icon: <MailOutlineIcon sx={{ color: 'primary.main', fontSize: 40 }} />, 
      label: 'Private Mailboxes',
      description: 'Secure personal & business mailbox rentals'
    },
    { 
      icon: <MarkEmailUnreadIcon sx={{ color: 'primary.main', fontSize: 40 }} />, 
      label: 'Digital Mailboxes',
      description: 'Virtual mail scanning & digital delivery'
    },
    { 
      icon: <PrintIcon sx={{ color: 'primary.main', fontSize: 40 }} />, 
      label: 'Copies & Faxing',
      description: 'Professional copying & fax services'
    },
    { 
      icon: <GavelIcon sx={{ color: 'primary.main', fontSize: 40 }} />, 
      label: 'Notary Public',
      description: 'Certified notary services available'
    },
    { 
      icon: <DeleteSweepIcon sx={{ color: 'primary.main', fontSize: 40 }} />, 
      label: 'Secure Shredding',
      description: 'Paper, CD & digital media destruction'
    },
    { 
      icon: <BusinessIcon sx={{ color: 'primary.main', fontSize: 40 }} />, 
      label: 'Business Address',
      description: 'Professional business address service'
    },
  ];

 

  return (
    <Box sx={{ py: 8, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Slide direction="up" in={visible} timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              label="Business & Communication Services"
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
              Professional Mailbox & Business Solutions
            </Typography>
            
            <Typography 
              variant="h6" 
              color="text.secondary" 
              sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}
            >
              Secure mailboxes, notary services, and business support to keep your personal and professional life organized.
            </Typography>
          </Box>
        </Slide>

        {/* Services Grid */}
        <Grid container spacing={3} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={service.label}>
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

        {/* Features Section */}
        <Fade in={cardsVisible} timeout={2000}>
          <Box sx={{ mt: 6 }}>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 4,
                    backgroundColor: 'primary.main',
                    color: 'white',
                    borderRadius: 3,
                    '&:hover': {
                      transform: 'scale(1.02)',
                      transition: 'all 0.3s ease'
                    }
                  }}
                >
                  <SecurityIcon sx={{ fontSize: 40, mb: 2 }} />
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Secure & Private
                  </Typography>
                  <Typography variant="body1">
                    Your mail and packages are safe with us. Professional handling with 24/7 secure access to your mailbox.
                  </Typography>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 4,
                    backgroundColor: 'grey.100',
                    borderRadius: 3,
                    border: '2px solid',
                    borderColor: 'primary.main',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      transition: 'all 0.3s ease'
                    }
                  }}
                >
                  <BusinessIcon sx={{ fontSize: 40, mb: 2, color: 'primary.main' }} />
                  <Typography variant="h5" fontWeight="bold" gutterBottom color="primary.main">
                    Business Ready
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Establish a professional presence with our business address services and notary support.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}
