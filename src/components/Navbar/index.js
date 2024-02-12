import React from 'react';
import { Nav, NavIcon, Bars, NavLink } from './Navbar';
import ImgBg from '../../images/apple-logo.png';

const Navbar = ({toggle}) => {
  return (
    <div>
      <Nav>
        <NavLink to="/">Apple</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          {/* <img src={ImgBg}></img> */}
        </NavIcon>
      </Nav>
    </div>
  )
}

export default Navbar;
