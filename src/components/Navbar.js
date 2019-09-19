import React from 'react';
import { NavLink} from 'react-router-dom';
import { Menu, } from "semantic-ui-react";
import { WhoAmIConsumer, } from "../providers/WhoAmIProvider";

const Navbar = () => (
  <WhoAmIConsumer>
    { value => (
      <Menu>
        <NavLink to="/">
          <Menu.Item>
            Home
          </Menu.Item>
        </NavLink>
        <NavLink to="/whoami/profile">
          <Menu.Item>
            { value.firstname }
          </Menu.Item>
        </NavLink>
      </Menu>
    )}
  </WhoAmIConsumer>
)

export default Navbar;