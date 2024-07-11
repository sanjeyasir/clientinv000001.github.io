
import React from 'react';
import HeaderNavbar from '../../components/HeaderNavbar';
import Footer from '../../components/Footer';
import { Box } from '@mui/material';

const ProductInformation = () => {

  
    return (
      <>
       <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <HeaderNavbar />
          <Box sx={{ flex: 1, marginBottom: '10px' }}>
         
          </Box>
          <Footer/>
         
          
        </Box>
      
      </>
    );
  }

export default ProductInformation;