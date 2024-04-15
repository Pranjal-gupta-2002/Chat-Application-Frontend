import React from 'react'
import AppLayout from '../components/layout/AppLayout'
import { Typography,Box } from '@mui/material'

const Home = () => {
  return (
    <Box bgcolor={"rgba(0,0,0,0.1)"} height={'100%'}>
      <Typography p={'2rem'} varient='h5' textAlign={'center'} fontWeight={'bold'}>Select a Friend to chat</Typography>
    </Box>
  )
}

export default AppLayout()(Home)