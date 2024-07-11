import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/HeaderNavbar.css';
import { Card, CardContent, Typography,Hidden, AppBar, Toolbar} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import MailIcon from '@mui/icons-material/Mail';
import islandjuteimg from '../assets/IslandJute.png';



const HeaderNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavLinkClick = (path) => {
    navigate(path);
  };

 

  return (
    <AppBar position="fixed" style={{ backgroundColor: 'transparent', boxShadow: 'none', zIndex: 1000 }}>
    <Toolbar>
      <Card style={{ borderRadius: '20px', textAlign: 'center', width: '100%', marginTop:'10px' }}>
        <CardContent>
        
          <Typography variant="h6" component="div" className="nav-links" style={{ fontFamily: 'Montserrat, sans-serif', display: 'flex', justifyContent: 'center', marginTop:'5px' }}>
            <Hidden mdDown>
              <a
                className={location.pathname === '/clientinv000001.github.io' ? 'active' : ''}
                onClick={() => handleNavLinkClick('/')}
                style={{ textDecoration: 'none', color: 'black', margin: '0 10px' }}
              >
                Home
              </a>
              <a
                className={location.pathname === '/clientinv000001.github.io/products' ? 'active' : ''}
                onClick={() => handleNavLinkClick('/products')}
                style={{ textDecoration: 'none', color: 'black', margin: '0 10px' }}
              >
                Products
              </a>
              
             
            </Hidden>

            <Hidden lgUp>
              <HomeIcon
                className={location.pathname === '/clientinv000001.github.io' ? 'active' : ''}
                onClick={() => handleNavLinkClick('/')}
                style={{ color: location.pathname === '/clientinv000001.github.io' ? 'black' : 'gray', cursor: 'pointer', margin: '0 10px' }}
              />
              <ListAltIcon
                className={location.pathname === '/clientinv000001.github.io/products' ? 'active' : ''}
                onClick={() => handleNavLinkClick('/products')}
                style={{ color: location.pathname === '/clientinv000001.github.io/products' ? 'black' : 'gray', cursor: 'pointer', margin: '0 10px' }}
              />
             
            
            </Hidden>
          </Typography>
        </CardContent>
      </Card>
    </Toolbar>
  </AppBar>
  );
};

export default HeaderNavbar;
