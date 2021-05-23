import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
import ScheduleMeeting from "../components/homepage/ScheduleMeeting";
import StoreThatSells from "../components/onDemardStorePage/StoreThatSells";
import PopularOrderingExperiences from "../components/onDemardStorePage/PopularOrderingExperiences";
import IdealProduct from "../components/onDemardStorePage/IdealProduct";
import RealTimeOrderTracking from "../components/onDemardStorePage/RealTimeOrderTracking";
import OwnYourOnline from "../components/onDemardStorePage/OwnYourOnline";
import Showcase from "../components/onDemardStorePage/Showcase";
import WhyChoose from "../components/onDemardStorePage/WhyChoose";
export default class OnDemandStorepage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Navbar />
        <StoreThatSells
          subheading={"DailyKIT for Online Ordering"}
          heading={"A Store That Sells"}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/ondemand-hero1.gif"
          }
        />
        <PopularOrderingExperiences
          subheading={"Familiar & Intuitive"}
          heading={"Popular Ordering Experiences"}
          text={
            "Customer Experience shouldn't be an expense. DailyKIT offers turnkey solutions for higher conversions."
          }
          point={[
            "Showcase Multiple Product Types in elegant cards & drawers.",
            "Give your customers option to choose between Now/Later & Pickup/Delivery.",
            "Increase conversions by showcasing categories as Digital Aisle for Smooth Browsing.",
          ]}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/popularOrderingExperiences.gif"
          }
        />
        <IdealProduct />
        <RealTimeOrderTracking />
        <Showcase />
        <OwnYourOnline />
        <WhyChoose />
        <ScheduleMeeting />
        <Footer />
      </div>
    );
  }
}
