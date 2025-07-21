import { Box, Typography, Container, Button, Paper, Chip, Fade, Slide } from "@mui/material";
import { LocalShipping, Star, AccessTime, Verified } from "@mui/icons-material";
import { theme } from "@/styles/theme";
import { useState, useEffect } from "react";

export default function UHaulSection() {
  const [visible, setVisible] = useState(false);
  const [chipVisible, setChipVisible] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setVisible(true), 300);
    const timer2 = setTimeout(() => setChipVisible(true), 800);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);
  return (
    <Box
      sx={{
        backgroundImage: 'url(/assets/stock-uhaul.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '75vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(255, 111, 45, 0.1) 0%, rgba(0, 0, 0, 0.2) 100%)', // U-Haul orange tint
          zIndex: 1,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.4)', // Ensures text readability
          zIndex: 2,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
        {/* Top promotional badges */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Fade in={chipVisible} timeout={1000}>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Chip 
                icon={<Star color="primary.main" />}
                label="Authorized Dealer" 
                sx={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  fontWeight: 'bold',
                  color: 'primary.main',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  animation: 'pulse 2s infinite'
                }} 
              />
              <Chip 
                icon={<AccessTime color={theme.palette.primary.accentBlue} />}
                label="Same Day Pickup" 
                sx={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  fontWeight: 'bold',
                  color: 'primary.main',
                  border: '2px solid',
                  borderColor: 'primary.main'
                }} 
              />
              <Chip 
                icon={<Verified color={theme.palette.primary.accentBlue} />}
                label="Trusted Service" 
                sx={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  fontWeight: 'bold',
                  color: theme.palette.primary.main,
                  border: '2px solid',
                  borderColor: 'primary.main'
                }} 
              />
            </Box>
          </Fade>
        </Box>

        <Slide direction="up" in={visible} timeout={1000}>
          <Paper
            elevation={8}
            sx={{
              
              backdropFilter: 'blur(12px)',
              borderRadius: 4,
              p: { xs: 2, md: 3 },
              textAlign: 'center',
              border: '3px solid',
              borderColor: 'primary.main',
              boxShadow: '0 20px 40px rgba(255, 111, 45, 0.2)',
              transform: visible ? 'translateY(0)' : 'translateY(50px)',
              transition: 'all 0.8s ease-out',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 25px 50px rgba(255, 111, 45, 0.3)',
                transition: 'all 0.3s ease'
              }
            }}
          >
            {/* Main Content */}
            <Box sx={{ position: 'relative' }}>
              {/* <LocalShipping 
                sx={{ 
                  fontSize: 60, 
                  color: 'primary.main', 
                  mb: 2,
                  animation: 'bounce 2s infinite',
                  '@keyframes bounce': {
                    '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
                    '40%': { transform: 'translateY(-10px)' },
                    '60%': { transform: 'translateY(-5px)' }
                  }
                }} 
              /> */}
              <Box display="flex" justifyContent="center" sx={{ my:3}}>
              <img src="/assets/logos/uhaul.jpg" alt="U-Haul Logo"
                style={{
                  width: '100%',
                  maxWidth: 300,
                }}
              />
              </Box>
              <Typography 
                variant="h3" 
                fontWeight="bold" 
                sx={{
                  pb: 2,
                  color: theme.palette.primary.accentBlue,
                  background: 'linear-gradient(45deg, primary.main 90%, primary.light 90%)',
                  backgroundClip: 'text',
                }}
              >
                Move with Confidence
              </Typography>
              
              <Typography 
                variant="h5" 
                fontWeight="600" 
                color="primary.main" 
                sx={{ mb: 1 }}
              >
                Authorized U-Haul Dealer
              </Typography>
              
              <Typography 
                variant="body1" 
                color="text.primary" 
                sx={{ 
                  mb: 4, 
                  fontSize: '1.1rem', 
                  lineHeight: 1.6,
                  maxWidth: 600,
                  mx: 'auto'
                }}
              >
                Reserve your U-Haul truck, trailer, or moving supplies right here at ShipUSA & More. 
                From pickup trucks to 26-foot moving trucks, we've got the perfect vehicle for your move. 
                <strong> Same-day pickup available!</strong>
              </Typography>

              {/* Features Row */}
              <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  gap: { xs: 1, md: 3 }, 
                  mb: 4,
                  flexWrap: 'wrap'
                }}
              >
                {['Local Moves', 'Long Distance', 'Moving Supplies', '24/7 Support'].map((feature, index) => (
                  <Fade key={feature} in={visible} timeout={1500 + index * 200}>
                    <Typography
                      variant="body2"
                      sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        fontWeight: 'bold',
                        fontSize: '0.9rem',
                        
                        boxShadow: '0 4px 8px rgba(255, 111, 45, 0.3)'
                      }}
                    >
                      {feature}
                    </Typography>
                  </Fade>
                ))}
              </Box>

              <Button 
                variant="contained"
                size="large"
                sx={{ 
                  backgroundColor: 'primary.main',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  borderRadius: 3,
                  textTransform: 'none',
                  boxShadow: '0 8px 16px rgba(255, 111, 45, 0.4)',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 24px rgba(255, 111, 45, 0.5)',
                  },
                  transition: 'all 0.3s ease'
                }}
                href="/uhaul"
              >
                🚛 Reserve Your U-Haul Now
              </Button>
            </Box>
          </Paper>
        </Slide>

        {/* Add keyframe animations */}
        <style jsx>{`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
        `}</style>
      </Container>
    </Box>
  );
}
