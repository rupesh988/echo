import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const SignUp = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dob, setDob] = useState('');
  const [profession, setProfession] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  const handleProfessionChange = (e) => {
    setProfession(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3005/signup', {
        email,
        password,
        name,
        dob,
        profession,
      });
  
      if (response.status === 200) {
        console.log('User created successfully');
        // Optionally, you can redirect the user to another page upon successful signup
      } else {
        console.error('Error creat     ing user');
        history.push('/login');
        window.location.href = '/login';
      }
    } catch (error) {
      console.error('Error creating user:', error);
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
          <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '6px', backgroundColor: '#4F6F52' }}>
            <Typography component="h1" variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#fff' }}>
              Sign Up
            </Typography>
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
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
                    sx={{borderRadius: '6px', backgroundColor: '#86A789', fontWeight: '200%', width: '100%' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    value={name}
                    color="secondary"
                    onChange={handleNameChange}
                    sx={{borderRadius: '6px', backgroundColor: '#86A789', fontWeight: 'bold', width: '100%' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
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
                    autoComplete="new-password"
                    value={password}
                    onChange={handlePasswordChange}
                    sx={{borderRadius: '6px', fontWeight: 'bold', backgroundColor: '#86A789', width: '100%' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    autoComplete="new-password"
                    color="secondary"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    sx={{borderRadius: '6px', fontWeight: 'bold', backgroundColor: '#86A789', width: '100%' }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    id="dob"
                    label="Date of Birth"
                    type="date"
                    color="secondary"
                    value={dob}
                    onChange={handleDobChange}
                    sx={{borderRadius: '6px', backgroundColor: '#86A789', fontWeight: 'bold', width: '100%' ,}}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    id="profession"
                    label="Profession"
                    name="profession"
                    autoComplete="profession"
                    color="secondary"
                    select
                    value={profession}
                    onChange={handleProfessionChange}
                    SelectProps={{
                      native: true,
                    }}
                    sx={{borderRadius: '6px', backgroundColor: '#86A789', fontWeight: 'bold', width: '100%' }}
                  >
                    <option value="" disabled>
                      
                    </option>
                    <option value="engineer">Engineer</option>
                    <option value="doctor">Doctor</option>
                    <option value="teacher">Teacher</option>
                    <option value="designer">Designer</option>
                  </TextField>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ mt: 3,  }}
              >
                Sign Up
              </Button>
            </form>
          </Paper>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default SignUp;
