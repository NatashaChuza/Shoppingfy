import React from "react";

import { Switch, Route } from "react-router-dom";

import SideNav from "./common/sideNav";
import Items from "./Items/itemsContainer";
import AddItem from "./AddItem/AddItem";
import Dashboard from "./Dashboard/dashboardContainer";

import { MdFormatListBulleted, MdAddChart, MdReplay } from "react-icons/md";
import ShoppingList from "./ShoppingLists/shoppinglistContainer";

class MainPage extends React.Component {
  navDetails = [
    {
      link: "/items",
      icon: <MdFormatListBulleted className="icon-size icon-color" />,
      label: "items"
    },
    {
      link: "/shoppingLists",
      icon: <MdAddChart className="icon-size icon-color" />,
      label: "lists"
    },
    {
      link: "/statistics",
      icon: <MdReplay className="icon-size icon-color" />,
      label: "statistics"
    },
  ];

  render() {
    return (
      <div className="main_layout height_100 width_100">
        <SideNav navDetails={this.navDetails} />
        <Switch>
          <Route path="/items" component={Items} />
          <Route path="/shoppingLists" component={ShoppingList} />
          <Route path="/statistics" component={Dashboard} />
        </Switch>

        <AddItem />
      </div>
    );
  }
}

export default MainPage;
