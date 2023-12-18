
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Badge, ListItemText } from '@mui/material';
import { useContext } from 'react';
import { MyContext } from '../mycontext';
import Drawer from '@mui/material/Drawer';
import { useNavigate } from 'react-router-dom';
import {List,ListItem} from '@mui/material';
import { useState } from 'react';

const pages = [
  {
    title:'home',
    path:'/'
  },
  {
    title:'Todo-List',
    path:'/todoList'
  },
  {
    title:'Fetch-Data',
    path:'/fetchData'
  },
  {
    title:'products',
    path:'/products'
  },
  {
    title:'aboutUs',
    path:'/aboutus'
  },
  {
    title:'contact',
    path:'/contact'
  },
];

function TopAppBar(){


  const {context} = useContext(MyContext)

  const navigte = useNavigate()

  const [open,setOpen] = useState(false)


  return(
    <>
       <AppBar position="static" sx={{backgroundColor:'white',color:'black'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Task
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={()=>setOpen(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Task
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={()=>navigte(page.path)}
                sx={{ my: 2, display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Badge badgeContent={context.length} color="primary">
              <ShoppingCartCheckoutIcon sx={{cursor:'pointer'}} 
              onClick={()=>navigte('/cart')}
              />
            </Badge>
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Drawer 
    anchor='left'
    open={open}
    onClose={()=>setOpen(false)}
    >
     <Box
      sx={{ width:250 }}
      role="presentation"
      onKeyDown={()=>setOpen(false)}
    >
       <List>
        {
          pages.map((p,i)=>{

             return <ListItem key={i} 
             onClick={()=>{

              setOpen(false)

              navigte(p.path)

             }}
             >
              <ListItemText>{p.title}</ListItemText>
             </ListItem>

          })
        }
       </List>
    </Box>
    </Drawer>
    </>
  )

}

export default TopAppBar