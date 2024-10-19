import React, { useState } from 'react';
import { Button, Stack, Typography, Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router';
import AttendanceChart from './AttendanceChart';
import Normallist from './Normallist';

const Attendance = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isFullScreen = useMediaQuery(theme.breakpoints.down('sm')); 
    const navigate = useNavigate()
  // Function to handle opening the popup
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Function to handle closing the popup
  const handleClose = () => {
        navigate("/qrcode")
  };

  return (
    <>
      <Stack alignItems="flex-end">
        <Button 
          sx={{ 
            backgroundColor: 'blue', 
            color: 'white', 
            width: { xs: '100%', sm: 'auto' }, // Responsive width for smaller screens
            fontSize: { xs: '0.9rem', sm: '1rem' }, // Adjust font size for smaller screens
          }} 
          onClick={handleClickOpen}
        >
          <Typography>Mark Attendance</Typography>
        </Button>
      </Stack>

      {/* Popup Dialog */}
      <Dialog 
        open={open} 
        onClose={handleClose} 
        fullScreen={isFullScreen} // Fullscreen for small screens
        fullWidth // Full width of the screen
        maxWidth="md" // You can change 'md' to 'sm', 'lg', or 'xl' for different sizes
      >
        <DialogTitle>Select Location</DialogTitle>
        <DialogContent>
          {/* Add Buttons for Location options */}
          <Stack direction="column" spacing={2}>
            <Button 
              onClick={handleClose} 
              fullWidth 
              sx={{ 
                backgroundColor: 'blue', 
                color: 'white', 
                fontSize: { xs: '0.9rem', sm: '1rem' }, // Responsive font size
              }}
            >
              Location 1
            </Button>
            <Button 
              onClick={handleClose} 
              fullWidth 
              sx={{ 
                backgroundColor: 'green', 
                color: 'white', 
                fontSize: { xs: '0.9rem', sm: '1rem' }, // Responsive font size
              }}
            >
              Location 2
            </Button>
            <Button 
              onClick={handleClose} 
              fullWidth 
              sx={{ 
                backgroundColor: 'red', 
                color: 'white', 
                fontSize: { xs: '0.9rem', sm: '1rem' }, // Responsive font size
              }}
            >
              Location 3
            </Button>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>

      <AttendanceChart/>
      <Normallist/>
    </>
  );
};

export default Attendance;
