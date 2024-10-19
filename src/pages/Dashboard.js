// src/pages/Dashboard.js
import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const Dashboard = () => {
  const ads = [
    { title: 'Ad 1', description: 'Description of ad 1', discount_code: 'SAVE10' },
    { title: 'Ad 2', description: 'Description of ad 2', discount_code: 'SAVE20' },
    // Dummy ads for now; replace with real data from API later
  ];

  return (
    <Grid container spacing={2} sx={{ padding: 3 }}>
      {ads.map((ad, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                {ad.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {ad.description}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Discount Code: {ad.discount_code}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Dashboard;
