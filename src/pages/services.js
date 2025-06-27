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
            <Box sx={{ maxWidth: 800, mx: 'auto', mb: 6, px: 2, pt:2 }}>
                <Typography variant="h4" fontWeight="bold" color="primary.main" gutterBottom>
                    Our Services
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {"At ShipUSA, we pride ourselves on offering a full range of essential services designed to make your life easier."}
                    {" From reliable shipping and receiving to secure private mailboxes, passport photos, fingerprinting, and notary"}
                    {" services — we’re your one-stop destination for both personal and business needs. Our team is known for being"}
                    {" friendly, helpful, and always willing to go the extra mile. Whether you’re dropping off a package, making copies,"}
                    {" or renting a U-Haul, you’ll always be greeted with a smile and a commitment to top-notch service."}
                </Typography>
            </Box>
            <ShippingPartners />

            <UhaulSection />
            <AmazonDropOffSection />
            <MailBoxServicesSection />
            <PersonalServicesSection />
        </PageLayout>
    )
}