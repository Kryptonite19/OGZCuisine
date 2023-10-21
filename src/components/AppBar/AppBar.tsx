import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import CartButton from './CartButton'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const drawerWidth = 240
const navItems = ['Home', 'About', 'Contact']

const DrawerAppBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const navigate = useNavigate()
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const handleLogoClick = () => {
    console.log('Logo Clicked')
  }

  const handleNavClick = (item: string) => {
    console.log('ITEM NAME : ', { item })
    if (item === 'Home') {
      navigate('/')
    } else {
      navigate(`/${item}`)
    }
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="sticky"
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleLogoClick}
              sx={{ mr: 2, display: { sm: 'block' } }}
              disableRipple={true}
            >
              <img src="/logoorg.svg" height={70} width={200} />
            </IconButton>
            {navItems.map((item) => (
              <Button
                key={item}
                onClick={() => handleNavClick(item)}
                sx={{ color: '#fff' }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <CartButton />
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  )
}
export default DrawerAppBar
