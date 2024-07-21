
import React, { useState,useEffect } from 'react';
import { Typography, Box, Card, Grid, Button, CardContent,TextField,Icon, Divider, Link,IconButton } from '@mui/material';
import jutimg from '../../assets/juteimg.jpg';
import { useNavigate } from 'react-router-dom';
import '../../styles/Home.css';
import islandjuteimg from '../../assets/AJTraders.png';
import jutegunnybag from '../../assets/jutegunnybags.jpg';//https://www.ebay.com/itm/224593886268
import jutehessianclothe from '../../assets/jutehessiancloth.jpg';//https://www.amazon.co.uk/1m-100-Natural-Hessian-Fabric/dp/B08BZV5WFN?th=1
import juteyarn from '../../assets/juteyarn.jpg';//https://www.indiamart.com/proddetail/jute-yarn-19323820688.html
import propylenebags from '../../assets/propylenebags.jpg' //https://flexpack.com/product/white-standard-woven-polypropylene-bags-without-tie-strings/
import boppfilms from '../../assets/boppfilms.jpg' //https://europlas.com.vn/en-US/blog-1/what-is-bopp-plastic-film-bopp-film-manufacturing-process
import lenomeshbags from '../../assets/lenomeshbag.png' //https://europlas.com.vn/en-US/blog-1/what-is-bopp-plastic-film-bopp-film-manufacturing-process
import balingtwine from '../../assets/balingtwine.png' //https://www.ehow.com/list_7343448_crafts-make-baling-twine.html
import juteyarn163 from '../../assets/juteyarn163.jpg' //https://musajute.com/product/colour-jute-yarn/

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import bullock from '../../assets/bullock.png.png';//https://pixabay.com/vectors/bullock-cart-huge-pull-rural-33502/

{/* <a href="https://www.flaticon.com/free-icons/energy-saving" title="energy saving icons">Energy saving icons created by rsetiawan - Flaticon</a> */}

const Details = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const slides = [
    {
      title: 'Sustainable Jute Solutions for a Better Tomorrow 🌿',
      description:
        'We are a leading supplier of jute products, committed to providing sustainable and high-quality solutions for various industries. Our mission is to promote eco-friendly alternatives while ensuring customer satisfaction and value.',
    },
    {
      title: 'Eco-friendly Packaging Solutions 🌍',
      description:
        'Our jute products are designed to provide sustainable packaging solutions for a wide range of industries. We focus on quality and environmental impact to meet your needs.',
    },
    {
      title: 'Innovative Jute Products for Every Industry 💡',
      description:
        'Discover our innovative jute products that cater to various industries, offering durability and sustainability. Join us in making a positive impact on the environment.',
    },
  ];

  const handlePrevClick = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    setTimeout(() => setTransitioning(false), 1000); // match the transition duration
  };

  const handleNextClick = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    setTimeout(() => setTransitioning(false), 1000); // match the transition duration
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        backgroundImage: `url(${jutimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '30px',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ position: 'absolute', left: 0 }}>
        <IconButton onClick={handlePrevClick}>
          <ArrowBackIosIcon style={{ color: 'white' }} />
        </IconButton>
      </Box>

      <Box
        sx={{
          textAlign: 'center',
          width: '100%',
          opacity: transitioning ? 0 : 1,
          transition: 'opacity 3s ease-in-out',
        }}
      >
        <Typography
          variant="h3"
          fontWeight="medium"
          sx={{
            fontFamily: 'Poppins',
            fontSize: { xs: '2rem', md: '3rem' },
            textDecoration: 'none',
            marginBottom: '20px',
            color: 'white',
          }}
        >
          {slides[currentIndex].title}
        </Typography>

        <Typography
          variant="body1"
          fontWeight="medium"
          sx={{
            fontFamily: 'Poppins',
            textDecoration: 'none',
            marginBottom: '20px',
            color: 'white',
          }}
        >
          {slides[currentIndex].description}
        </Typography>

        <Button
          variant="outlined"
          color="success"
          onClick={() => navigate('/contacts')}
          style={{ borderRadius: '25px', borderWidth: '3px', color: 'white', borderColor: 'white' }}
        >
          <Typography
            variant="body2"
            fontWeight="medium"
            sx={{
              fontFamily: 'Poppins',
              textDecoration: 'none',
              margin: '10px',
              color: 'white',
            }}
          >
            Contact Us
          </Typography>
        </Button>
      </Box>

      <Box sx={{ position: 'absolute', right: 0 }}>
        <IconButton onClick={handleNextClick}>
          <ArrowForwardIosIcon style={{ color: 'white' }} />
        </IconButton>
      </Box>
    </Box>
  );
};


const WhatWeOffer = () => {
  

 
  return (
    <Box sx={{ margin: '15px' }}>
      {/* Header Row */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '90px' }}>
        <Typography
          variant="h4"
          fontWeight="medium"
          sx={{
            fontFamily: 'Poppins',
            position: 'relative',
            '&::after': {
              content: '""',
              display: 'block',
              width: '50px',
              height: '4px',
              backgroundColor: 'black',
              margin: '8px auto 0', // Adjust the margin to position the underline
              borderRadius: '2px'
            }
          }}
        >
          What We Offer
        </Typography>
      </Box>

      {/* Cards Row */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          marginTop: '30px',
          gap: '20px',
          padding: '10px'
        }}
      >
        <Card
            sx={{
              flex: '1 1 30%',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
               
              },
              '@media (hover: none)': {
                '&:active': {
                  transform: 'scale(1.05)'
                }
              },
              backgroundColor: '#fbe0c3', // Subtle background color
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
              borderRadius: '10px', // Slightly rounded corners
              border: 'none', // Ensure no border
              outline: 'none' // Ensure no outline
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
               
                <Typography variant="h5" fontWeight="medium" sx={{ fontFamily: 'Poppins' }}>
                📦 Jute Fabrics
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ fontFamily: 'Roboto', marginBottom: '10px' }}>
              Versatile and natural jute fabrics suitable for upholstery, home decor, and packaging.
              </Typography>
              <Box
                className="underline"
                sx={{
                  height: '4px',
                  backgroundColor: 'black',
                  borderRadius: '2px',
                  transition: 'width 0.3s ease-in-out',
                  width: '0%'
                }}
              />
            </CardContent>
          </Card>

         
          <Card
           
            sx={{
              flex: '1 1 30%',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
                
              },
              '@media (hover: none)': {
                '&:active': {
                  transform: 'scale(1.05)'
                }
              },
              backgroundColor: '#fbe0c3', // Subtle background color
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
              borderRadius: '10px', // Slightly rounded corners
              border: 'none', // Ensure no border
              outline: 'none' // Ensure no outline
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                
                <Typography variant="h5" fontWeight="medium" sx={{ fontFamily: 'Poppins' }}>
                📦 Jute Products
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ fontFamily: 'Roboto', marginBottom: '10px' }}>
              Biodegradable and sustainable jute items for agricultural use, such as jute nets and sacks.
              </Typography>
              <Box
                className="underline"
                sx={{
                  height: '4px',
                  backgroundColor: 'black',
                  borderRadius: '2px',
                  transition: 'width 0.3s ease-in-out',
                  width: '0%'
                }}
              />
            </CardContent>
          </Card>

          <Card
           
            sx={{
              flex: '1 1 30%',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
               
              },
              '@media (hover: none)': {
                '&:active': {
                  transform: 'scale(1.05)'
                }
              },
              backgroundColor: '#fbe0c3', // Subtle background color
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
              borderRadius: '10px', // Slightly rounded corners
              border: 'none', // Ensure no border
              outline: 'none' // Ensure no outline
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                
                <Typography variant="h5" fontWeight="medium" sx={{ fontFamily: 'Poppins' }}>
                📦 High-Quality Jute Yarn
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ fontFamily: 'Roboto', marginBottom: '10px' }}>
              Strong and reliable jute yarn ideal for industrial applications, crafts, and gardening.
              </Typography>
              <Box
                className="underline"
                sx={{
                  height: '4px',
                  backgroundColor: 'black',
                  borderRadius: '2px',
                  transition: 'width 0.3s ease-in-out',
                  width: '0%'
                }}
              />
            </CardContent>
          </Card>

          <Card
           
            sx={{
              flex: '1 1 30%',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
             
              },
              '@media (hover: none)': {
                '&:active': {
                  transform: 'scale(1.05)'
                }
              },
              backgroundColor: '#fbe0c3', // Subtle background color
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
              borderRadius: '10px', // Slightly rounded corners
              border: 'none', // Ensure no border
              outline: 'none' // Ensure no outline
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                
                <Typography variant="h5" fontWeight="medium" sx={{ fontFamily: 'Poppins' }}>
                📦 Packaging Solutions
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ fontFamily: 'Roboto', marginBottom: '10px' }}>
              Sustainable and biodegradable packaging options to reduce environmental impact.
              </Typography>
              <Box
                className="underline"
                sx={{
                  height: '4px',
                  backgroundColor: 'black',
                  borderRadius: '2px',
                  transition: 'width 0.3s ease-in-out',
                  width: '0%'
                }}
              />
            </CardContent>
          </Card>
        
      </Box>
    </Box>
  );
};


const FeaturedProducts = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/products'); // Replace with your target page path
  };

  return (
    <Box sx={{ margin: '15px' }}>
      {/* Header Row */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '90px' }}>
        <Typography
          variant="h4"
          fontWeight="medium"
          sx={{
            fontFamily: 'Poppins',
            position: 'relative',
            '&::after': {
              content: '""',
              display: 'block',
              width: '50px',
              height: '4px',
              backgroundColor: 'black',
              margin: '8px auto 0', // Adjust the margin to position the underline
              borderRadius: '2px'
            }
          }}
        >
          Featured Products
        </Typography>
      </Box>

      {/* Gallery Row */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap', // Allows items to wrap if they overflow
          gap: '15px', // Adds spacing between items
          marginTop: '30px',
          padding: '10px',
          justifyContent: 'center', // Center items horizontally
        }}
      >
        {[
          { src: jutegunnybag, alt: 'Gunny Bag', label: 'Jute Gunny Bags' },
          { src: jutehessianclothe, alt: 'Jute Hessian Cloth', label: 'Jute Hessian Cloth' },
          { src: juteyarn, alt: 'Jute Yarn 28/1', label: 'Jute Yarn 28/1' },
          { src: juteyarn163, alt: 'Jute Yarn 16/3', label: 'Jute Yarn 16/3' },
          { src: balingtwine, alt: 'Baling Twin Rope', label: 'Baling Twine Rope' },
          { src: propylenebags, alt: 'Polypropylene Bags', label: 'Polypropylene Bags' },
          { src: lenomeshbags, alt: 'LENO Mesh PP Bags', label: 'LENO Mesh PP Bags' },
          { src: boppfilms, alt: 'BOPP Films', label: 'BOPP Films' },
        ].map((product, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              width: '100%',
              maxWidth: '350px', // Adjust the max width as needed
              margin: 'auto',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: '350px', // Fixed height for consistency
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                border: '2px solid white',
                borderRadius: '10px',
              }}
            >
              <img
                src={product.src}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover', // Ensures images cover the box while maintaining aspect ratio
                }}
                alt={product.alt}
              />
            </Box>
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(128, 128, 128, 0.5)',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '10px',
                opacity: 0,
                transition: 'opacity 0.3s ease-in-out',
                '&:hover': {
                  opacity: 1
                },
                '@media (hover: none)': {
                  '&:active': {
                    opacity: 1
                  }
                }
              }}
            >
              <img src={islandjuteimg} alt="Logo" style={{ height: '40px', width: '40px' }} />
              <Typography variant="h5" fontWeight="medium" sx={{ fontFamily: 'Poppins', mb: 2 }}>
                {product.label}
              </Typography>
              <Button variant="contained" color="primary" onClick={handleButtonClick}>
                <Typography variant="body2" sx={{ fontFamily: 'Poppins', mb: 2, margin: '2px' }}>
                  Learn More
                </Typography>
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const Contact = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ backgroundColor: '#333', color: '#fff', padding: '30px' }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={4}>
          <Box>
            <Typography variant="h6" style={{fontFamily:'poppins', marginBottom:'3px'}} gutterBottom>Contact Us</Typography>
            <Typography variant="body2" style={{fontFamily:'poppins', marginBottom:'3px'}} >AJ Traders</Typography>
            <Typography variant="body2" style={{fontFamily:'poppins', marginBottom:'3px'}} >26, Nagalagam Street, Colombo 14, Sri Lanka</Typography>
            <Typography variant="body2" style={{fontFamily:'poppins', marginBottom:'3px'}} >0112 332 087</Typography>
            <Typography variant="body2" style={{fontFamily:'poppins', marginBottom:'3px'}} >Since 1987</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
          <Box>
            <Typography variant="h6" style={{ fontFamily: 'Poppins', marginBottom: '3px' }} gutterBottom>
              Quick Links
            </Typography>
            <Typography variant="body2" style={{ fontFamily: 'Poppins', marginBottom: '3px' }}>
              <a onClick={() =>navigate("/")} style={{ color: 'inherit', textDecoration: 'none', cursor:'pointer' }}>Home</a>
            </Typography>
            <Typography variant="body2" style={{ fontFamily: 'Poppins', marginBottom: '3px' }}>
              <a onClick={() =>navigate("/aboutus")} style={{ color: 'inherit', textDecoration: 'none', cursor:'pointer' }}>About Us</a>
            </Typography>
            <Typography variant="body2" style={{ fontFamily: 'Poppins', marginBottom: '3px' }}>
              <a onClick={() =>navigate("/products")} style={{ color: 'inherit', textDecoration: 'none',cursor:'pointer'  }}>Products</a>
            </Typography>
            <Typography variant="body2" style={{ fontFamily: 'Poppins', marginBottom: '3px' }}>
              <a onClick={() =>navigate("/blog")} style={{ color: 'inherit', textDecoration: 'none',cursor:'pointer' }}>Blog</a>
            </Typography>
            <Typography variant="body2" style={{ fontFamily: 'Poppins', marginBottom: '3px' }}>
              <a onClick={() =>navigate("/contacts")} style={{ color: 'inherit', textDecoration: 'none',cursor:'pointer' }}>Contact</a>
            </Typography>
          </Box>

          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.4781303563914!2d79.87238247443833!3d6.952788718027007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae258580cf88849%3A0x685b0cf7be75f6b3!2sA.J.Traders%20Colombo!5e0!3m2!1sen!2slk!4v1720611603450!5m2!1sen!2slk"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center" style={{ maxWidth: '150px', height: '150px' }}>
            <img src={islandjuteimg} style={{ maxWidth: '100%', height: '100%' }} alt="Island Jute" />
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
        <Typography variant="body2" style={{ fontFamily: 'Poppins', marginBottom: '3px' }}>
          &copy; {new Date().getFullYear()} AJ Traders. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

const AboutUs = () => {

  const navigate = useNavigate();

  const handleAboutUsClick = () => {
    navigate('/aboutus');
  };


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
          <Typography variant="h6" component="div" gutterBottom style={{fontFamily: 'Poppins',}}>
              Welcome to AJ Tradders
          </Typography>
          <Typography variant="body2" color="textSecondary" style={{fontFamily: 'Poppins',}}>
          Established in 1980 and headquartered in the vibrant city of Colombo, AJ Tradders has been a cornerstone in the jute industry for over four decades. 
          Our journey, built on a foundation of expertise and innovation, 
          has positioned us as a trusted provider of eco-friendly packaging solutions to a diverse array of renowned companies worldwide.            
          </Typography>
          
        </CardContent>

        <CardContent style={{marginTop:'5px'}}>
          <Typography variant="h6" component="div" gutterBottom style={{fontFamily: 'Poppins',}}>
          Our Legacy
          </Typography>
          <Typography variant="body2" color="textSecondary" style={{fontFamily: 'Poppins',}}>
          With over 40 years of experience, AJ Tradders has honed the art and science of producing high-quality jute products. 
          Our deep-rooted commitment to sustainability drives us to offer solutions that not only meet the needs of our clients but also contribute positively to the environment. 
          Our legacy is one of dedication, integrity, and a relentless pursuit of excellence.           
          </Typography>
          
        </CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <Button
            variant="outlined"
            color="success"
            onClick={handleAboutUsClick}
            style={{ borderRadius: '25px', borderWidth: '3px' }}
          >
            <Typography
              variant="body2"
              fontWeight="medium"
              sx={{
                fontFamily: 'Poppins',
                textDecoration: 'none',
                margin: '10px',
                color: 'black',
              }}
            >
              Learn More About Us
            </Typography>
          </Button>
        </Box>

        

       

      </Card>
    
    
     

    
    </Box>
    
    </>
    
  );
};


  
  


export { Details, WhatWeOffer, FeaturedProducts,Contact,AboutUs};