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
import { Stack, Typography, Box, Container } from '@mui/material';
import { EyeOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import Userpopup from './Userpopup';
import Registersummary from './Regsitersummary';

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
    <Registersummary/>
      <Container>
      <TableContainer component={Paper} style={{marginTop:"40px"}}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <caption>A basic table example with a caption</caption>
          <TableHead>
            <TableRow>
              <TableCell>S NO </TableCell>
              <TableCell>First Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Members</TableCell>
              <TableCell align='center'>Status</TableCell>
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
                  <TableCell align="right">{row.age}</TableCell>
                  <TableCell align="right">{row.gender}</TableCell>
                  <TableCell align="right">{row.contactNumber}</TableCell>
                  <TableCell align="right">1+ {row.members.length}</TableCell>
                  <TableCell align='center'>
                    <Stack direction="row" alignItems="center" justifyContent="center">
                      <span 
                        style={{
                          display: 'inline-block',
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          backgroundColor: getStatusColor(row.status),
                          marginRight: '5px'
                        }} 
                      />
                      <Typography variant="body1">{row.status}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => handleEyeClick(row)}>
                      <EyeOutlined />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => handleRowToggle(row.id)}>
                      {openRowId === row.id ? <UpOutlined /> : <DownOutlined />}
                    </IconButton>
                  </TableCell>
                </TableRow>

                {/* Collapsible Row */}
                <TableRow>
                  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                    <Collapse in={openRowId === row.id} timeout="auto" unmountOnExit>
                      <Box margin={1} sx={{ backgroundColor: '#f5f5f5', borderRadius: '8px', padding: '12px' }}>
                        {/* Nested Table for Members */}
                        <Table  aria-label="members" sx={{ backgroundColor: '#ffffff', borderRadius: '8px', }}>
                          <TableHead>
                            <TableRow>
                              <TableCell sx={{ fontWeight: 'bold', color: '#00796b' }}>Member Name</TableCell>
                              <TableCell align="right" sx={{ fontWeight: 'bold', color: '#00796b' }}>Age</TableCell>
                              <TableCell align="right" sx={{ fontWeight: 'bold', color: '#00796b' }}>Gender</TableCell>
                              <TableCell align="right" sx={{ fontWeight: 'bold', color: '#00796b' }}>WhatsApp</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {row.members.map((member, index) => (
                              <TableRow key={index}>
                                <TableCell>{member.memberName}</TableCell>
                                <TableCell align="right">{member.age}</TableCell>
                                <TableCell align="right">{member.gender}</TableCell>
                                <TableCell align="right">{member.whatsapp}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Container>

      {/* Eye Popup */}
      <Userpopup open={openPopup} onClose={handleClosePopup} user={selectedUser} />
    </>
  );
}
