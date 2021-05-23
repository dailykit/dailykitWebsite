import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages

/* start meal kit brand */

import BakeryPage from "./pages/startMeal/bakery";
import Cloud_kitchen from "./pages/startMeal/cloud_kitchen";
import Grocers from "./pages/startMeal/Grocers";
import MealkitStartups from "./pages/startMeal/MealkitStartups";
import Franchisees from "./pages/startMeal/Franchisees";
import What_is_a_mealkit from "./pages/startMeal/What_is_a_mealkit";
import For_Restaurants from "./pages/startMeal/For_Restaurants";
import QSR_Cafes from "./pages/startMeal/QSR_Cafes";
import Meal_kit_packaging from "./pages/startMeal/Meal_kit_packaging";
import HowtodecideyourMealKitMenu from "./pages/startMeal/HowtodecideyourMealKitMenu";
import HowtopriceyourMealKits from "./pages/startMeal/HowtopriceyourMealKits";
import HowtopromoteyourMealKits from "./pages/startMeal/HowtopromoteyourMealKits";
import HowtosellyourMealKits from "./pages/startMeal/HowtosellyourMealKits";
import Start_mealkit_brands from "./pages/startMeal/Start_mealkit_brands";
import RecipeProvider from "./pages/startMeal/RecipeProvider";
import Coseller from "./pages/startMeal/Coseller";
import Copacker from "./pages/startMeal/Copacker";
import DeliveryPartner from "./pages/startMeal/DeliveryPartner";
// homepage
import Homepage from "./pages/homepage";
// sells
import OnDemandStorepage from "./pages/ondemandstorepage";
import SubscriptionStorepage from "./pages/subscriptionstorepage";
import MenuManagementpage from "./pages/menumanagement";
// ScheduleMeeting
import ScheduleMeeting from "./components/homepage/ScheduleMeeting";
// marketpage
import Marketpage from "./pages/marketpage";
//servepage
import weservepage from "./pages/weservepage";
//operatepage
import Orderdashboardpage from "./pages/orderdashboardpage";
import Orderroutingpage from "./pages/orderroutingpage";
import Orderfulfillmentpage from "./pages/orderfulfillmentpage";
import Portioncontrolpage from "./pages/portioncontrolpage";
import Packagingmanagementpage from "./pages/packagingmangement";
import GroctaurantCaseStudy from "./pages/startMeal/GroctaurantCaseStudy";
import OurPhilosophyPage from "./pages/startMeal/Ourphilosophy";

// routing

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/ScheduleDemo" component={ScheduleMeeting} />
            {/* start meal kit brand */}
            <Route path="/bakerypage" component={BakeryPage} />
            <Route path="/Cloud_kitchen" component={Cloud_kitchen} />
            <Route path="/enterprise/grocers" component={Grocers} />
            <Route
              path="/enterprise/meal-kit-startups"
              component={MealkitStartups}
            />
            <Route
              path="/enterprise/how-dailykit-can-help-franchisees"
              component={Franchisees}
            />
            <Route
              path="/restaurants/fine-dine-restaurants"
              component={For_Restaurants}
            />
            <Route path="/restaurants/cafes" component={QSR_Cafes} />
            <Route
              path="/case-study/Groctaurant-Case-Study"
              component={GroctaurantCaseStudy}
            />
            <Route path="/do-more/Recipe-Provider" component={RecipeProvider} />
            <Route path="/do-more/Co-Packer" component={Copacker} />
            <Route path="/do-more/Co-Seller" component={Coseller} />
            <Route
              path="/do-more/Delivery-Partner"
              component={DeliveryPartner}
            />
            <Route
              path="/start-meal-kit-brands/what-is-meal-kit"
              component={What_is_a_mealkit}
            />
            <Route
              path="/start-meal-kit-brands/how-to-start-a-Meal-Kit-Service"
              component={Start_mealkit_brands}
            />
            <Route
              path="/meal-kit-guides/meal-kit-packaging"
              component={Meal_kit_packaging}
            />
            <Route
              path="/meal-kit-guides/meal-kit-guides/how-to-decide-your-meal-kits"
              component={HowtodecideyourMealKitMenu}
            />{" "}
            <Route
              path="/meal-kit-guides/meal-kit-guides/how-to-price-your-meal-kits"
              component={HowtopriceyourMealKits}
            />{" "}
            <Route
              path="/meal-kit-guides/meal-kit-guides/how-to-promote-your-meal-kits"
              component={HowtopromoteyourMealKits}
            />{" "}
            <Route
              path="/meal-kit-guides/meal-kit-guides/how-to-sell-your-meal-kits"
              component={HowtosellyourMealKits}
            />
            {/* operate */}
            <Route
              path="/operate/centralized-order-dashboard"
              component={Orderdashboardpage}
            />
            <Route
              path="/operate/order-routing-and-kitchen-display-system"
              component={Orderroutingpage}
            />
            <Route
              path="/operate/order-fulfillment"
              component={Orderfulfillmentpage}
            />{" "}
            <Route
              path="/operate/packaging-management"
              component={Packagingmanagementpage}
            />
            <Route
              path="/operate/portion-control"
              component={Portioncontrolpage}
            />
            {/* sells */}
            <Route
              path="/sells/on-demand-online-store"
              component={OnDemandStorepage}
            />
            <Route
              path="/sells/subscription-online-store"
              component={SubscriptionStorepage}
            />
            <Route
              path="/Aboutus/Ourphilosophy"
              component={OurPhilosophyPage}
            />
            <Route path="/menu/overview" component={MenuManagementpage} />
            {/* market */}
            <Route path="/market" component={Marketpage} />
            {/* we serve */}
            <Route path="/we_serve" component={weservepage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
