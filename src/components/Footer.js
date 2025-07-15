import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Grid, Stack, Link, Box, Typography, Container } from '@mui/material';
import { palette } from '../styles/palette';

export default function Footer() {
    return (
        < Box
            component="footer"
            sx={{
                backgroundColor: '#B22234',
                color: 'white',
                px: 4,
                py: 4,
                mt: 8
            }
            }
        >
            <Container maxWidth="lg">
            <Grid container spacing={4} justifyContent="space-between">
              

                {/* Services */}
                <Grid item xs={12} sm={4} sx={{cursor: 'pointer'}} onClick={() => window.location.href = '/services'}>
                    <Typography variant="h6" gutterBottom>Services</Typography>
                    <Stack spacing={0.5}>
                        <Typography variant="body2">Shipping & Drop-Offs</Typography>
                        <Typography variant="body2">U-Haul Rentals</Typography>
                        <Typography variant="body2">Private & Digital Mailboxes</Typography>
                        <Typography variant="body2">Copies, Faxing, Notary</Typography>
                        <Typography variant="body2">Shredding & Fingerprinting</Typography>
                        <Typography variant="body2">Passport Photos</Typography>
                    </Stack>
                </Grid>

                {/* Social Media */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" gutterBottom>Connect</Typography>
                    <Stack direction="row" spacing={2} alignItems="center" mt={1}>
                        <Link href="https://www.facebook.com/profile.php?id=61577812707146" target="_blank" rel="noopener" color="inherit">
                            <FacebookIcon fontSize="large" />
                        </Link>
                        <Link href="https://instagram.com/shipusaedmond" target="_blank" rel="noopener" color="inherit">
                            <InstagramIcon fontSize="large" />
                        </Link>
                    </Stack>
                </Grid>
                  {/* Location / Hours */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" gutterBottom>Visit Us</Typography>
                    <Typography variant="body2">
                        3033 NW 178th St, Suite B<br />
                        Edmond, OK 73012
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                        <strong>Hours:</strong><br />
                        Mon–Fri: 9am–6pm<br />
                        Sat: 10am–2pm<br />
                        Sun: Closed
                    </Typography>
                </Grid>
            </Grid>

            

            <Typography variant="body2" align="center" sx={{mt:2}}>
                &copy; {new Date().getFullYear()} ShipUSA. All rights reserved.
            </Typography>
            </Container>
        </Box >
    )
}
