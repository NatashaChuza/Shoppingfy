import React from "react";

import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import YellowBar from "./YellowBar";
import ToolTip from "./ToolTip";

class SideNav extends React.Component {
  render() {
    const { navDetails } = this.props;
    return (
      <div className="border flex column padding-top-5">
        <div className="border flex h-33 justify-center align-start ">
          <img src={logo} className="size-small" />
        </div>
        <div className="border flex column h-33">
          {navDetails.map((el) => {
            return (
              <div className="border flex one justify-space-between align-center">
                <YellowBar/>
                <Link to={el.link} className="link">
                  {el.icon}
                </Link>
                <div className="30"></div>
                <ToolTip label={el.label}/>
              </div>
            );
          })}
        </div>
        <div className="border flex h-33"></div>
      </div>
    );
  }
}

export default SideNav;
