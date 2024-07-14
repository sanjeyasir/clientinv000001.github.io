import React, { useState } from 'react';
import { Typography, Box, Card, Grid, Button, CardContent,TextField, Snackbar, SnackbarContent, Icon, Divider, Link, useMediaQuery,useTheme } from '@mui/material';
import jutimg from '../../assets/juteimg.jpg';
import bullock from '../../assets/bullock.png.png';//https://pixabay.com/vectors/bullock-cart-huge-pull-rural-33502/
import { useNavigate } from 'react-router-dom';
import '../../styles/Home.css';


const Details = () => {
    return (
      <>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          marginTop: '120px',
          height: '100vh',
          backgroundImage: `url(${bullock})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      > 
      
         <Card
          sx={{
            position: 'absolute',
            left: '5%',
            top: '1%',
            backgroundColor: 'rgba(255, 255, 255, 1)',
            padding: 2,
            marginLeft: '5%',
            marginRight: '10%',
            borderRadius:'25px',
          }}
        >
          <CardContent>
            <Typography variant="h6" component="div" gutterBottom>
                Welcome to AJ Tradders
            </Typography>
            <Typography variant="body2" color="textSecondary">
            Established in 1980 and headquartered in the vibrant city of Colombo, AJ Tradders has been a cornerstone in the jute industry for over four decades. 
            Our journey, built on a foundation of expertise and innovation, 
            has positioned us as a trusted provider of eco-friendly packaging solutions to a diverse array of renowned companies worldwide.            
            </Typography>
            
          </CardContent>

          <CardContent style={{marginTop:'5px'}}>
            <Typography variant="h6" component="div" gutterBottom>
            Our Legacy
            </Typography>
            <Typography variant="body2" color="textSecondary">
            With over 40 years of experience, AJ Tradders has honed the art and science of producing high-quality jute products. 
            Our deep-rooted commitment to sustainability drives us to offer solutions that not only meet the needs of our clients but also contribute positively to the environment. 
            Our legacy is one of dedication, integrity, and a relentless pursuit of excellence.           
            </Typography>
            
          </CardContent>

          

         

        </Card>
      
      
       

      
      </Box>
      
      </>
      
    );
};

  
export {Details};
