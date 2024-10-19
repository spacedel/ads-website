import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material'; // Import Material-UI components
import axios from 'axios';
import { Link } from 'react-router-dom';
// import backgroundImage from "./assets/blue"

const Home = () => {
  const [ads, setAds] = useState([]); // State to store ads
  const [loading, setLoading] = useState(true); // State to manage loading status

  // Fetch ads from the API when the component mounts
  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await axios.get('/api/ads'); // Adjust the endpoint as necessary
        setAds(response.data);
      } catch (error) {
        console.error('Error fetching ads:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAds();
  }, []);

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        <Box
        sx={{
            backgroundColor: 'lightblue', // Set the background image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: 'white', // Text color
        }}
        >
        <Container maxWidth="md">
            {/* <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Ads World
            </Typography> */}
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
                to="/post-ads"
            >
                Post an Ad
            </Button>
            </Box>
        </Container>
        </Box>
      {/* <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Our Ads Website
      </Typography> */}
      {loading ? (
        <Typography variant="h6">Loading ads...</Typography>
      ) : (
        <Grid container spacing={3}>
          {ads.map((ad) => (
            <Grid item xs={12} sm={6} md={4} key={ad.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {ad.title}
                  </Typography>
                  <Typography color="textSecondary">
                    {ad.description}
                  </Typography>
                  <Button variant="contained" color="primary" href={`/ads/${ad.id}`}>
                    View Ad
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Home;
