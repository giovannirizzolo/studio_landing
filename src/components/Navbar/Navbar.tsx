import { Link } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NavIcons from "../NavIcons/NavIcons";
import "./Navbar.scss";

import logo from "../../assets/logo.png";

const Navbar = () => {
    const navLinks = ["Prodotti", "Collezioni", "Progetti", "Inspiration", "Designer"];
    return (
        <Box className="navbar">
            <Box className="navbar__logo">
                <img src={logo} alt="logo" />
            </Box>
            <Box className="navbar__navlinks">
                {navLinks.map((link, idx) => (
                    <Link
                        sx={{
                            "&:hover": {
                                textDecoration: "underline",
                            },
                        }}
                        key={idx}
                    >
                        {link}
                    </Link>
                ))}
                <NavIcons />
            </Box>
        </Box>
    );
};

export default Navbar;
