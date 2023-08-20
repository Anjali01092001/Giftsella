import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import rib from '../images/ribbion.avif';

const Contact = () => {
  return (
    <div className='ribbion'  style={{ backgroundImage: `url(${rib})`}}> 
    <Layout>
      <Box sx={{ my: 10, ml: 80, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant='h3'>Contact Us</Typography>
      </Box>
      <Box sx={{ m: 3, width: "600px", ml: 55}}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: "#282829", color: "white" ,align:'center'}}>
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                <SupportAgentIcon sx={{color:'red'}} />1800-00-0000 (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                <MailIcon sx={{color:'skyblue'}} />gifts456@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                <CallIcon sx={{color:'green'}} />1234567890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
    </div>
  )
}

export default Contact
