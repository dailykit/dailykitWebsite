import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
import MarketingMadeEasy from "../components/marketpage/MarketingMadeEasy";
import EndToEndFoodBusiness from "../components/marketpage/EndToEndFoodBusiness";
import ScheduleMeeting from "../components/homepage/ScheduleMeeting";
import Redhover from "../components/orderpage/Redhover";
import ImageBox from "../components/orderpage/ImageBox";
import BelowImageBox from "../components/orderpage/BelowImageBox";
import CustomerorOperator from "../components/orderpage/CustomerorOperator";
import RoutingSameBanners from "../components/orderpage/RoutingSameBanners";
export default class Orderfulfillmentpage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Navbar />
        <MarketingMadeEasy
          heading={"Set Your Own Delivery Terms"}
          subheading={"Flexible Order Fulfillment"}
          imageurl={
            "https://www.dailykit.org/hubfs/dailykit-assets/order-fulfilment/order-fulfilment-hero@2x.png"
          }
        />

        <ImageBox />
        <BelowImageBox />
        <CustomerorOperator />
        <RoutingSameBanners
          heading={"Seamless Order Fulfillment"}
          subheading={""}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/order-fulfilment/ondemand-delivery.png"
          }
          para={[
            "We understand the nuances of pick-up & delivery. With DailyKIT easily configure precise mile ranges, order value limits, custom delivery charges, as well as days and times at which you deliver or pickup.",
            "Whether 3rd-Party or in-house, once configured, DailyKIT's rule-based & automatic pick-up and delivery assignment is a breeze.",
          ]}
        />

        <RoutingSameBanners
          heading={"Schedule Weekly Shipments with Ease"}
          subheading={"Subscription Delivery"}
          rightImage={
            "https://www.dailykit.org/hubfs/dailykit-assets/order-fulfilment/subscription-delivery.png"
          }
          para={[
            "Operate subscription deliveries from your fingertips. Select delivery days & zip codes, along with with custom delivery prices.DailyKIT takes care of your scheduled & recurring deliveries by assigning the right delivery partner beforehand, ensuring on-time delivery every time.",
          ]}
        />
        <Redhover
          heading={"Delivery and Pickup Insights"}
          list={[
            "Pickup Insights",
            "Self-Delivery Reports",
            "Delivery Partner Ananlytics",
          ]}
          image={["imagebox8", "imagebox9", "imagebox10"]}
        />
        <EndToEndFoodBusiness />
        <ScheduleMeeting />
        <Footer />
      </div>
    );
  }
}
