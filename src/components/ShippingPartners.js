import { Box, Container, Typography, Grid, useTheme } from "@mui/material";
import Image from "next/image";
import TrackingNumberForm from "@/components/TrackingNumberForm";

export default function ShippingPartners() {
  const theme = useTheme();

  return (
    <Box sx={{ py: 6, bgcolor: "#f5f5f5" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: theme.palette.primary.accentBlue }}
        >
          Authorized Shipping Partners
        </Typography>

        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          {"We proudly partner with the world's most trusted carriers."}
        </Typography>

        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {[
            { src: "/assets/logos/fed-ex-logo.png", alt: "FedEx" },
            { src: "/assets/logos/ups-logo.png", alt: "UPS" },
            { src: "/assets/logos/usps-logo.png", alt: "USPS" },
            { src: "/assets/logos/dhl-logo.jpg", alt: "DHL" },
          ].map((logo, idx) => (
            <Grid item xs={6} sm={3} key={idx} textAlign="center">
              <Image
                src={logo.src}
                alt={`${logo.alt} Logo`}
                width={120}
                height={60}
                style={{ objectFit: "contain", filter: "grayscale(0.2)" }}
              />
            </Grid>
          ))}
        </Grid>
        <TrackingNumberForm />
      </Container>
    </Box>
  );
}
