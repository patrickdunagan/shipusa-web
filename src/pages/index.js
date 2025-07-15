import PageLayout from "@/components/PageLayout";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import ShippingPartners from "@/components/ShippingPartners";
import AmazonDropOffSection from "@/components/AmazonDropOffSection";
import UhaulSection from "@/components/UhaulSection";
import MailBoxServicesSection from "@/components/MailBoxServicesSection";
import PersonalServicesSection from "@/components/PersonalServicesSection";
import Image from "next/image";
import { palette } from "@/styles/palette";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddressSection from "@/components/AddressSection";

export default function Home() {
  return (
    <PageLayout>
      <AddressSection />
      <TopHomeContent />
      
      <ShippingPartners />
      <UhaulSection />
      <PersonalServicesSection />
      <MailBoxServicesSection />
      
      <AmazonDropOffSection />
      <ThunderSupportBanner />
    </PageLayout>
  );
}


function ThunderSupportBanner() {
  return (
    <Box
      sx={{
        backgroundColor: '#002D62', // Thunder navy blue
        color: 'white',
        textAlign: 'center',
        py: 2,
        px: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      <Image
        src="/assets/logos/okc.jpg"
        alt="OKC Thunder Logo"
        width={80}
        height={80}
        style={{ objectFit: 'contain', borderRadius: '5px' }}
        
      />
      <Typography variant="h6" fontWeight="bold">
        Proud Supporters of the OKC Thunder
      </Typography>
    </Box>
  );
}


function TopHomeContent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: 400, sm: 500 },
        backgroundImage: 'url(/assets/stock-main-image.jpg)',
        backgroundSize: "cover",
        backgroundPosition: "center left",
        color: "white",
        px: { xs: 2, sm: 4 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        filter: 'brightness(1.2)', // makes image ~20% brighter
      }}
    >

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          gap: 4,
        }}
      >
        {/* Text Box */}
        <Box
          sx={{
            maxWidth: 600,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            p: { xs: 2, sm: 4 },
            borderRadius: 2,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Image
            src="/assets/logos/shipusa-red-transparent.png"
            alt="ShipUSA Logo"
            width={isMobile ? 200 : 300}
            height={isMobile ? 200 : 300}
            style={{ objectFit: "contain", marginBottom: 24 }}
          />


          <Typography
            variant="body1"
            sx={{
              fontSize: isMobile ? "1rem" : "1.25rem",
              textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
            }}
          >
            At Ship USA, we’re more than a shipping center — we’re your neighbors. Whether you’re dropping off an Amazon return, renting a U-Haul, or just stopping by for notary or mailbox services, you’ll always find a warm welcome here in the heart of the community.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

