import { Box, Grid, Typography, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import PrintIcon from '@mui/icons-material/Print';
import FaxIcon from '@mui/icons-material/SendToMobile'; // Used as a visual metaphor for fax

export default function PersonalServicesSection() {
  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: '#f5f5f5' }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom color="primary.main">
              Personal Services
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              ShipUSA provides fast and professional services to support your everyday needs:
            </Typography>

            <List dense>
              <ListItem>
                <ListItemIcon><CameraAltIcon color="primary" /></ListItemIcon>
                <ListItemText primary="Passport Photos" />
              </ListItem>
              <ListItem>
                <ListItemIcon><FingerprintIcon color="primary" /></ListItemIcon>
                <ListItemText primary="Fingerprinting" />
              </ListItem>
              <ListItem>
                <ListItemIcon><PrintIcon color="primary" /></ListItemIcon>
                <ListItemText primary="Copies" />
              </ListItem>
              <ListItem>
                <ListItemIcon><FaxIcon color="primary" /></ListItemIcon>
                <ListItemText primary="Faxing Services" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
