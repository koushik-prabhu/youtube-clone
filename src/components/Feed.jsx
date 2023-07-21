import React from 'react'
import { Box, Stack } from '@mui/material'
import Sidebar from './Sidebar'

const Feed = () => {
  return (
    <Stack sx={{
      flexDirection: {sx:"column", md: "row"}
    }}>
      <Box sx={{height: {sx:'auto', md:'89vh'},
      px:{sx:0, md:2}
    }}>
      <Sidebar/>
    </Box>


    </Stack>
  )
}

export default Feed