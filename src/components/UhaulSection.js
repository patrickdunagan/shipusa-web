import { Box, Typography, Container, Button, Paper } from "@mui/material";
import { palette } from "@/styles/palette";

export default function UHaulSection() {
  return (
    <Box
      sx={{
        backgroundImage: 'url(/assets/stock-uhaul.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '65vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(255, 255, 255, 0.25)', // Brightens the image
          mixBlendMode: 'lighten',
          zIndex: 1,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.3)', // Adds a soft dark base layer
          zIndex: 2,
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 3 }}>
        <Paper
          elevation={6}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(8px)',
            borderRadius: 3,
            p: 4,
            textAlign: 'center',
            animation: 'fadeInUp 1s ease-out',
          }}
        >
          <Typography variant="h4" fontWeight="bold" color={palette.primary.main} gutterBottom>
            Authorized U-Haul Dealer
          </Typography>
          <Typography variant="body1" color="text.primary" sx={{ mb: 3 }}>
            ShipUSA is proud to offer trusted U-Haul truck rentals for all your local and long-distance moving needs.
            Get the support and vehicle options you need to make your move simple and smooth.
          </Typography>
          <Button variant="contained" sx={{ color: palette.primary.main, backgroundColor: palette.primary.contrastText }} href="/uhaul" size="large">
            Reserve a U-Haul
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}
