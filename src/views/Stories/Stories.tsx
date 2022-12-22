import { Divider, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import './Stories.scss'

import stories1 from '../../assets/stories1.png'
import stories2 from '../../assets/stories2.png'
import stories3 from '../../assets/stories3.png'
const Stories = () => {
  return (
    <Box className="stories">
            <Box className="stories__title">
                <Typography
                 variant="h2">Stories</Typography>
                <Link className="stories__title-link" sx={{ cursor: "pointer" }}>
                    Scopri le stories
                </Link>
            </Box>
            <Box className="stories__cards">
                <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'space-between'}}>
                    <img src={stories1} alt="" />
                    <Typography variant="h3">Lorem ipsum sit dolor amet</Typography>
                    <Typography variant="subtitle">Realismo poetico e design senza tempo ispirano ogni collezione.</Typography>
                </Box>
                <Divider orientation='vertical' flexItem></Divider>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'space-between'}}>
                    <img src={stories2} alt="" />
                    <Typography variant="h3" >Lorem ipsum sit dolor amet</Typography>
                    <Typography variant="subtitle">Realismo poetico e design senza tempo ispirano ogni collezione.</Typography>
                </Box>
                <Divider orientation='vertical' flexItem></Divider>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'space-between'}}>
                    <img src={stories3} alt="" />
                    <Typography variant="h3" >Lorem ipsum sit dolor amet</Typography>
                    <Typography variant="subtitle">Realismo poetico e design senza tempo ispirano ogni collezione.</Typography>
                </Box>
            </Box>
        </Box>
  )
}

export default Stories