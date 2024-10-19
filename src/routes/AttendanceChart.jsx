import React from 'react';
import { Container, Typography, Stack, Box, CircularProgress, Grid } from '@mui/material';

const AttendanceSummary = () => {
  // Attendance data structured with locations and their details
  const attendanceData = [
    { location: "Location 1", present: 45, total: 50 },
    { location: "Location 2", present: 30, total: 40 },
    { location: "Location 3", present: 20, total: 30 },
  ];

 
  const calculatePercentage = (present, total) => {
    return total > 0 ? ((present / total) * 100).toFixed(1) : 0; // Returns percentage with one decimal
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" style={{marginBottom:"20px"}}>
        Attendance Summary Report
      </Typography>
      <Grid container spacing={4}>
        {attendanceData.map(({ location, present, total }, index) => {
          const percentage = calculatePercentage(present, total);

          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  width:"100%",
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #e0e0e0',
                  borderRadius: '5px',
                  padding: '20px',
                 
                backgroundColor:"#ffffff"
                }}
              >
               <Stack direction="row" justifyContent="space-around" spacing={15}>
               <Stack>
               <Typography  sx={{  mb: 1 ,color:"#818281",fontSize:"16px"}} >{location}</Typography>
               <Typography variant="h6"  fontSize="14px" sx={{ mb: 1 }}>Total Members: <span>{total}</span></Typography>
                <Typography   fontWeight="bold"  style={{backgroundColor:"#4CAF50",color:"white",padding:"5px",borderRadius:'20px',textAlign:"center"}} fontSize="10px" sx={{ mb: 2 }}>Present Count: {present}</Typography>
                
               </Stack>
                <Stack>
                <Box position="relative" display="inline-flex">
                  <CircularProgress variant="determinate" value={percentage} size={80} />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      fontWeight: 'bold',
                      
                    
                    }}
                  >
                    <Typography variant="h" fontWeight="bold" >{percentage}%</Typography>
                  </Box>
                </Box>
                </Stack>
               </Stack>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default AttendanceSummary;
