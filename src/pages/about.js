import { Box, Container, Typography, Grid, Chip, Fade, Slide, Paper, useTheme } from '@mui/material';
import PageLayout from '@/components/PageLayout';
import { useState, useEffect } from 'react';

export default function AboutUs() {
  const theme = useTheme();
  const [visible, setVisible] = useState(false);
  const [sectionsVisible, setSectionsVisible] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setVisible(true), 200);
    const timer2 = setTimeout(() => setSectionsVisible(true), 800);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);
  return (
    <PageLayout>
      <Box sx={{ py: 8, backgroundColor: 'grey.50' }}>
        <Container maxWidth="lg">
        {/* Intro Section */}
        <Slide direction="up" in={visible} timeout={1000}>
          <Box textAlign="center" mb={8}>
            <Chip
              label="About Our Company"
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
              About Ship USA
            </Typography>
            
            <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}>
              Your Neighborhood Shipping & Business Center
            </Typography>
          </Box>
        </Slide>

        {/* Story Section */}
        <Fade in={sectionsVisible} timeout={1000}>
          <Grid container spacing={6} alignItems="center" mb={6}>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Built to Serve the Community
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {"ShipUSA was founded with a simple mission: to offer trusted, local service with the reliability of national carriers. Whether you're shipping across town or across the country, we treat every package like it's our own."}
              <br /><br />
              {"As an authorized U-Haul and USPS partner, and a recognized drop-off location for Amazon, FedEx, UPS, and DHL — we’ve become the go-to spot for personal and business shipping needs in the area."}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/assets/stock-flag.jpg"
              alt="Our store front"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>
        </Fade>

        {/* Services Highlights */}
        <Fade in={sectionsVisible} timeout={1500}>
          <Paper
            elevation={4}
            sx={{
              p: 5,
              mb: 6,
              borderRadius: 3,
              border: '2px solid transparent',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: 'primary.main',
                transform: 'translateY(-4px)',
              }
            }}
          >
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom color="primary.main">
                  More Than Just Shipping
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.7, mb: 3 }}>
                  {"At ShipUSA & More, we provide a full suite of business and personal services including:"}
                </Typography>

                <Box component="ul" sx={{ pl: 3, mb: 3, '& li': { mb: 1, fontSize: '1.1rem', color: 'text.secondary' } }}>
                  <li>Private and Digital Mailboxes</li>
                  <li>Copies, Faxing, and Notary Public</li>
                  <li>Document and Media Shredding</li>
                  <li>Fingerprinting and Passport Photos</li>
                </Box>

                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                  {"We believe in going beyond transactions — we aim to be a resource, a partner, and a friendly face you can rely on."}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                <Box
                  component="img"
                  src="/assets/stock-mail-box.jpg"
                  alt="Mailbox and personal services"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 3,
                    boxShadow: 4,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.02)'
                    }
                  }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Fade>

        {/* UHaul Section */}
        <Fade in={sectionsVisible} timeout={2000}>
          <Paper
            elevation={4}
            sx={{
              p: 5,
              borderRadius: 3,
              border: '2px solid transparent',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: 'primary.main',
                transform: 'translateY(-4px)',
              }
            }}
          >
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h4" fontWeight="bold" gutterBottom color="primary.main">
                  {"An Authorized U-Haul Dealer"}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                  {"Whether you're moving across town or across the country, our U-Haul truck rentals are here to make the process smoother. We offer various vehicle sizes and rental plans to match your needs, backed by reliable service from a local team you can trust."}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src="/assets/stock-uhaul.jpg"
                  alt="Authorized U-Haul Dealer"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 3,
                    boxShadow: 4,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.02)'
                    }
                  }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Fade>
      </Container>
    </Box>
    </PageLayout>
  );
}
