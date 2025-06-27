import { Box, Container, Typography } from "@mui/material";
import PageLayout from "../components/PageLayout";

export default function Index() {
    return (
        <PageLayout>
            <Container maxWidth="md" sx={{ py: 4 }}>
                <Box sx={{ textAlign: "center", mb: 4 }}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        404 - Page Not Found
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        Sorry, the page you are looking for does not exist.
                    </Typography>
                </Box>
            </Container>
        </PageLayout>
    )
}