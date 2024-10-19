import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { userData } from 'constants';
import Avatar from 'components/@extended/Avatar';
import { Stack, Typography, Box, Container, Checkbox } from '@mui/material';
import { EyeOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import Userpopup from './Userpopup';

const getStatusColor = (status) => {
  switch (status) {
    case 'Approved':
      return '#4CAF50'; 
    case 'Rejected':
      return '#F44336'; 
    case 'Pending':
      return '#FF9800';
    default:
      return '#9E9E9E'; 
  }
};

export default function MainTable() {
  const [openRowId, setOpenRowId] = useState(null);
  const [openPopup, setOpenPopup] = useState(false); 
  const [selectedUser, setSelectedUser] = useState(null); 

  const handleRowToggle = (rowId) => {
    setOpenRowId(openRowId === rowId ? null : rowId);
  };

  const handleEyeClick = (user) => {
    setSelectedUser(user); 
    setOpenPopup(true); 
  };

  const handleClosePopup = () => {
    setOpenPopup(false); 
    setSelectedUser(null); 
  };

  return (
    <>
      <Container style={{marginTop:'20px'}}>
        <Typography variant='h5' style={{marginTop:"40px",marginBottom:"30px"}}>Normal List Report</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <caption>A basic table example with a caption</caption>
          <TableHead>
            <TableRow>
              <TableCell>S NO </TableCell>
              <TableCell>First Name</TableCell>
              <TableCell align="right">LOCATION1</TableCell>
              <TableCell align="right">LOCATION2</TableCell>
              <TableCell align="right">lOCATION3</TableCell>
              <TableCell align="right">TOTAL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((row) => (
              <React.Fragment key={row.id}>
                <TableRow>
                  <TableCell>
                    <Typography fontSize="12px" fontWeight="900">UAC200{row.id} </Typography>
                  </TableCell>
                  <TableCell scope="row">
                    <Stack direction="row" spacing={1.2} alignItems="center">
                      <Avatar src={row.personImage} size='md' />
                      <Typography variant='h6'>{row.fname} {row.lname}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">
                    <Checkbox disabled value={row.location1} checked={row.location1}></Checkbox>
                  </TableCell>
                  <TableCell align="right">
                    
                  <Checkbox disabled value={row.location2} checked={row.location2}></Checkbox>
                  </TableCell>
                  <TableCell align="right">
                  <Checkbox disabled value={row.location3} checked={row.location3}></Checkbox>
                  </TableCell>
                  <TableCell align="right">
                    <Typography fontWeight="bold">{row.present}/3</Typography>
                  </TableCell>
                  <TableCell align='center'>
                   
                  </TableCell>
               
              
                </TableRow>

                {/* Collapsible Row */}
               
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Container>

     
    </>
  );
}
