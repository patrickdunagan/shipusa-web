import React, { useState } from "react";
import Image from "next/image";
import {
    AppBar,
    Box,
    Button,
    Drawer,
    IconButton,
    Toolbar,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Divider,
    useScrollTrigger,
    Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { palette } from "../styles/palette";
import Footer from "./Footer";

// ElevationScroll Component
function ElevationScroll({ children, window }) {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

export default function PageLayout({ children }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const menuItems = ["Home", "About", "Services", "Contact"];

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ width: 250 }}>
            <Typography variant="h6" sx={{ m: 2, color: palette.primary.accentBlue }}>
                ShipUSA
            </Typography>
            <Divider />
            <List>
                {menuItems.map((label) => (
                    <ListItem key={label} disablePadding>
                        <ListItemButton
                            onClick={() =>
                                (window.location.href = `/${label === "Home" ? "" : label.toLowerCase()}`)
                            }
                        >
                            <ListItemText primary={label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box
            sx={{
                minHeight: "100vh",
                bgcolor: "white",
                color: "black",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* TOP INFO BAR */}


            {/* NAVBAR with Elevation Scroll */}
            <ElevationScroll window={typeof window !== "undefined" ? () => window : undefined}>
                <AppBar position="fixed" sx={{ bgcolor: "white", color: "black" }}>
                    <Toolbar sx={{ justifyContent: "space-between" }}>
                        {/* Logo & Brand */}
                        <Box display="flex" alignItems="center" gap={1}>
                            {/* <Image src="/assets/logo.jpg" alt="ShipUSA Logo" width={40} height={40} /> */}
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{ fontWeight: "bold", fontStyle: "italic", color: palette.primary.accentBlue }}
                            >
                                ShipUSA
                            </Typography>
                        </Box>

                        {/* Navigation Buttons (Desktop) */}
                        <Box display={{ xs: "none", sm: "flex" }} gap={2}>
                            {menuItems.map((label) => (
                                <Button
                                    key={label}
                                    color="inherit"
                                    onClick={() =>
                                        (window.location.href = `/${label === "Home" ? "" : label.toLowerCase()}`)
                                    }
                                >
                                    <Typography variant="button" sx={{ fontSize: "1rem" }}>
                                        {label}
                                    </Typography>
                                </Button>
                            ))}
                        </Box>

                        {/* Mobile Menu Icon */}
                        <IconButton
                            color="inherit"
                            edge="end"
                            sx={{ display: { sm: "none" } }}
                            onClick={handleDrawerToggle}
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>

                </AppBar>
            </ElevationScroll>

            {/* Spacer for fixed AppBar */}
            <Toolbar />
            <Box
                sx={{
                    bgcolor: palette.primary.main,
                    color: "white",
                    textAlign: "right",
                    px: 2,
                    py: 0.5,
                    fontSize: "0.9rem",
                }}
            >
                Hours: Mon–Fri 9am–6pm · Sat 10am–2pm · Sun Closed
            </Box>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
            >
                {drawer}
            </Drawer>

            {/* MAIN CONTENT */}
            <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
            </Box>

       <Footer />
        </Box>
    );
}
    