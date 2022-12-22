import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from '@mui/material'
import { borderColor } from '@mui/system'
import React from 'react'

import './Newsletter.scss'

const Newsletter = () => {

  return (
    <Box sx={{
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#474E4B',
        padding: '5rem'
    }}>
        <Box sx={{display:'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column', gap: '2rem'}}>
            <Typography variant="h2" color="white">Rimani informato</Typography>
            <Typography variant="subtitle" color="white">Iscriviti alla newsletter e ricevi aggiornamenti su prodotti, eventi e ispirazioni.</Typography>

            
            <Box sx={{
                display: 'flex',
                border: 1,
                borderColor: "#fff",
                width: '100%'
            }}>
            <input placeholder="Indirizzo e-mail" className="newsletter__input" sx={{
                "&:active": {
                    borderColor: 'white'
                },
                paddingBlock: 1,
                borderRight: 1,
                borderColor: "#fff",
                backgroundColor: 'transparent',
            }} label="Indirizzo e-mail" variant="standard"/>
            <Button color="primary" sx={{ letterSpacing: 2, color: '#fff'}}>Iscriviti</Button>
            </Box>
            <FormGroup>
            <FormControlLabel control={<Checkbox sx={{color: 'white'}}defaultChecked />} label={<Typography variant="h6" color="#fff">Acconsento al trattamento dei dati personali come da informativa </Typography>} />
            </FormGroup> 
        </Box>
    </Box>
  )
}

export default Newsletter