import PageLayout from "@/components/PageLayout";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import ShippingPartners from "@/components/ShippingPartners";
import AmazonDropOffSection from "@/components/AmazonDropOffSection";
import UhaulSection from "@/components/UhaulSection";
import MailBoxServicesSection from "@/components/MailBoxServicesSection";
import PersonalServicesSection from "@/components/PersonalServicesSection";

export default function Home() {

  return (
    <PageLayout>
      <TopHomeContent />
      <ShippingPartners />
      
      <UhaulSection />
      <AmazonDropOffSection />
      <MailBoxServicesSection />
      <PersonalServicesSection />
    </PageLayout>
  );
}

function TopHomeContent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        backgroundImage: 'url(/assets/stock-main-image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        px: 4,
        color: 'white',
        position: 'relative',
        filter: 'brightness(1.15)', // increases brightness
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          background: 'rgba(0, 0, 0, 0.25)', // slightly dark but less harsh
          zIndex: 1,
        },
      }}
    >

      <Box
        sx={{
          zIndex: 2,
          maxWidth: 600,
          backgroundColor: 'rgba(0,0,0,0.5)',
          p: 4,
          borderRadius: 2,
          textAlign: 'left',
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h2"}
          component={isMobile ? "h4" : "h2"}
          gutterBottom
          sx={{
            fontWeight: 'bold',
            textShadow: '2px 2px 6px rgba(0,0,0,0.7)',
          }}
        >
          Welcome to ShipUSA & More
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            mb: 2,
            fontStyle: 'italic',
            textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
          }}
        >
          Delivering Trust
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textShadow: '1px 1px 3px rgba(0,0,0,0.6)',
          }}
        >
          From shipping and Amazon returns to notary services, mailboxes, and U-Haul rentals — we make business and moving easier.
          Count on us for fast, friendly, and dependable service, all under one roof.
        </Typography>
      </Box>
    </Box>
  );
}
