import { Box, Link, Typography } from "@mui/material";
import React from "react";
import NewsImageList from "../../components/Cards/NewsImageList";

import "./Collections.scss";

import collections from "../../assets/collections.png";
import inspirations from "../../assets/inspirations.png";

const Collections = () => {
    return (
        <Box className="collections">
            <Box className="collections__cards">
                <Box className="collections__cards--left">
                    <Box textAlign="center">
                        <Typography variant="h2">Collezioni</Typography>
                        <Link className="collections__btn">Scopri</Link>
                    </Box>
                    <img src={collections} alt="" />
                </Box>
                <Box className="collections__cards--right">
                    <img src={inspirations} alt="" />
                    <Box textAlign="center">
                        <Typography variant="h2">Inspirations</Typography>
                        <Link className="collections__btn">Lasciati ispirare</Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Collections;
