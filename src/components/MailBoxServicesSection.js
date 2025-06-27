import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PrintIcon from '@mui/icons-material/Print';
import GavelIcon from '@mui/icons-material/Gavel';
import DeleteIcon from '@mui/icons-material/Delete';

export default function MailboxServicesSection() {
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
          background: 'rgba(0, 0, 0, 0.4)', // subtle dark overlay
          zIndex: 1,
        },
      }}
    >
      <Paper
        elevation={6}
        sx={{
          position: 'relative',
          zIndex: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(8px)',
          p: 4,
          maxWidth: 600,
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom color="primary.main">
          Mailbox & Business Services
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          ShipUSA offers secure, reliable, and convenient services for individuals and businesses:
        </Typography>

        <List dense>
          <ListItem>
            <ListItemIcon><MailOutlineIcon color="primary" /></ListItemIcon>
            <ListItemText primary="Private Mailboxes" />
          </ListItem>
          <ListItem>
            <ListItemIcon><MailOutlineIcon color="primary" /></ListItemIcon>
            <ListItemText primary="Digital Mailboxes" />
          </ListItem>
          <ListItem>
            <ListItemIcon><PrintIcon color="primary" /></ListItemIcon>
            <ListItemText primary="Copies & Faxing" />
          </ListItem>
          <ListItem>
            <ListItemIcon><GavelIcon color="primary" /></ListItemIcon>
            <ListItemText primary="Notary Public" />
          </ListItem>
          <ListItem>
            <ListItemIcon><DeleteIcon color="primary" /></ListItemIcon>
            <ListItemText primary="Shredding (Paper, CDs, Digital Media)" />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
}
