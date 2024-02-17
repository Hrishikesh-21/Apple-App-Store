import React from 'react';
import { Nav, NavIcon, Bars, NavLink } from './Navbar';
import ImgBg from '../../images/apple-logo.png';
import Sidebar from '../Sidebar';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Navbar = ({ toggle }) => {
  return (
    <div>
      <Nav>
        <NavLink to="/">Apple</NavLink>
  
        <NavIcon >
   
          <p>Menu</p>
          <AddShoppingCartIcon
            onClick={toggle}
          ></AddShoppingCartIcon>
      

        </NavIcon>
      </Nav>
    </div>
  )
}

export default Navbar;
