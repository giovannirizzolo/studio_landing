import React from 'react'

import SearchIcon from '../../assets/icons/search.svg'
import UserIcon from '../../assets/icons/user.svg'
import CartIcon from '../../assets/icons/cart.svg'
import { Box } from '@mui/system'

import './NavIcons.scss'

const NavIcons = () => {
  return (
    <Box className="navicons">
        <img src={SearchIcon} alt="" srcset="" />
        <img src={UserIcon} alt="" srcset="" />
        <img src={CartIcon} alt="" srcset="" />
    </Box>
  )
}

export default NavIcons