import React, { useState } from "react";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { palette } from "../styles/palette";
import Footer from "./Footer";
import Image from "next/image";

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
            <Typography variant="h5" fontStyle="italic" sx={{ fontWeight:'bold', m: 2, color: palette.primary.main }}>
                Ship USA
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
                <AppBar position="fixed" sx={{ bgcolor: "#B22234", color: "white" }}>
                    <Toolbar sx={{ justifyContent: "space-between" }}>
                        {/* Logo & Brand */}
                        <Box display="flex" alignItems="center" gap={1} sx={{ p: 1 }}>
                            {/* <Image src="/assets/logos/white_and_blue.png" alt="ShipUSA Logo" width={160} height={160} /> */}
                            <Typography
                                variant="h4"
                                component="div"
                                sx={{ fontWeight: "bold", fontStyle: "italic", color: 'white' }}
                            >
                                Ship USA
                            </Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="flex-end" sx={{ flexGrow: 1 }}>
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
                            {/* <Box
                                sx={{
                                    
                                    color: "white",
                                    textAlign: "right",
                                    pr: 2,
                                    pt: 0.5,
                                    fontSize: "1.2rem",
                                }}
                            >
                                Hours: Mon–Fri 9am–6pm · Sat 10am–2pm · Sun Closed
                            </Box> */}
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
