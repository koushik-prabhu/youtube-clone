import { Button, Stack } from '@mui/material'
import React from 'react'
import categories from '../utils/constant'



const Sidebar = () => {
  return (
    <Stack direction="row" sx={{backgroundColor: "black", flexDirection: {md:"column"}, height: {sx:'auto', md:'100%'}}}>
        {categories.map((val) => (
            <Button sx={{marginTop:"15px", color:"white", display:"flex"}} className='category-btn'>
                <span style={{marginRight:"15px"}}>{val.icon}</span>
                <span>{val.name}</span>
            </Button>
        ))}
    </Stack>
  )
}

export default Sidebar