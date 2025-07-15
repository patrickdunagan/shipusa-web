import { Box, Container, Typography, Grid } from '@mui/material';
import PageLayout from '@/components/PageLayout';
import { palette } from '@/styles/palette';

export default function AboutUs() {
  return (
    <PageLayout>
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
        {/* Intro Section */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" fontWeight="bold" color={palette.primary.main} gutterBottom>
            About ShipUSA
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Your Neighborhood Shipping & Business Center
          </Typography>
        </Box>

        {/* Story Section */}
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

        {/* Services Highlights */}
        <Grid container spacing={6} alignItems="center" mb={6}>
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              More Than Just Shipping
            </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
  {"At ShipUSA, we provide a full suite of business and personal services including:"}
</Typography>

<Box component="ul" sx={{ pl: 3, mb: 2 }}>
  <li>Private and Digital Mailboxes</li>
  <li>Copies, Faxing, and Notary Public</li>
  <li>Document and Media Shredding</li>
  <li>Fingerprinting and Passport Photos</li>
</Box>

<Typography variant="body1" color="text.secondary">
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
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>

        {/* UHaul Section */}
        <Grid container spacing={6} alignItems="center">
         
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {"An Authorized U-Haul Dealer"}
            </Typography>
            <Typography variant="body1" color="text.secondary">
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
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
    </PageLayout>
  );
}
