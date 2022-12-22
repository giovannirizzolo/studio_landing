import { Divider, Link, MenuItem, Select, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import "./Footer.scss";

import logoBlack from "../../assets/logo_black.png";

import Facebook from '../../assets/icons/facebook.svg'
import Instagram from '../../assets/icons/instagram.svg'
import LinkedIn from '../../assets/icons/linkedin.svg'
import Pinterest from '../../assets/icons/pinterest-light.svg'
import YouTube from '../../assets/icons/youtube-play.svg'

const Footer = () => {
    return (
        <Box className="footer">
            <Box className="footer__up">
                <Box><img src={logoBlack} alt="" /></Box>
                <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                    <Typography fontWeight={700} variant="h6">LINGUA:</Typography>
                    <select name="language" id="">
                        <option value="Italiano">Italiano</option>
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                    </select>
                </Box>
            </Box>
            <Box className="footer__mid">
                <Box className="footer__mid--up">
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <Typography variant="h4">Sede Legale</Typography>
                        <Typography variant="h4">via Dante</Typography>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <Link>Showroom</Link>
                        <Link>Contatti</Link>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <Link>Area professionisti</Link>
                        <Link>Newsroom</Link>
                        
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <Link>Pressroom</Link>
                        <Link>Condizioni di vendita</Link>
                    </Box>
                </Box>
                <Box className="footer__mid--down">
                    <Box>
                        <Typography variant="h4">tel +39 06 200 300</Typography>
                        <Typography variant="h4">info@studio.com</Typography>
                    </Box>
                </Box>
            </Box>
            <Divider></Divider>
            <Box className="footer__sub">
                <Box className="footer__sub--social-icons">
                    <img src={Facebook}  />                    
                    <img src={Instagram}  />                    
                    <img src={LinkedIn}  />                    
                    <img src={Pinterest}  />                    
                    <img src={YouTube}  />                    
                </Box>
                <Box  sx={{
                        display: 'flex',
                        gap: '.5rem'
                    }}>
                    <Link>Cookie policy</Link>
                    <Link>Privacy policy</Link>
                    <Link>Credits</Link>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
