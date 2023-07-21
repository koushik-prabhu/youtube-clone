import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {Box} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import Search from './Search';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{backgroundColor:"black"}}>
        <Toolbar>
          <IconButton
            color="error"
            sx={{ mr: 1 }}
          >
            <SmartDisplayIcon fontSize='large'/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            YouTube
          </Typography>
          <Search/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}