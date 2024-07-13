
import React from 'react';
import HeaderNavbar from '../../components/HeaderNavbar';
import Footer from '../../components/Footer';
import { Box } from '@mui/material';
import { ContactDetails, ContactForm, Details } from './contact.C';

const Contact = () => {

  
    return (
      <>
       <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <HeaderNavbar />

          

          <Box sx={{ flex: 1 }}>
            <div>
            {/* <Details/> */}
            </div>
            <div>
            <ContactForm/>
            </div>
            <ContactDetails/>
          </Box>

          <Footer/>
         
          
        </Box>
      
      </>
    );
}

export default Contact;