import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import Axios from 'axios';

const PostAds = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discountCode, setDiscountCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await Axios.post('http://localhost:5000/api/ads', {
        title,
        description,
        price,
        discountCode,
      });

      setSuccess('Ad posted successfully!');
      console.log('Response:', response.data);
      
      setTitle('');
      setDescription('');
      setPrice('');
      setDiscountCode('');
    } catch (err) {
      setError('Failed to post ad: ' + (err.response?.data?.message || err.message));
      console.error('Error posting ad:', err);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Post an Ad
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          variant="outlined"
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="Description"
          variant="outlined"
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="Price"
          variant="outlined"
          margin="normal"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="Discount Code (optional)"
          variant="outlined"
          margin="normal"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
        />
        {error && <Typography color="error">{error}</Typography>}
        {success && <Typography color="primary">{success}</Typography>}
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default PostAds;
