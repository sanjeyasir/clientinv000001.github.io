
import React from 'react';
import HeaderNavbar from '../../components/HeaderNavbar';
import Footer from '../../components/Footer';
import { Box } from '@mui/material';
import { ProductGrid } from './productInformation.C';

const ProductInformation = () => {

  
    return (
      <>
       <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <HeaderNavbar />
          <Box sx={{ flex: 1, marginBottom: '10px' }}>
          <div style={{marginTop:'65px'}}>
          <ProductGrid/>

          </div>
          
         
          </Box>
          <Footer/>
         
          
        </Box>
      
      </>
    );
  }

export default ProductInformation;