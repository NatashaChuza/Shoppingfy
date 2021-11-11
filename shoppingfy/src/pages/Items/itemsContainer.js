import React from "react";

import Input from "../common/Input"
import { MdSearch } from "react-icons/md";

class Items extends React.Component {
  render() {
    return (
      <div className=" items-background items-layout">
        <div className=" flex ">
          <div className=" flex three justify-center align-center">
            <div className=" width-30-vw height-10-vh">
             <p className="grey weight-700 font-26 margin-0 padding-0"><span className="amber weight-700 font-26">Shoppinfy</span> allows you to take your shopping list wherever you go</p>
            </div>
          </div>
          <div className="flex two align-center">
            <Input icon={<MdSearch className="icon-size icon-color"/>}/>
          </div>
        </div>
        <div className=""></div>
      </div>
    );
  }
}

export default Items;
