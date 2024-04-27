import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Cookies from 'js-cookie';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3005/login', {
        email,
        password,
      });

      if (response.status === 200) {
        // Store email in cookie
        Cookies.set('email', email);
        // Show success toast
        toast.success('Login successful');
        // Delay before redirecting
        setTimeout(() => {
          // Redirect to /homepage
          window.location.href = '/homepage';
        }, 1000); // 1 second delay
      } else {
        // Show error toast for login failed
        toast.error('Login failed');
      }
    } catch (error) {
      console.error('Authentication failed:', error);
      // Show error toast with error message
      toast.error('Login failed. Please try again.');
    }
  };

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#f48fb1',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ backgroundColor: '#D2E3C8', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Container component="main" maxWidth="xs">
          <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '6px', backgroundColor: '#86A789' }}>
            <Typography component="h1" variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#fff' }}>
              Sign in
            </Typography>
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <TextField
                variant="filled"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                color="secondary"
                onChange={handleEmailChange}
                sx={{ backgroundColor: '#4F6F52', fontWeight: 'bold' }}
              />
              <TextField
                variant="filled"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                color="secondary"
                autoComplete="current-password"
                value={password}
                onChange={handlePasswordChange}
                sx={{ fontWeight: 'bold', backgroundColor: '#4F6F52' }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ mt: 3 }}
              >
                Sign In
              </Button>
            </form>
            <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '10px' }}>
            
            </Typography>
          </Paper>
        </Container>
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </ThemeProvider>
  );
};

export default Login;
