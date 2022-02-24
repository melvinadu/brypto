import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          {/* <NavLink to="/" activeStyle>
          <img className="logo" src="logo.png" alt="BigCo Inc. logo"/>
          </NavLink> */}
          <NavLink to="/" activeStyle>
            <span>Cryptoken</span>
          </NavLink>
          {/* <NavLink to='/about' activeStyle>
            About
          </NavLink> */}
          {/* <NavLink to='/events' activeStyle>
            Events
          </NavLink>
          <NavLink to='/annual' activeStyle>
            Annual Report
          </NavLink>
          <NavLink to='/team' activeStyle>
            Teams
          </NavLink> */}

          <NavLink to="/sign-up" activeStyle>
            Search
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            News
          </NavLink>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
