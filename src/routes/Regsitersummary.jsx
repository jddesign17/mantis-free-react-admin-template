import React from 'react';
import { Container, Typography, Stack, Box, Grid } from '@mui/material';
import r1 from "../assets/images/users/r1.png"
import r2 from "../assets/images/users/r2.png"
import r3 from "../assets/images/users/r3.png"
const Registersummary = () => {
  // Attendance data structured with locations and their details
  const attendanceData = [
    { location: "Registered Participants", present: 45, total: 50 ,img:r1},
    { location: "Payment Verified Participants", present: 30, total: 40,img:r2 },
    { location: "Attendance Marked Participants", present: 20, total: 30 ,img:r3},
  ];

  

  const calculatePercentage = (present, total) => {
    return total > 0 ? ((present / total) * 100).toFixed(1) : 0; // Returns percentage with one decimal
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" style={{ marginBottom: "20px" }}>
        User Summary Report
      </Typography>
      <Grid container spacing={4}>
        {attendanceData.map(({ location, present, total,img }, index) => {
          const percentage = calculatePercentage(present, total);

          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #e0e0e0',
                  borderRadius: '5px',
                  padding: '20px',
                  backgroundColor: "#ffffff",
                  minHeight: '150px', // Ensure same height for all boxes
                }}
              >
                <Stack direction="row" justifyContent="space-around" spacing={15}>
                  <Stack>
                    <Typography sx={{ mb: 1,  fontSize: "17px" }}>
                      {location}
                    </Typography>
                    <Typography fontSize="25px" fontWeight="bold">
                        {present}
                    </Typography>
                   
                  </Stack>
                  <Stack>
                    <img src={img} width="40px"/>
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

export default Registersummary;
