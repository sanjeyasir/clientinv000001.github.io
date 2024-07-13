import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/HeaderNavbar.css';
import { Card, CardContent, Typography, Hidden, AppBar, Toolbar, IconButton, InputBase} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CallIcon from '@mui/icons-material/Call';
import islandjuteimg from '../assets/AJTraders.png';
import SearchIcon from '@mui/icons-material/Search';



const HeaderNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const handleNavLinkClick = (path) => {
    navigate(path);
  };

  return (
    <AppBar position="fixed" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', boxShadow: 'none', zIndex: 1000 }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a style={{cursor:'pointer', display:'flex',flexDirection:'row', alignItems:'center'}}>
            <img src={islandjuteimg} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
            <Typography variant="h6" style={{fontFamily:'poppins', fontSize:'20px', fontWeight:'medium', color:'black'}}>AJ Tradders</Typography>
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Hidden smDown>
            <Typography variant="h6" component="div" style={{ fontFamily: 'Poppins', display: 'flex', alignItems: 'center' }}>
              <a
                className={location.pathname == '/' ? 'active' : ''}
                onClick={() => handleNavLinkClick('/')}
                style={{ textDecoration: 'none',  color: location.pathname == '/' ? 'black' : 'gray', margin: '0 10px',cursor: 'pointer' }}
              >
                Home
              </a>
              <a
                className={location.pathname == '/products' ? 'active' : ''}
                onClick={() => handleNavLinkClick('/products')}
                style={{ textDecoration: 'none',  color: location.pathname === '/products' ? 'black' : 'gray',cursor: 'pointer', margin: '0 10px' }}
              >
                Products
              </a>
              <a
                className={location.pathname == '/contacts' ? 'active' : ''}
                onClick={() => handleNavLinkClick('/contacts')}
                style={{ textDecoration: 'none', color: location.pathname === '/contacts' ? 'black' : 'gray',cursor: 'pointer', margin: '0 10px' }}
              >
                Contact
              </a>
              <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px', color:'black' }}>
                <InputBase
                  placeholder="Search Google..."
                  inputProps={{ 'aria-label': 'search' }}
                  style={{ backgroundColor: '#f1f3f4', padding: '5px 10px', borderRadius: '5px', marginRight: '10px' }}
                  onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                      window.open(`https://www.google.com/search?q=${event.target.value}`, '_blank');
                    }
                  }}
                />
                <SearchIcon />
              </div>
              <Typography variant="body1" style={{ marginLeft: '20px', color:'black',fontFamily:'poppins' }}>{currentDate}</Typography>
            </Typography>
          </Hidden>
          <Hidden mdUp>
            <HomeIcon
              className={location.pathname === '/' ? 'active' : ''}
              onClick={() => handleNavLinkClick('/')}
              style={{ color: location.pathname === '/' ? 'black' : 'gray', cursor: 'pointer', margin: '0 10px' }}
            />
            <ListAltIcon
              className={location.pathname === '/products' ? 'active' : ''}
              onClick={() => handleNavLinkClick('/products')}
              style={{ color: location.pathname === '/products' ? 'black' : 'gray', cursor: 'pointer', margin: '0 10px' }}
            />
            <CallIcon
              className={location.pathname === '/contacts' ? 'active' : ''}
              onClick={() => handleNavLinkClick('/contacts')}
              style={{ color: location.pathname === '/contacts' ? 'black' : 'gray', cursor: 'pointer', margin: '0 10px' }}
            />
          </Hidden>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderNavbar;
