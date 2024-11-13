import React from 'react'
import Service from './Service'
import Testimonials from './Testimonials'
import Team from './Team.jsx'
import Banner from './Banner.jsx'
import Contact from './Contact.jsx'
import {Box} from '@mui/material'


const Pagecontent = () => {
  return (
    <Box   sx={{background: "linear-gradient(rgb(10, 50, 50),rgb(10, 50, 50))"}}>
        <Testimonials/>
        <Service/>
        <Team/>
        <Banner/>
        <Contact/>
    </Box>
  )
}

export default Pagecontent
