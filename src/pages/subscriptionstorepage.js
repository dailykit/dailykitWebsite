import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
import ScheduleMeeting from "../components/homepage/ScheduleMeeting";
import StoreThatSells from "../components/onDemardStorePage/StoreThatSells";
import PopularOrderingExperiences from "../components/onDemardStorePage/PopularOrderingExperiences";
import OwnYourOnline from "../components/onDemardStorePage/OwnYourOnline";
import WhyChoose from "../components/onDemardStorePage/WhyChoose";
import TakingYourStore from "../components/subscription/TakingYourStore";
import BlueBox from "../components/subscription/BlueBox";
export default class SubscriptionStorepage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Navbar />
        <StoreThatSells
          subheading="Why should they have all the fun?"
          heading="Get your share of subscription Revenue"
          image="https://www.dailykit.org/hubfs/dailykit-assets/subscription-logos/subscription-banner-2.png"
        />
        <PopularOrderingExperiences
          subheading={"Familiar & Intuitive Signup Process"}
          heading={"Market Standard Subsription Flows"}
          text={
            "Customer Experience shouldn't be an expense. DailyKIT offers turnkey solutions for higher conversions."
          }
          point={[
            "Showcase Subscription Plans in elegant cards",
            "Give your customers option to choose between Item Count, Servings & Delivery Week-Day.",
            "Increase Conversions by funneling Customers to preview menus prior to signing up.",
          ]}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/marketStandardSubscriptionFlows@2x-1.png"
          }
        />
        <BlueBox />
        <TakingYourStore />
        <OwnYourOnline />
        <WhyChoose />
        <ScheduleMeeting />
        <Footer />
      </div>
    );
  }
}
