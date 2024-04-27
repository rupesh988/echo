import React from 'react';
import { Card, CardContent, Typography, Grid, TextField, Button } from '@mui/material';

const ContactPage = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#D2E3C8' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card style={{ height: '100%' }}>
            <CardContent style={{ backgroundColor: '#739072' }}>
              <Typography variant="h5" component="h2">
                Contact Information
              </Typography>
              <Typography variant="body2" color="textSecondary">
                You can contact us through the following methods:
              </Typography>
              <Typography variant="body2" component="p">
                Email: echo@echo.com
              </Typography>
              <Typography variant="body2" component="p">
                Phone: +91 9550733716
              </Typography>
              <Typography variant="body2" component="p">
                Address: mars,solar system,milkyway
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card style={{ height: '100%' }}>
            <CardContent style={{ backgroundColor: '#739072' }}>
              <Typography variant="h5" component="h2">
                Social Media
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Follow us on social media for updates:
              </Typography>
              <Typography variant="body2" component="p">
                X    :     @echo.x
              </Typography>
              <Typography variant="body2" component="p">
                Facebook: /echo_in
              </Typography>
              <Typography variant="body2" component="p">
                Instagram: @echo_in
              </Typography>
            </CardContent>
            
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card style={{ height: '100%' }}>
            <CardContent style={{ backgroundColor: '#739072' }}>
              <Typography variant="h5" component="h2">
                Contact Form
              </Typography>
              <form style={{ marginTop: '20px' }}>
                <TextField
                  id="name"
                  label="Name"
                  variant="filled"
                  fullWidth
                  margin="normal"
                  style={{ backgroundColor: '#D2E3C8',borderRadius: '4px'}}
                />
                <TextField
                  id="email"
                  label="Email"
                  variant="filled"
                  fullWidth
                  margin="normal"
                  style={{ backgroundColor: '#D2E3C8',borderRadius : '4px'}}
                />
                <TextField
                  id="message"
                  label="Message"
                  multiline
                  rows={4}
                  variant="filled"
                  fullWidth
                  margin="normal"
                  style={{ backgroundColor: '#D2E3C8',borderRadius : '4px'}}
                />
                <Button variant="filled" color="primary" sx ={{backgroundColor : '#E6A4B4'}}fullWidth>
                  Send
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactPage;
