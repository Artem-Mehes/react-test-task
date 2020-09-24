import React from "react";

import { Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = ({ navItems }) => {
  return (
    <header className="header">
        <img 
            src={require("../images/logo.svg")} 
            alt="logo" 
            width="165"
        />

        <nav>
            <Nav as="ul">
                {Object.keys(navItems).map(item => {
                    return (
                        <NavItem key={item} as="li">
                            <NavLink
                                exact
                                to={navItems[item]}
                                activeClassName="selected"
                            >
                                {item}
                            </NavLink>
                        </NavItem>
                    )
                })}
            </Nav>
        </nav>
    </header>
  );
}

export default Header;
