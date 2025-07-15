import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";
import { palette } from "@/styles/palette";

const carriers = [
  { label: "USPS", value: "usps" },
  { label: "UPS", value: "ups" },
  { label: "FedEx", value: "fedex" },
];

const getTrackingUrl = (carrier, trackingNumber) => {
  switch (carrier) {
    case "usps":
      return `https://tools.usps.com/go/TrackConfirmAction?tLabels=${trackingNumber}`;
    case "ups":
      return `https://www.ups.com/track?tracknum=${trackingNumber}`;
    case "fedex":
      return `https://www.fedex.com/fedextrack/?tracknumbers=${trackingNumber}`;
    default:
      return "#";
  }
};

export default function TrackingNumberForm() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [carrier, setCarrier] = useState("usps");

  const handleTrack = () => {
    if (trackingNumber.trim()) {
      const url = getTrackingUrl(carrier, trackingNumber.trim());
      window.open(url, "_blank");
    }
  };

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 2,
        backgroundColor: "rgba(255,255,255,0.9)",
        maxWidth: 500,
        mx: "auto",
        mt: 6,
        textAlign: "center",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Track Your Package
      </Typography>
      <TextField
        fullWidth
        label="Tracking Number"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <TextField
        select
        fullWidth
        label="Carrier"
        value={carrier}
        onChange={(e) => setCarrier(e.target.value)}
        variant="outlined"
        sx={{ mb: 2 }}
      >
        {carriers.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button
        variant="contained"
        fullWidth
        onClick={handleTrack}
        disabled={!trackingNumber.trim()}
        sx={{
          backgroundColor: palette.primary.main,
          color: palette.primary.contrastText,
          "&:hover": {
            backgroundColor: palette.primary.dark,
          },
        }}
      >
        Track Package
      </Button>
    </Box>
  );
}
