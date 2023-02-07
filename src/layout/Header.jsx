import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as ReactRouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const drawerWidth = 240;
// const navItems = ['Login', 'New User', 'My Plan'];

const theme = createTheme({
  palette: {
    primary: {
      light: '#1de9b6',
      main: '#26a69a',
      dark: '#1a746b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const navBar = {
  background: '#1a746b'
}


const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }} href="/">
        <Link href="/" underline="none" fontSize={"5rem"}>
          <ListItemText primary={"GET IT DONE"} />
        </Link>
      </Typography>
      <Divider />

      {/* this is for the small screen nav bar */}
      <List>
        {/* {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))} */}
        <Link href="/login" underline="none" >
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={"Login"} />
            </ListItemButton>
            
        </Link>
        <Link href="/register" underline="none" >
        <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={"New User"} />
            </ListItemButton>
        </Link>
        <Link href="/toDo" underline="none" >
        <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={"My Plan"} />
            </ListItemButton>
        </Link>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  
  return (
   <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" position="sticky" color={"primary"}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Button component={ReactRouterLink} to="/" key={"Home"} variant="h2" >
              {"GET IT DONE"}
            </Button>
        
          </Typography>
      
           <Box  sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button component={ReactRouterLink} to="/login" key={"Login"} sx={{ color: '#fff' }}>
                {"Login"}
            </Button>
            <Button component={ReactRouterLink} to="/register" key={"New User"} sx={{ color: '#fff' }}>
                {"New User"}
            </Button>
            <Button component={ReactRouterLink} to="/toDo" key={"My Plan"} sx={{ color: '#fff' }}>
                {"My Plan"}
            </Button>
            
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      </Box>
      </ThemeProvider>
    


    
  )
}

export default Header