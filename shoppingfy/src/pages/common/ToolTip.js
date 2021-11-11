import React from "react";

class ToolTip extends React.Component {
  render() {
      const { label } = this.props;
    return (
      <div className=" height-3 width-60-px grey-background absolute left-30 border-rad-5 appear">
          <p className="absolute white top-12-px-neg font-12 left-10-px">{label}</p>
        <div className="triangle"></div>
      </div>
    );
  }
}

export default ToolTip;
