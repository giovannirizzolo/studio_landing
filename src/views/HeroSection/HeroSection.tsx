import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";

import "./HeroSection.scss";

const HeroSection = () => {
    return (
        <Box className="hero">
            <Box className="hero__main-content">
                <Box className="hero__main-text">
                    <Typography
                        variant="subtitle"
                        align="center"
                        sx={{
                            fontWeight: 500,
                            letterSpacing: 2.25,
                        }}
                    >
                        Lorem ipsum sit
                    </Typography>
                    <Typography variant="h1" align="center">
                        Eiusdem loci,<br/>
                        sit dolor amet neque
                    </Typography>
                    <Button
                        className="hero__main-btn"
                        sx={{
                            textDecoration: "underline",
                            background: "transparent",
                            letterSpacing: 2.25,
                            borderRadius: 0,
                            fontSize: 15,
                        }}
                    >
                        Scopri la collezione
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default HeroSection;
