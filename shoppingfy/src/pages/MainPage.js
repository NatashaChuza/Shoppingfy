import React from "react";

import { Switch, Route } from "react-router-dom";

import SideNav from "./common/sideNav";
import Items from "./Items/itemsContainer";
import AddItem from "./AddItem/AddItem";
import Dashboard from "./Dashboard/dashboardContainer";

import { MdHome, MdAssignment, MdAddBox } from "react-icons/md";
import ShoppingList from "./ShoppingLists/shoppinglistContainer";

class MainPage extends React.Component {
  navDetails = [
    {
      link: "/items",
      icon: <MdHome className="dashboard-icon" />,
    },
    {
      link: "/shoppingLists",
      icon: <MdAssignment className="dashboard-icon" />,
    },
    {
      link: "/statistics",
      icon: <MdAddBox className="dashboard-icon" />,
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
