const { createTheme } = require('@mui/material/styles');
export const theme = createTheme({
    palette: {
        primary: {
        main: "#B22234", // Flag Red
        contrastText: "#FFFFFF", // White
        light: "#4A90E2", // Lighter Blue
        dark: "#001F4D", // Darker Navy Blue
        lightText: "#E0E0E0", // Light Gray for text
        darkText: "#222222", // Black for text
        softGray: '#F5F5F5', // Soft Gray for backgrounds
        softWhite: '#FFFFFF', // Soft White for backgrounds
        accentBlue: '#007BFF', // Accent Blue for buttons and links
        accentGreen: '#28A745', // Accent Green for success messages
    },
    secondary: {
        main: "#B22234", // Red
        contrastText: "#FFFFFF", // White
    },
    background: {
        default: "#F5F5F5", // Light Gray
        paper: "#FFFFFF", // White
    },
    },
});

export const palette = {
    primary: {
        main: "#B22234", // Flag Red
        contrastText: "#FFFFFF", // White
        light: "#4A90E2", // Lighter Blue
        dark: "#001F4D", // Darker Navy Blue
        lightText: "#E0E0E0", // Light Gray for text
        darkText: "#222222", // Black for text
        softGray: '#F5F5F5', // Soft Gray for backgrounds
        softWhite: '#FFFFFF', // Soft White for backgrounds
        accentBlue: '#007BFF', // Accent Blue for buttons and links
        accentGreen: '#28A745', // Accent Green for success messages
    },
    secondary: {
        main: "#B22234", // Red
        contrastText: "#FFFFFF", // White
    },
    background: {
        default: "#F5F5F5", // Light Gray
        paper: "#FFFFFF", // White
    },
}    