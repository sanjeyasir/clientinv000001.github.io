
import React from 'react';
import HeaderNavbar from '../../components/HeaderNavbar';
import Footer from '../../components/Footer';
import { Box } from '@mui/material';
import {Details} from './aboutus.C';

const AboutUs = () => {

  
    return (
      <>
       <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <HeaderNavbar />

          <Box sx={{ flex: 1 }}>
            <div>
            <Details/>
            </div>
           
           
          </Box>

          

          

          <Footer/>
         
          
        </Box>
      
      </>
    );
}

export default AboutUs;