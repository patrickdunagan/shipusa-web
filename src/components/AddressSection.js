import { useState } from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  useMediaQuery,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { palette } from "@/styles/palette";
import { useTheme } from "@mui/material/styles";

const address = "3033 NW 178th St, Suite B, Edmond, OK 73012";
const encodedAddress = encodeURIComponent(address);

export default function AddressSection() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: palette.primary.accentBlue,
          color: "white",
          px: 3,
          py: 1,
          flexWrap: "wrap",
          rowGap: 1,
          cursor: "pointer",
        }}
        onClick={handleOpen}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <LocationOnIcon fontSize="small" />
          <Typography variant="subtitle1" fontWeight="bold" noWrap fontSize={isMobile ? "0.75rem" : "1rem"}>
            {address}
          </Typography>
        </Box>

        <Box
          sx={{
            display: {
              xs: 'none', // hidden on extra-small screens (mobile)
              sm: 'flex', // shown on small and up
            },
            flexWrap: 'wrap',
            gap: 2,
            alignItems: 'center',
          }}
        >

          <Typography variant="subtitle1" fontWeight="bold">
            Open Hours:
          </Typography>
          <Typography variant="body2">Mon–Fri: 8 AM – 7 PM</Typography>
          <Typography variant="body2">|</Typography>
          <Typography variant="body2">Sat: 8 AM – 2 PM</Typography>
          <Typography variant="body2">|</Typography>
          <Typography variant="body2">Sun: 9 AM – 2 PM</Typography>
        </Box>



      </Box>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
        <DialogTitle sx={{ textAlign: "center" }}>
          Get Directions
        </DialogTitle>
        <DialogActions sx={{ flexDirection: "column", gap: 1, pb: 2 }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            href={`http://maps.apple.com/?daddr=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Apple Maps
          </Button>
          <Button fullWidth onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
