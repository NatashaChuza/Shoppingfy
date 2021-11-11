import React from "react";

import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import YellowBar from "./YellowBar";
import ToolTip from "./ToolTip";
import ShoppingCart from "./ShoppingCart";

class SideNav extends React.Component {
  render() {
    const { navDetails } = this.props;
    return (
      <div className=" flex column">
        <div className=" flex h-33 justify-center align-start ">
          <img src={logo} className="size-small margin-top-5" />
        </div>
        <div className=" flex column h-33 link-container">
          {navDetails.map((el) => {
            return (
              <div className=" flex one justify-space-between align-center ">
                <YellowBar />
                <Link to={el.link} className="link">
                  {el.icon}
                </Link>
                <div className="30"></div>
                <ToolTip label={el.label} />
              </div>
            );
          })}
        </div>
        <div className="flex h-33 justify-center align-end">
          <ShoppingCart/>
        </div>
      </div>
    );
  }
}

export default SideNav;
