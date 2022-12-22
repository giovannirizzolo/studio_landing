import { Box, Link, Typography } from "@mui/material";

import React from "react";

import projects from "../../assets/projects.png";

import "./Projects.scss";
const Projects = () => {
    return (
        <Box className="projects">
            <Box className="projects__main">
                <Box className="projects__main--text">
                <Typography variant="h2" color="#fff">
                    Progetti
                </Typography>
                <Link className="projects__btn">Guarda i progetti</Link>
                </Box>
            </Box>
            <Box display="flex" sx={{marginTop: '1rem', justifyContent: 'space-around', alignItems: 'center'}} className="projects__quote">
                <Box className="w-50" sx={{width: '70%'}}>
                    <Typography variant="hCustom">— Lorem ispsum sit dolor amet neque sumus eiusdem loci sic et simpliciter nemo profeta in patria cum asperium et nox populi exibir animus predatorum neque. Dolor amet neque sumus.</Typography>
                </Box>
                <Box>
                    <Link className="projects__btn--more">Scopri di più</Link>
                </Box>
            </Box>
        </Box>
    );
};

export default Projects;
