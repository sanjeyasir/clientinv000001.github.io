import React from 'react';
import '../styles/HeaderNavbar.css';
import { Box, Typography } from '@mui/material';
import Icon from 'react-icons-kit';

const Footer = () => {


  return (
    <div className="navbar">

        <div style={{display:'flex', flexDirection:'row', alignContent:'center', alignItems:'center'}}>

            <Typography variant="caption" style={{marginRight:'10px'}}>
                Powered by Mind Forger @ 2024
            </Typography>
           

        </div>

   
        
      
      
    </div>
  );
};

export default Footer;
