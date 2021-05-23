import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
import ScheduleMeeting from "../components/homepage/ScheduleMeeting";
import Makethejuice from "../components/weservepage/Makethejuice";
import Weserve from "../components/weservepage/Weserve";
import OptimizeKitchen from "../components/weservepage/OptimizeKitchen";
import SuperMarkets from "../components/weservepage/SuperMarkets";
import AnERP from "../components/weservepage/AnERP";
export default class Weservepage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Navbar />
        <Makethejuice />
        <Weserve />
        <OptimizeKitchen />
        <SuperMarkets
          subheading={"For Supermarkets"}
          heading={"Meet Rapidly Evolving Consumer Needs With Ease"}
          leftImage={
            "https://www.dailykit.org/hubfs/dailykit-assets/supermarket@2x.png"
          }
          para={
            "Online Grocery Sales Hit A Record $7.2 BN in 2020 & That Is Just Scratching The Surface."
          }
          list1={["Grow Top-Line Revenue", "Mulitply Brand Awareness"]}
          list2={[
            "Increase Bottom-Line Profits",

            "Mitigate Risk & Achieve Sustainability",
          ]}
        />
        <SuperMarkets
          subheading={"For Cloud Kitchens"}
          heading={"Built For Cloud Kitchen Operations"}
          rightImage={
            "https://www.dailykit.org/hubfs/dailykit-assets/Cloudkitchen@2x.png"
          }
          para={
            "Cloud Kitchens rely heavily on technology to help run their brands. DailyKIT’s ability to take any kitchen to cloud will help bring life into your Ghost Kitchen brands."
          }
          list1={["Incorporate Trending Sales Channels", "Optimize Operations"]}
          list2={["Multiple Brands - One Solution", "Built for The Future"]}
        />
        <AnERP />

        <ScheduleMeeting />
        <Footer />
      </div>
    );
  }
}
