import React from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material';
import { Link, BrowserRouter as Router } from 'react-router-dom';

import Echo from './sub/Echos'

const HomePage = () => {


  // Get cookie by name
function getCookie(cookieName) {
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for(let i = 0; i <cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
}

// Example usage
const userEmail = getCookie("email");
console.log("User Email:", userEmail);

  return (
      <div style={{ backgroundColor: '#D2E3C8', minHeight: '100vh' }}>
        <AppBar position="static" sx={{backgroundColor: '#4F6F52' }}>
          <Toolbar>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
              ECHOS
            </Typography>
            <Tabs
              TabIndicatorProps={{ style: { backgroundColor: 'transparent' } }}
              sx={{
                '& .MuiTabs-flexContainer': {
                  '& .MuiButtonBase-root': {
                    position: 'relative',
                    '&:hover': {
                      color: '#ffffff',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        border: '1px solid #ffffff',
                        pointerEvents: 'none',
                        borderRadius: '4px',
                      },
                    },
                    '&:hover::after': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: '-2px',
                      height: '2px',
                      backgroundColor: '#ffffff',
                    },
                  },
                },
              }}
            >
              <Tab label="Echos" component={Link} to="/echos" />
              <Tab label="Contact" component={Link} to="/contact" />
              <Tab label="Login" component={Link} to="/login" />
              <Tab label="Register" component={Link} to="/signup" />
              
            </Tabs>
          </Toolbar>
        </AppBar>
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <Echo />
        
        </div>
      </div>
   
  );
};

export default HomePage;



