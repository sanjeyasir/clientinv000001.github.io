
import React, { useState } from 'react';
import { Typography, Box, Card, Grid, Button, CardContent,TextField,Icon, Divider, Link } from '@mui/material';
import jutimg from '../../assets/juteimg.jpg';
import jutnaturalresourcesimg from '../../assets/natural-resources.png';// credits:https://www.climatelinks.org/photo-gallery/jute-cultivation
import jutcompostimg from '../../assets/compost.png';// credits:https://www.climatelinks.org/photo-gallery/jute-cultivation
import jutenergyimg from '../../assets/energy-saving.png';// credits:https://www.climatelinks.org/photo-gallery/jute-cultivation
import jutcultureimg from '../../assets/juteculture.jpg';// credits:https://www.climatelinks.org/photo-gallery/jute-cultivation
import { useNavigate } from 'react-router-dom';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import '../../styles/Home.css';
import islandjuteimg from '../../assets/IslandJute.png';
{/* <a href="https://www.flaticon.com/free-icons/energy-saving" title="energy saving icons">Energy saving icons created by rsetiawan - Flaticon</a> */}


const Details = () => {
  const navigate = useNavigate();

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      const query = event.target.value;
      window.open(`https://www.google.com/search?q=${query}`, '_blank');
    }
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <Box 
      sx={{ 
        position: 'relative', 
        height: '100vh', 
        backgroundImage: `url(${jutimg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '30px'
      }}
    >
      <Card 
        sx={{ 
          maxWidth: { xs: '100%', md: '40%' }, 
          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
          borderRadius: '10px',
          padding: '20px'
        }}
      >
        <CardContent>
          <Typography 
            variant="h4" 
            fontWeight="medium" 
            sx={{ 
              fontFamily: 'Poppins', 
              fontSize: { xs: '2rem', md: '3rem' }, 
              color: 'black', 
              textDecoration: 'none' 
            }}
          >
            Sustainable Jute Solutions for a Better Tomorrow 🌿
          </Typography>

          <Typography 
            variant="body2" 
            fontWeight="medium" 
            sx={{ 
              fontFamily: 'Poppins',
              color: 'black', 
              textDecoration: 'none',
              marginBottom: '20px' 
            }}
          >
            We are a leading supplier of jute products, committed to providing sustainable and high-quality solutions for various industries. 
            Our mission is to promote eco-friendly alternatives while ensuring customer satisfaction and value.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '10px' }}>
            <TextField 
              variant="outlined" 
              placeholder="Google Search" 
              onKeyPress={handleSearch} 
              fullWidth 
              sx={{ marginBottom: { xs: '10px', md: 0 },fontFamily: 'Poppins',textDecoration: 'none',}}
            />
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleContactClick} 
              fullWidth
            >
              <Typography 
            variant="body2" 
            fontWeight="medium" 
            sx={{ 
              fontFamily: 'Poppins',
              color: 'black', 
              textDecoration: 'none',
              margin:'10px',
              color:'white'
            }}
          >
             Contact Us
           
          </Typography>
             
            </Button>
          </Box>
        </CardContent>
      </Card>
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
                '& .underline': {
                  width: '100%'
                }
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
                '& .underline': {
                  width: '100%'
                }
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
                '& .underline': {
                  width: '100%'
                }
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
                '& .underline': {
                  width: '100%'
                }
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

const SuccessStory = () => {
  const handleImageClick = () => {
    window.open('https://www.flaticon.com/packs/renewable-energy-16947170', '_blank');
  };

  return (
    <Box 
      sx={{ 
        position: 'relative', 
        height: '500px',
        marginTop: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {/* Background Image */}
      <Box 
        sx={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          overflow: 'hidden',
          '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }
        }}
      >
        <img src={jutcultureimg} alt="Jute Products" />
      </Box>

      {/* Content Box */}
      <Box
        sx={{ 
          position: 'relative', 
          zIndex: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          padding: { xs: '5px', md: '20px' },
          width: { xs: '90%', md: '60%' },
          maxHeight: { xs: '95%', md: '60%' },
          
        }}
      >
        <CardContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Typography 
              variant="h6" 
              fontWeight="medium" 
              sx={{ 
                fontFamily: 'Poppins',
                color: 'black', 
                textDecoration: 'none' 
              }}
            >
              Our Achievements
            </Typography>
            {/* Achievements Section */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '20px' }}>
              {/* Achievement 1 */}
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Card sx={{ width: '40px', height: '40px', padding: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                  <img
                    src={jutenergyimg}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', border: '2px solid white', borderRadius: '10px' }}
                    alt="Featured Product"
                    onClick={handleImageClick}
                  />
                </Card>
                <Typography 
                  variant="h6" 
                  fontWeight="medium" 
                  sx={{ 
                    fontFamily: 'Poppins',
                    color: 'black', 
                    textDecoration: 'none' 
                  }}
                >
                  500K+ Meters 
                </Typography>
                <Typography 
                  variant="body2" 
                  fontWeight="medium" 
                  sx={{ 
                    fontFamily: 'Poppins',
                    color: 'black', 
                    textDecoration: 'none' 
                  }}
                >
                  Jute Fabric Delivered
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' }, marginX: '10px' }} />
              {/* Achievement 2 */}
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Card sx={{ width: '40px', height: '40px', padding: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                  <img
                    src={jutcompostimg}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', border: '2px solid white', borderRadius: '10px' }}
                    alt="Featured Product"
                    onClick={handleImageClick}
                  />
                </Card>
                <Typography 
                  variant="h6" 
                  fontWeight="medium" 
                  sx={{ 
                    fontFamily: 'Poppins',
                    color: 'black', 
                    textDecoration: 'none' 
                  }}
                >
                  200K+ Units 
                </Typography>
                <Typography 
                  variant="body2" 
                  fontWeight="medium" 
                  sx={{ 
                    fontFamily: 'Poppins',
                    color: 'black', 
                    textDecoration: 'none' 
                  }}
                >
                  Custom Jute Products
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' }, marginX: '10px' }} />
              {/* Achievement 3 */}
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Card sx={{ width: '40px', height: '40px', padding: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                  <img
                    src={jutnaturalresourcesimg}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', border: '2px solid white', borderRadius: '10px' }}
                    alt="Featured Product"
                    onClick={handleImageClick}
                  />
                </Card>
                <Typography 
                  variant="h6" 
                  fontWeight="medium" 
                  sx={{ 
                    fontFamily: 'Poppins',
                    color: 'black', 
                    textDecoration: 'none' 
                  }}
                >
                  Up to 95% 
                </Typography>
                <Typography 
                  variant="body2" 
                  fontWeight="medium" 
                  sx={{ 
                    fontFamily: 'Poppins',
                    color: 'black', 
                    textDecoration: 'none' 
                  }}
                >
                  Customer Retention Rate
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Box>
    </Box>
  );
};

const FeaturedProducts = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/your-target-page'); // Replace with your target page path
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
          flexDirection: 'row',
          justifyContent: 'space-between',
          overflowX: 'auto',
          marginTop: '30px',
          padding: '10px',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        <Box
           
            sx={{
              minWidth: '300px',
              margin: '0 10px',
              position: 'relative',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)'
              },
              '@media (hover: none)': {
                '&:active': {
                  transform: 'scale(1.05)'
                }
              }
            }}
          >
            <img
              src={jutimg}
              style={{ width: '100%', height: '100%', objectFit: 'cover', border: '2px solid white', borderRadius: '10px' }}
              alt="Featured Product"
            />
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
              <Typography variant="h5" fontWeight="medium" sx={{ fontFamily: 'Poppins', mb: 2 }}>
                Product Title
              </Typography>
              <Button variant="contained" color="primary" onClick={handleButtonClick}>
                <Typography variant="body2"  sx={{ fontFamily: 'Poppins', mb: 2, margin: '2px'}}>
                Learn More
                </Typography>
                
              </Button>
            </Box>
          </Box>
          <Box
        
            sx={{
              minWidth: '300px',
              margin: '0 10px',
              position: 'relative',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)'
              },
              '@media (hover: none)': {
                '&:active': {
                  transform: 'scale(1.05)'
                }
              }
            }}
          >
            <img
              src={jutimg}
              style={{ width: '100%', height: '100%', objectFit: 'cover', border: '2px solid white', borderRadius: '10px' }}
              alt="Featured Product"
            />
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
              <Typography variant="h5" fontWeight="medium" sx={{ fontFamily: 'Poppins', mb: 2 }}>
                Product Title
              </Typography>
              <Button variant="contained" color="primary" onClick={handleButtonClick}>
              <Typography variant="body2"  sx={{ fontFamily: 'Poppins', mb: 2, margin: '2px'}}>
                Learn More
                </Typography>
                
              </Button>
            </Box>
          </Box>
          <Box
          
            sx={{
              minWidth: '300px',
              margin: '0 10px',
              position: 'relative',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)'
              },
              '@media (hover: none)': {
                '&:active': {
                  transform: 'scale(1.05)'
                }
              }
            }}
          >
            <img
              src={jutimg}
              style={{ width: '100%', height: '100%', objectFit: 'cover', border: '2px solid white', borderRadius: '10px' }}
              alt="Featured Product"
            />
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
              <Typography variant="h5" fontWeight="medium" sx={{ fontFamily: 'Poppins', mb: 2 }}>
                Product Title
              </Typography>
              <Button variant="contained" color="primary" onClick={handleButtonClick}>
              <Typography variant="body2"  sx={{ fontFamily: 'Poppins', mb: 2, margin: '2px'}}>
                Learn More
                </Typography>
              </Button>
            </Box>
          </Box>
      </Box>
    </Box>
  );
};



const Contact = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: '#fff', padding: '30px' }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={4}>
          <Box>
            <Typography variant="h6" gutterBottom>Contact Us</Typography>
            <Typography variant="body2">AJ Traders</Typography>
            <Typography variant="body2">26, Nagalagam Street, Colombo 14, Sri Lanka</Typography>
            <Typography variant="body2">0112 332 087</Typography>
            <Typography variant="body2">Since 1987</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <Typography variant="h6" gutterBottom>Quick Links</Typography>
            <Box>
              <Link href="/" color="inherit" underline="none">Home</Link><br />
              <Link href="/products" color="inherit" underline="none">Products</Link><br />
              <Link href="/blog" color="inherit" underline="none">Blog</Link><br />
              <Link href="/contact" color="inherit" underline="none">Contact</Link>
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
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} AJ Traders. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

  
  


export { Details, WhatWeOffer, SuccessStory, FeaturedProducts,Contact};