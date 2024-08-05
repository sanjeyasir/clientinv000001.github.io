
import React from 'react';
import HeaderNavbar from '../../components/HeaderNavbar';
import Footer from '../../components/Footer';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ProductDetailPage } from './productInformationDetails.C';


const ProductInformationDetails = () => {
    
    const { id } = useParams();
   
  
    return (
      <>
       <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <HeaderNavbar />
          <Box sx={{ flex: 1, marginBottom: '10px' }}>

            <ProductDetailPage id={id}/>
       
         
          </Box>
          <Footer/>
         
          
        </Box>
      
      </>
    );
  }

export default ProductInformationDetails;