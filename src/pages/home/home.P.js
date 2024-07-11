
import React from 'react';
import HeaderNavbar from '../../components/HeaderNavbar';
import Footer from '../../components/Footer';
import { Box } from '@mui/material';
import { Contact, Details,  FeaturedProducts,  Journey, SuccessStory, WhatWeOffer } from './home.C';

const Home = () => {

  
    return (
      <>
       <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <HeaderNavbar />
          

          <Box sx={{ flex: 1 }}>
          <div style={{marginBottom:'5px'}}>
          <Details/>
          </div>
          <div style={{marginBottom:'10px'}}>
          <WhatWeOffer/>
          </div>
          <div style={{marginBottom:'10px'}}>
          <SuccessStory/>
          </div>
          <div style={{marginBottom:'10px'}}>
          <FeaturedProducts/>
          </div>

          <Contact/>
          </Box>

          <Footer/>
         
          
        </Box>
      
      </>
    );
  }

export default Home;