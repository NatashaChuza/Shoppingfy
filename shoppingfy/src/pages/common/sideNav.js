import React from "react";

import { Link } from "react-router-dom";

class SideNav extends React.Component {
  render() {
    const { navDetails } = this.props;
    return (
      <div className="border flex column">
        {navDetails.map((el) => {
          return (
            <Link to={el.link} className="link">
              <div className="">
                <div className="">
                  {el.icon}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default SideNav;
