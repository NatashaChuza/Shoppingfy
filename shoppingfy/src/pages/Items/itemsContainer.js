import React from "react";

import Input from "../common/Input";
import { MdSearch } from "react-icons/md";
import Item from "./components/Item";

class Items extends React.Component {
  items = [
    {
      listName: "Fruit and vegetables",
      items: [
        "Avocado",
        "Banana",
        "Bunch of carrots 5pcs",
        "Watermelon",
        "onion",
        "lettuce",
        "garlic"
      ],
    },
    {
      listName: "Meat and Fish",
      items: [
        "Mince Meat 3kg",
        "T-Bone 2kg",
        "Salmon 1kg",
        "Chicken breats 500g",
        "Pork 3kg",
        "sushi",
        "prawns",
        "lobster"
      ],
    },
    {
      listName: "Beverages",
      items: ["Wine", "Stir-fry sauce", "soy sauce"],
    },
  ];

  returnMulitple = (array) => {
    let div = (
      <div className="  height-auto min-10 flex">
        {array.map((item) => {
          return <Item name={item}/>;
        })}
      </div>
    );
    return div;
  };

  dynamicRender = (array) => {
    let loop = true;
    let loopCount = 0;
    let arrayCopy = array;
    let newArr = [];
    let toReturn = [];
    while (loop) {
      if (arrayCopy.length > 4) {
        newArr = array.slice(0, 4);
        arrayCopy = array.slice(4);
        let tempComponent = this.returnMulitple(newArr);
        toReturn.push(tempComponent)
      } else {
        newArr = arrayCopy;
        let tempComponent = this.returnMulitple(newArr);
        toReturn.push(tempComponent)
        loop = false;
      }
    }
    console.log(toReturn)
      // return toReturn.map( item => {
      //   return item
      // })
  };
  render() {
    return (
      <div className=" items-background items-layout">
        <div className=" flex ">
          <div className=" flex three justify-center align-center">
            <div className=" width-30-vw height-10-vh">
              <p className="grey weight-700 font-26 margin-0 padding-0">
                <span className="amber weight-700 font-26">Shoppinfy</span>{" "}
                allows you to take your shopping list wherever you go
              </p>
            </div>
          </div>
          <div className="flex two align-center">
            <Input icon={<MdSearch className="icon-size icon-color" />} />
          </div>
        </div>
        <div className=" flex column padding-left-right-10 margin-top-5">
          {this.items.map((item) => {
            return (
              <div className="min-15 height-auto flex column margin-left-6  width-80">
                <div className=" height-3 margin-bottom-10-px">
                  <p className="padding-0 margin-0 grey weight-700">
                    {item.listName}
                  </p>
                </div>
                <div className=" height-100 flex column ">
                  { this.dynamicRender(item.items)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Items;
