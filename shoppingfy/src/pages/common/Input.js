import React from "react";

class Input extends React.Component {
  render() {
    const {icon} = this.props;
    return (
      <div className="width-19-vw height-6-vh border-rad-10 flex shadow white-background">
        <div className="height-100 width-20 flex center">{icon}</div>
        <input className="border-0 outline-0 height-99 width-80 border-rad-5"></input>
      </div>
    );
  }
}

export default Input;
