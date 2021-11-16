import React from "react";

class Cross extends React.Component {
  render() {
    return (
      <div className=" height-100 width-100 flex center ">
        <div className=" border-left height-2 width-1 relative left-2-px"></div>
        <div className=" border-left height-2 width-1 rotate relative"></div>
      </div>
    );
  }
}

export default Cross;
