import React, { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    Alert,
    Divider,
    Paper,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import PageLayout from '../components/PageLayout';

import dynamic from 'next/dynamic';

const MapIframe = dynamic(() =>
    Promise.resolve(() => (
        <iframe
            title="ShipUSA Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.2983737212046!2d-97.5640155!3d35.6543535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b2153653d7c7cb%3A0x3e3470c84e90a16b!2s3033%20NW%20178th%20St%20Suite%20B%2C%20Edmond%2C%20OK%2073012!5e0!3m2!1sen!2sus!4v1719619200000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
    )),
    { ssr: false }
);

let validateEmail = (email) => {
    let expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return expression.test(String(email).toLowerCase())
}

const formatPhone = (phone) => {
    if (!phone) return '';

    // Clean the input: Remove non-digits and leading '1'
    let textInput = phone.toString().replace(/[^\d]/g, '').replace(/^1/, '');

    // Format as XXX-XXX-XXXX
    if (/^\d+$/.test(textInput)) {
        const first = textInput.slice(0, 3);
        const second = textInput.slice(3, 6);
        const third = textInput.slice(6, 10);

        return [first, second, third].filter(Boolean).join('-');
    }

    return phone.slice(0, -1); // Return input minus the last character if invalid
}; 


export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [status, setStatus] = useState({ loading: false, success: false, error: null });

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });

        if (!formData.name || !validateEmail(formData.email) || !formData.message) {
            setStatus({ loading: false, success: false, error: 'Please fill in all required fields.' });
            return;
        }

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus({ loading: false, success: true, error: null });
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                throw new Error('Failed to send email.');
            }
        } catch (err) {
            setStatus({ loading: false, success: false, error: err.message });
        }
    };

    return (
        <PageLayout>
            <Box sx={{ maxWidth: 800, mx: 'auto', py: 2, px: 2, pt:4 }}>
                {/* Location Header */}
                <Typography variant="h4" fontWeight="bold" gutterBottom color="primary.main">
                    Visit Us
                </Typography>

                <Typography variant="body1" sx={{ mb: 1 }}>
                    3033 NW 178th St, Suite B<br />
                    Edmond, OK 73012
                </Typography>

                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                    <PhoneIcon color="primary" />
                    (405) 400-1011
                </Typography>

                {/* Map */}
                <Box
                    sx={{
                        borderRadius: 2,
                        overflow: 'hidden',
                        boxShadow: 3,
                        height: { xs: 300, sm: 400 },
                        mb: 6,
                    }}
                >
                    <MapIframe />
                </Box>


                {/* Contact Header */}
                <Typography variant="h4" fontWeight="bold" gutterBottom color="primary.main">
                    Contact Us
                </Typography>

                {/* Form Card */}
                <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                            required
                            sx={{ mb: 3 }}
                        />
                        <TextField
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            required
                            type="email"
                            sx={{ mb: 3 }}
                        />
                        <TextField
                            label="Phone (optional)"
                            name="phone"
                            value={formatPhone(formData.phone)}
                            onChange={handleChange}
                            fullWidth
                            sx={{ mb: 3 }}
                        />
                        <TextField
                            label="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            fullWidth
                            required
                            multiline
                            rows={4}
                            sx={{ mb: 3 }}
                        />

                        {status.error && <Alert severity="error" sx={{ mb: 2 }}>{status.error}</Alert>}
                        {status.success && <Alert severity="success" sx={{ mb: 2 }}>Message sent successfully!</Alert>}

                        <Button type="submit" variant="contained" fullWidth size="large" disabled={status.loading}>
                            {status.loading ? 'Sending...' : 'Send Message'}
                        </Button>
                    </form>
                </Paper>
            </Box>
        </PageLayout>
    );
}
