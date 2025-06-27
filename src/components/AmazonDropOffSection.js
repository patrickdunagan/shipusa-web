import { Box, Container, Typography, Grid, Button, useTheme } from "@mui/material";
import Image from "next/image";

export default function AmazonDropOffSection() {
  const theme = useTheme();

  return (
    <Box sx={{ py: 8, bgcolor: "white" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Amazon Image */}
          <Grid item xs={12} md={5} textAlign="center">
            <Image
              src="/assets/logos/amazon-logo.png" // replace with your actual path
              alt="Amazon Logo"
              width={200}
              height={60}
              style={{ objectFit: "contain" }}
            />
          </Grid>

          {/* Text Content */}
          <Grid item xs={12} md={7}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1, color: theme.palette.primary.accentBlue }}>
              Authorized Amazon Drop-Off Location
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              ShipUSA & More is an official Amazon Hub drop-off site. Drop off your Amazon returns with ease — no box or label needed on eligible returns!
            </Typography>
            <Typography variant="body2" sx={{ mb: 3 }}>
              Fast. Convenient. Hassle-free. Just bring in your item and we'll handle the rest.
            </Typography>
            <Button
              variant="contained"
              sx={{ bgcolor: theme.palette.primary.accentBlue, color: "white", fontWeight: "bold" }}
              href="https://www.amazon.com/returns" // optional
              target="_blank"
              rel="noopener noreferrer"
            >
              Start an Amazon Return
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
