import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Popover, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Create from './sub/profile'

const HomePage = () => {
  const [anchorElSettings, setAnchorElSettings] = useState(null);
  const [anchorElProfile, setAnchorElProfile] = useState(null);

  const handleSettingsOpen = (event) => {
    setAnchorElSettings(event.currentTarget);
  };

  const handleSettingsClose = () => {
    setAnchorElSettings(null);
  };

  const handleProfileOpen = (event) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorElProfile(null);
  };

  return (
    <div style={{ backgroundColor: '#D2E3C8', minHeight: '100vh' }}>
      <AppBar position="static" sx={{ backgroundColor: '#F4DFB6',color : 'black' }}>
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            ECHO
          </Typography>
          <Tabs
            TabIndicatorProps={{ style: { backgroundColor: 'transparent' } }}
            sx={{
              '& .MuiTabs-flexContainer': {
                '& .MuiButtonBase-root': {
                  position: 'relative',
                  '&:hover': {
                    color: '#ffffff',
                    backgroundColor: '#B99470', // Background color on hover
                    borderRadius: '20px', // Rounded corners on hover
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      border: '3px solid #ffffff',
                      pointerEvents: 'none',
                      borderRadius: '20px',
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
            <Tab label="ECHOS" component={Link} to="/echo" />
            <Tab label="write" component={Link} to="/createpost" />
            <Tab
              label="settings"
              aria-haspopup="true"
              aria-controls="settings-menu"
              onClick={handleSettingsOpen}
            />
            <Tab
              label="profile"
              aria-haspopup="true"
              aria-controls="profile-menu"
              onClick={handleProfileOpen}
            />
          </Tabs>
          <Popover
            id="settings-menu"
            open={Boolean(anchorElSettings)}
            anchorEl={anchorElSettings}
            onClose={handleSettingsClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <Box sx={{ width: 200, backgroundColor: '#86A789' }}>
              <Tabs orientation="vertical">
                <Tab label="Account Settings" component={Link} to="/settings/account" />
                <Tab label="Security Settings" component={Link} to="/settings/security" />
                <Tab label="logout" component={Link} to="/echos" />
              </Tabs>
            </Box>
          </Popover>
          <Popover
            id="profile-menu"
            open={Boolean(anchorElProfile)}
            anchorEl={anchorElProfile}
            onClose={handleProfileClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <Box sx={{ width: 200 ,backgroundColor: '#86A789'}}>
              <Tabs orientation="vertical">
                <Tab label="My Profile" component={Link} to="/profile" />
                <Tab label="Edit Profile" component={Link} to="/profile/edit" />
                <Tab label="Profile Settings" component={Link} to="/profile/settings" />
              </Tabs>
            </Box>
          </Popover>
        </Toolbar>
      </AppBar>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <Create/>
      </div>
    </div>
  );
};

export default HomePage;
