import React, { useState } from 'react'
import { AppBar, Box, Toolbar, Typography, IconButton,Drawer } from '@mui/material'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { Link } from 'react-router-dom';
import "../../styles/NavbarStyle.css";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} >
      <Typography
        color={'#BDC3C7'}
        variant='h6'
        component='div'
        sx={{ flexGrow: 1,my:2  }} >
        <CardGiftcardIcon />
        Gift webite
      </Typography>
      <ul className='mobilenav-menu'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </Box>
  )
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{ mr: 2, display: { sm: "none" } }} onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Typography color={'#BDC3C7'} variant='h5' component='div' sx={{ flexGrow: 1 }} >
              <CardGiftcardIcon />
              Giftsella
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: "block" } }}>
              <ul className='nav-menu'>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} 
          sx={{ display: { xs: 'block', sm: "none" } }}>
            {drawer}
          </Drawer>
        </Box>
        <Toolbar />
      </Box>
    </>
  )
}

export default Navbar
