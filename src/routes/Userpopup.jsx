import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, Stack, Avatar, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { BorderBottomOutlined, CloseCircleOutlined } from '@ant-design/icons';

const Userpopup = ({ open, onClose, user, onApprove, onReject }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <Stack direction="row" justifyContent="space-between" alignItems="center" padding="10px">
        <DialogTitle fontSize="20px" fontWeight="bold">User Details</DialogTitle>
        <DialogActions>
          <CloseCircleOutlined 
            onClick={onClose} 
            style={{ fontSize: '24px', cursor: 'pointer' }} 
          />
        </DialogActions>
      </Stack>

      <DialogContent dividers>
        {user ? (
          <Stack spacing={3}>
            {/* User Avatar and Basic Info */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar src={user.personImage} alt={user.fname} sx={{ width: 80, height: 80 }} />
              <Stack spacing={0.5}>
                <Typography variant="h5" fontWeight="bold" fontSize="18px">{user.fname} {user.lname}</Typography>
                <Typography variant="body1" color="text.secondary" fontSize="16px">Email: {user.email}</Typography>
                <Typography variant="body1" color="text.secondary" fontSize="16px">Contact: {user.contactNumber}</Typography>
                <Typography variant="body1" color="text.secondary" fontSize="16px">WhatsApp: {user.whatsappNumber}</Typography>
              </Stack>
            </Stack>
            

            {/* Address Information */}
            <Typography variant="h6" fontWeight="bold" fontSize="18px">Address Information:</Typography>
            <Grid container spacing={2}>
              {[
                { label: 'State', value: user.state },
                { label: 'City', value: user.city },
                { label: 'District', value: user.district },
                { label: 'Area', value: user.area },
                { label: 'Pincode', value: user.pincode },
              ].map((info, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Typography variant="body2" fontSize="16px"><strong>{info.label}:</strong> {info.value}</Typography>
                </Grid>
              ))}
            </Grid>

            {/* Family Members Table */}
            <Typography variant="h6" fontWeight="bold" fontSize="18px">Family Members:</Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Member Name</strong></TableCell>
                    <TableCell><strong>Gender</strong></TableCell>
                    <TableCell><strong>Age</strong></TableCell>
                    <TableCell><strong>WhatsApp</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {user.members && user.members.length > 0 ? (
                    user.members.map((member, index) => (
                      <TableRow key={index}>
                        <TableCell fontSize="16px">{member.memberName}</TableCell>
                        <TableCell fontSize="16px">{member.gender}</TableCell>
                        <TableCell fontSize="16px">{member.age}</TableCell>
                        <TableCell fontSize="16px">{member.whatsapp}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} align="center">No family members available.</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Vehicle Information */}
            <Typography variant="h6" fontWeight="bold" fontSize="18px">Vehicle Information:</Typography>
            <Grid container spacing={2}>
              {[
                { label: 'Make', value: user.vehicleMake },
                { label: 'Model', value: user.vehicleModel },
                { label: 'Registration Number', value: user.vehicleRegisterNumber },
              ].map((info, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Typography variant="body2" fontSize="16px"><strong>{info.label}:</strong> {info.value}</Typography>
                </Grid>
              ))}
              {user.vehicleUrl && (
                <Grid item xs={12}>
                  <img src={user.vehicleUrl} alt={`${user.vehicleMake} ${user.vehicleModel}`} width="100%" />
                </Grid>
              )}
            </Grid>


            <Stack alignItems="flex-end">
    <Typography fontSize="15px" margin="5px">
        <span style={{ fontWeight: 'bold' }}>Vehicle Entry Fee:</span> ₹{user.vehicleFee}
    </Typography>
    <Typography fontSize="15px" margin="5px">
        <span style={{ fontWeight: 'bold' }}>New Year Celebration Fee:</span> ₹{user.newYearCelebrationAmt}
    </Typography>
    <Typography fontSize="15px" margin="5px">
        <span style={{ fontWeight: 'bold' }}>Donation:</span> ₹{user.donation}
    </Typography>
    <Typography fontSize="15px" margin="5px">
        <span style={{ fontWeight: 'bold' }}>Total:</span> ₹{user.totalAmt}
    </Typography>
</Stack>


            {/* Approve and Reject Buttons */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Button variant="contained" color="success" onClick={onApprove} sx={{ backgroundColor: 'green', color: 'white' }}>
                Approve
              </Button>
              <Button variant="contained" color="error" onClick={onReject} sx={{ backgroundColor: 'red', color: 'white' }}>
                Reject
              </Button>
            </Stack>

            {/* Status */}
            <Typography variant="body2" color="primary" fontWeight="bold" fontSize="16px"><strong>Payment Status:</strong> Paid</Typography>
          </Stack>
        ) : (
          <Typography fontSize="16px">No user data available.</Typography>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Userpopup;
