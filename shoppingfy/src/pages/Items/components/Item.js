import React from "react";
import Cross from "./Cross"

class Item extends React.Component {
  render() {
      const { name} = this.props;
    return (
      <div className=" height-7-vh width-7-vw white-background border-rad-10 shadow flex margin-right-2">
          <div className="flex four center font-12 grey weight-400">
              <p>{name}</p>
          </div>
          <div className="flex one center">
              <Cross />
          </div>
      </div>
    );
  }
}

export default Item;
