import {
  Box,
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import FaxIcon from '@mui/icons-material/Print';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import WallpaperIcon from '@mui/icons-material/Wallpaper'; // For banners
import SignpostIcon from '@mui/icons-material/Signpost'; // For signs
import MailOutlineIcon from '@mui/icons-material/MailOutline'; // For postcards
import { palette } from '../styles/palette';

export default function PersonalServicesSection() {
  const services = [
    { icon: <PhotoCameraFrontIcon color={palette.primary.main} />, label: 'Passport Photos' },
    { icon: <VerifiedUserIcon color={palette.primary.main} />, label: 'Fingerprinting' },
    { icon: <LocalPrintshopIcon color={palette.primary.main} />, label: 'Copies' },
    { icon: <FaxIcon color={palette.primary.main} />, label: 'Faxing Services' },
    { icon: <BusinessCenterIcon color={palette.primary.main} />, label: 'Business Cards' },
    { icon: <WallpaperIcon color={palette.primary.main} />, label: 'Banners' },
    { icon: <SignpostIcon color={palette.primary.main} />, label: 'Signs' },
    { icon: <MailOutlineIcon color={palette.primary.main} />, label: 'Postcards' },
  ];

  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: '#f5f5f5' }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 2,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.01)',
              },
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              color={palette.primary.main}
              sx={{
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: 'red',
                  cursor: 'pointer',
                },
              }}
            >
              Personal Services
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              ShipUSA provides fast and professional services to support your everyday needs:
            </Typography>

            <List disablePadding>
              {services.map(({ icon, label }) => (
                <ListItem
                  key={label}
                  sx={{
                    px: 0,
                    py: 1,
                    transition: 'background-color 0.2s ease',
                    '&:hover': {
                      backgroundColor: '#e8f0fe',
                      borderRadius: 1,
                    },
                  }}
                >
                  <ListItemIcon sx={{color: palette.primary.main}}>{icon}</ListItemIcon>
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{ fontWeight: 500 }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
