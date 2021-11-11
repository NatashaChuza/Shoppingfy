import React from "react";
import { MdShoppingCart } from "react-icons/md";

class ShoppingCart extends React.Component {
  render() {
    return (
      <div className=" amber-background flex center circle-50 border-50 margin-bottom-5">
        <div className="circle-20 absolute border-rad-5 cart-background top-87-vh left-2-vw">
          <p className="relative white font-12 bottom-12-px left-7-px">1</p>
        </div>
        <MdShoppingCart className="icon-size icon-white margin-right-5" />
      </div>
    );
  }
}

export default ShoppingCart;
