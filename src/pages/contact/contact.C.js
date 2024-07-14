
import React, { useState } from 'react';
import { Typography, Box, Card, Grid, Button, CardContent,TextField, Snackbar, SnackbarContent, Icon, Divider, Link } from '@mui/material';
import jutimg from '../../assets/juteimg.jpg';
import jutnaturalresourcesimg from '../../assets/natural-resources.png';// credits:https://www.climatelinks.org/photo-gallery/jute-cultivation
import jutcompostimg from '../../assets/compost.png';// credits:https://www.climatelinks.org/photo-gallery/jute-cultivation
import jutenergyimg from '../../assets/energy-saving.png';// credits:https://www.climatelinks.org/photo-gallery/jute-cultivation
import jutcultureimg from '../../assets/juteculture.jpg';// credits:https://www.climatelinks.org/photo-gallery/jute-cultivation
import { useNavigate } from 'react-router-dom';
import '../../styles/Home.css';
import islandjuteimg from '../../assets/AJTraders.png';
import { green, red } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
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



const ContactDetails = () => {
  const navigate = useNavigate();
    return (
      <Box sx={{ backgroundColor: '#333', color: '#fff', padding: '30px'}}>
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

const useStyles = makeStyles(() => ({
  card: {
    margin: '16px',
    padding: '16px',
    background:'rgba(237,236,235,0.5)',
    borderRadius:'25px'
  },
  heading: {
    marginBottom: '16px',
    fontFamily:'poppins'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  submitButton: {
    marginTop: '16px',
    padding:'10px',
    fontFamily:'poppins',
    borderRadius:'20px',
    borderWidth:'3px'
  },
  snackbarContent: {
    backgroundColor: (snackbarType) =>
      snackbarType === 'success' ? green[600] : red[600],
  },
}));


const ContactForm = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarType, setSnackbarType] = useState('success');

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);
    const action = form.action;

    try {
      const response = await fetch(action, {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSnackbarType('success');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        setSnackbarType('error');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setSnackbarType('error');
    } finally {
      setSnackbarOpen(true);
    }
  };

  return (
    <Card className={classes.card} style={{marginTop:'100px', marginBottom:'80px'}}>
      <CardContent>
        <Typography variant="h5" className={classes.heading}>
          Contact Us
        </Typography>
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xeojooqv"
          method="POST"
          className={classes.form}
        >
          <TextField
            label="Name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone"
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            className={classes.submitButton}
          >
            Submit
          </Button>
        </form>
      </CardContent>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <SnackbarContent
          className={classes.snackbarContent}
          message={
            <Typography variant="body1" style={{ color: '#fff' }}>
              {snackbarType === 'success'
                ? 'Submitted data successfully!'
                : 'Error submitting information.'}
            </Typography>
          }
        />
      </Snackbar>
    </Card>
  );
};

export {Details,ContactDetails,ContactForm};
  