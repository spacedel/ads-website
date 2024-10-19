import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import backgroundImage from './path-to-your-image.jpg'; // Import your background image

const SplashPage = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`, // Set the background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff', // Text color
        padding: '20px',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Ads World
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          The ultimate platform to post and discover ads, discounts, and exclusive offers tailored just for you!
        </Typography>
        <Box mt={4}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            to="/ads"
            sx={{ marginRight: '20px' }}
          >
            View Ads
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            component={Link}
            to="/post-ad"
          >
            Post an Ad
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default SplashPage;
