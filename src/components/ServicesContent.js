import { Box, Container, Typography, Grid, Paper } from "@mui/material";

export default function ServicesContent() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Welcome to ShipUSA
      </Typography>
      <Typography variant="h6" align="center" paragraph>
        Your trusted partner for fast, reliable, and professional shipping and business support services — all in one convenient location.
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {/* Shipping Carriers */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Shipping & Drop-Off Services
            </Typography>
            <Typography>
              We proudly partner with all major carriers:
            </Typography>
            <ul>
              <li>FedEx</li>
              <li>UPS</li>
              <li>DHL</li>
              <li>USPS</li>
              <li>Amazon Drop-Off & Amazon Hub</li>
            </ul>
          </Paper>
        </Grid>

        {/* U-Haul & Moving Supplies */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              U-Haul Rentals & Moving Supplies
            </Typography>
            <Typography>
              As an authorized neighborhood U-Haul dealer, we offer:
            </Typography>
            <ul>
              <li>Truck and trailer rentals</li>
              <li>Moving equipment (dollies, blankets, etc.)</li>
              <li>Boxes, tape, and packing materials</li>
            </ul>
          </Paper>
        </Grid>

        {/* Mailbox & Office Services */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Mailbox & Business Services
            </Typography>
            <ul>
              <li>Private Mailboxes</li>
              <li>Digital Mailboxes</li>
              <li>Copies & Faxing</li>
              <li>Notary Public</li>
              <li>Shredding (paper, CDs, digital media)</li>
            </ul>
          </Paper>
        </Grid>

        {/* IDs & Personal Services */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Identification & Document Services
            </Typography>
            <ul>
              <li>Passport Photos</li>
              <li>Fingerprinting</li>
            </ul>
          </Paper>
        </Grid>

        {/* Dog Friendly Note */}
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h6">🐾 We’re Dog Friendly!</Typography>
            <Typography>Bring your pup along while you ship or pick up your items.</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
