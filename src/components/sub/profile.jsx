import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CircularProgress } from '@mui/material';

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data from server
    const getEmailFromCookie = () => {
      const cookies = document.cookie.split(';');
      const emailCookie = cookies.find(cookie => cookie.trim().startsWith('email='));
      if (emailCookie) {
        return emailCookie.split('=')[1];
      }
      return null;
    };

    const userEmail = getEmailFromCookie();
    if (userEmail) {
      fetch('http://localhost:3005/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: userEmail }),
      })
        .then(response => response.json())
        .then(data => {
          setUserData(data);
          setLoading(false);
        })
        .catch(error => console.error('Error fetching user data:', error));
    }
  }, []);

  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>
      {loading ? (
        <Grid container justifyContent="center">
          <CircularProgress />
        </Grid>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card elevation={3}>
              <CardMedia
                component="img"
                height="300"
                image={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`}
                alt="User Profile"
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Name: {userData.name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Email: {userData.email}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Date of Birth: {userData.dob}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Profession: {userData.profession}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}

export default App;
