import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Ads = () => {
  const [ads, setAds] = useState([]);       // State to hold ads
  const [error, setError] = useState(null); // State to hold any error messages
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/ads'); // Your API endpoint
        setAds(response.data); // Store the fetched ads in state
      } catch (err) {
        console.error('Error fetching ads:', err.response ? err.response.data : err.message);
        setError('Error fetching ads'); // Set error message
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchAds(); // Call the function to fetch ads
  }, []); // Empty dependency array means this runs once on mount

  // Show loading message while fetching data
  if (loading) {
    return <div>Loading ads...</div>;
  }

  // Show error message if there's an error
  if (error) {
    return <div>{error}</div>;
  }

  // Render ads if available
  return (
    <div>
      <h1>Ads</h1>
      {ads.length === 0 ? (
        <p>No ads available.</p>
      ) : (
        ads.map((ad) => (
          <div key={ad.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{ad.title}</h3>
            <p>{ad.description}</p>
            <p>
              Price: $
              {typeof ad.price === 'number' && !isNaN(ad.price) ? ad.price.toFixed(2) : 'N/A'}
            </p>
            {ad.discount_code && <p>Discount Code: {ad.discount_code}</p>}
          </div>
        ))
      )}
    </div>
  );
};

export default Ads;
