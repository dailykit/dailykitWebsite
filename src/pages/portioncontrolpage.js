import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
import MarketingMadeEasy from "../components/marketpage/MarketingMadeEasy";
import EndToEndFoodBusiness from "../components/marketpage/EndToEndFoodBusiness";
import ScheduleMeeting from "../components/homepage/ScheduleMeeting";
import Heading from "../components/homepage/Heading";
import RoutingSameBanners from "../components/orderpage/RoutingSameBanners";
import OrderNotification from "../components/orderpage/OrderNotification";
import Weighingimage from "../components/orderpage/weighingimage";

export default class Portioncontrolpage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "7rem" }}>
        <Navbar />
        <MarketingMadeEasy
          heading={"Ensuring Portion Consistency"}
          subheading={""}
          imageurl={
            "https://www.dailykit.org/hubfs/dailykit-assets/portion-control/idiotproof-banner.png"
          }
        />
        <OrderNotification
          heading={"Portion Control"}
          subheading={`Is the operational tactic of making sure that the quantities used
            in production are in accordance with your standard operating procedures`}
          image1={
            "https://www.dailykit.org/hubfs/dailykit-assets/portion-control/customer-satisfaction.png"
          }
          image2={
            "https://www.dailykit.org/hubfs/dailykit-assets/portion-control/follow-recipe.gif"
          }
          image3={
            "https://www.dailykit.org/hubfs/dailykit-assets/portion-control/Food-cost2@2x.png"
          }
          imagetitle1={"Customer Satisfaction"}
          imagetitle2={"Follow Recipes"}
          imagetitle3={"Reduce Food Cost"}
          imagepara1={
            "Make sure that your customer always gets a consistent product."
          }
          imagepara2={
            "Make sure that quantities are used in accordance with defined recipes."
          }
          imagepara3={
            "Make sure your staff is using the required quantities every time."
          }
        />
        <RoutingSameBanners
          heading={`How It Works:
          Meal Kits`}
          subheading={"Meal Kit Ingredient Packaging"}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/portion-control/portion-control-meal-kits.png"
          }
          para={[
            "Step 1 - Staff picks recommended ingredient & packaging displayed on workstation's KDS.",
            "Step 2 - Staff potions ingredient. If the weight is more or less than the defined weight, they are instructed to correct the weight.",
            "Step 3 - As soon as correct weight is achieved, the ingredient sachet gets marked completed and the label is printed out automatically.",
          ]}
        />{" "}
        <RoutingSameBanners
          heading={`How It Works:
          Meal Prep`}
          subheading={"Meal Prep Tray Packaging"}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/portion-control/portion-control-meal-prep.png"
          }
          para={[
            "Step 1 - Staff is notified of each component that has to be packed together with their defined weight.",
            "Step 2 - Staff packs the first ingredient, when the correct weight is achieved, the scale tares automatically and instructs staff to proceed with next the ingredient",
            "Step 3 - Once all of the components for the Meal Prep product are portioned and packed, the label is automatically printed, and marked as complete.",
          ]}
        />
        <RoutingSameBanners
          heading={"How It Works:Grocery"}
          subheading={"White-Label Artisanal Grocery Packaging"}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/portion-control/portion-control-grocery.png"
          }
          para={[
            "Step 1 - A work-order is received for the supplier Item to be packeted according to the specified quantity.",
            "Step 2 - Each Supplier Item is portioned and check-weighed against the specified quantity.",
            "Step 3 - As soon as right weight is achieved, packet gets marked completed and label is printed out automatically.",
          ]}
        />
        <Heading text={"Supported Weighing Scale"} />
        <Weighingimage />
        <EndToEndFoodBusiness />
        <ScheduleMeeting />
        <Footer />
      </div>
    );
  }
}
