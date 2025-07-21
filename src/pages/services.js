import { Box, Typography } from "@mui/material";
import PageLayout from "../components/PageLayout";
import ShippingPartners from "../components/ShippingPartners";
import UhaulSection from "../components/UhaulSection";
import AmazonDropOffSection from "../components/AmazonDropOffSection";
import MailBoxServicesSection from "../components/MailBoxServicesSection";
import PersonalServicesSection from "../components/PersonalServicesSection";

export default function Services() {
    return (
        <PageLayout>
            {/* Hero Section */}
            <Box sx={{ maxWidth: 1000, mx: 'auto', mb: 8, px: 2, pt: 4 }}>
                <Typography variant="h3" fontWeight="bold" color="primary.main" gutterBottom align="center">
                    Complete Service Solutions
                </Typography>
                <Typography variant="h6" color="text.secondary" align="center" sx={{ mb: 4, lineHeight: 1.6 }}>
                    Your trusted partner for shipping, business services, and personal needs
                </Typography>
                <Typography variant="body1" color="text.secondary" align="center" sx={{ maxWidth: 700, mx: 'auto' }}>
                    {"From nationwide shipping with trusted carriers to secure mailbox services, U-Haul rentals, "}
                    {"and essential personal services like passport photos and notary — ShipUSA & More is your "}
                    {"comprehensive solution hub. Experience friendly service and reliable results every time."}
                </Typography>
            </Box>

            {/* Core Shipping Services - Leading with our primary service */}
            <ShippingPartners />

            {/* Moving & Logistics */}
            <UhaulSection />
            {/* Personal & Professional Services */}
            <PersonalServicesSection />


            {/* Business & Communication Services */}
            <MailBoxServicesSection />



            {/* Amazon Services - Convenient returns */}
            <AmazonDropOffSection />

        </PageLayout>
    )
}
