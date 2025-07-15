import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Grid,
  Fade,
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PrintIcon from '@mui/icons-material/LocalPrintshop';
import GavelIcon from '@mui/icons-material/Gavel';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import StarIcon from '@mui/icons-material/Star';
import BusinessIcon from '@mui/icons-material/Business';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SecurityIcon from '@mui/icons-material/Security';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useEffect, useState } from 'react';
import { palette } from '@/styles/palette';

export default function MailboxServicesSection() {
  const services = [
    { icon: <MailOutlineIcon sx={{ color: palette.primary.main }} />, label: 'Private Mailboxes' },
    { icon: <MarkEmailUnreadIcon sx={{ color: palette.primary.main }} />, label: 'Digital Mailboxes' },
    { icon: <PrintIcon sx={{ color: palette.primary.main }} />, label: 'Copies & Faxing' },
    { icon: <GavelIcon sx={{ color: palette.primary.main }} />, label: 'Notary Public' },
    { icon: <DeleteSweepIcon sx={{ color: palette.primary.main }} />, label: 'Shredding (Paper, CDs, Digital Media)' },
  ];

  const reasonLists = [
    [
      { icon: <SecurityIcon color="primary" />, text: 'Secure, private mail handling' },
      { icon: <LocalShippingIcon color="primary" />, text: 'Convenient package pickup and drop-off' },
      { icon: <AccessTimeIcon color="primary" />, text: '24/7 access to your mailbox' },
      { icon: <BusinessIcon color="primary" />, text: 'Professional business address for your company' },
      { icon: <MailOutlineIcon color="primary" />, text: 'Reliable mail forwarding options' },
    ],
    [
      { icon: <StarIcon color="primary" />, text: 'Keep personal addresses private' },
      { icon: <BusinessIcon color="primary" />, text: 'Create a local business presence' },
      { icon: <AccessTimeIcon color="primary" />, text: 'Extended pickup hours' },
      { icon: <MarkEmailUnreadIcon color="primary" />, text: 'Get email alerts for new mail' },
      { icon: <SecurityIcon color="primary" />, text: 'Staff receive and sign for packages' },
    ],
  ];

  const [reasonIndex, setReasonIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

 

  return (
    <Box
      sx={{
        backgroundImage: 'url(/assets/stock-mail-box.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '70vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        py: 8,
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        },
      }}
    >
      <Grid container justifyContent="center" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid item xs={12} md={8}>
          <Paper
            elevation={6}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(8px)',
              p: 4,
              borderRadius: 3,
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
              Mailbox & Business Services
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              ShipUSA offers secure, reliable, and convenient services for individuals and businesses:
            </Typography>

            <List disablePadding sx={{ mb: 3 }}>
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
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={label} primaryTypographyProps={{ fontWeight: 500 }} />
                </ListItem>
              ))}
            </List>

      
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
