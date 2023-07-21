import React from 'react'
import {Paper} from '@mui/material'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


const Search = () => {
  return (
    <Paper
      component="form"
      sx={{borderRadius:20, height:"39px"}}
    >
        <input type="text" placeholder='Search...' className="search-bar"/>
        <IconButton>
          <SearchIcon fontSize='medium'/>
        </IconButton>
    </Paper>
  )
}

export default Search