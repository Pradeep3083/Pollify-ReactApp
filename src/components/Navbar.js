import { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Container, 
  IconButton, 
  Menu, 
  MenuItem,
  useTheme,
  useMediaQuery 
} from '@mui/material';
import { Link } from 'react-router-dom';
import PollIcon from '@mui/icons-material/Poll';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const buttonStyle = {
    transform: 'translateY(0)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    '&:active': {
      transform: 'translateY(0)',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    }
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Dashboard', path: '/dashboard' },
    { text: 'Create Poll', path: '/create-poll' }
  ];

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: '#1a237e',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar 
          disableGutters 
          sx={{ 
            minHeight: { xs: '56px', sm: '64px' },
            justifyContent: 'space-between'
          }}
        >
          {/* Logo and Brand */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <PollIcon sx={{ 
              display: 'flex',
              mr: 1,
              fontSize: { xs: '1.5rem', sm: '2rem' }
            }} />
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                textDecoration: 'none',
                color: 'white',
                fontWeight: 700,
                letterSpacing: { xs: '.1rem', sm: '.2rem' },
                fontSize: { xs: '1.2rem', sm: '1.4rem' }
              }}
            >
              POLLIFY
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile ? (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {menuItems.map((item, index) => (
                <Button 
                  key={index}
                  color="inherit" 
                  component={Link} 
                  to={item.path}
                  variant={item.text === 'Create Poll' ? 'outlined' : 'text'}
                  sx={{ 
                    ...buttonStyle,
                    ...(item.text === 'Create Poll' ? {
                      borderColor: 'white',
                      '&:hover': {
                        ...buttonStyle['&:hover'],
                        backgroundColor: 'white',
                        color: '#1a237e'
                      }
                    } : {
                      '&:hover': {
                        ...buttonStyle['&:hover'],
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      }
                    })
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          ) : (
            // Mobile Navigation
            <Box>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
                sx={{ 
                  ml: 2,
                  '&:hover': { 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)' 
                  }
                }}
              >
                <MenuIcon sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                  sx: {
                    mt: 1.5,
                    backgroundColor: '#1a237e',
                    '& .MuiMenuItem-root': {
                      color: 'white',
                      fontSize: '1rem',
                      py: 1.5,
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      }
                    }
                  }
                }}
              >
                {menuItems.map((item, index) => (
                  <MenuItem 
                    key={index}
                    onClick={handleClose}
                    component={Link}
                    to={item.path}
                  >
                    {item.text}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar; 