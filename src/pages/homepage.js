import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
// import BlackHeading from "../../components/BlackHeading";
// import BlogSection from "../../components/BlogSection";
// import GreenHeading from "../../components/GreenHeading";
// import Sidebar from "../../components/Sidebar";
import VideoBanner from "../components/homepage/VideoBanners";
import Heading from "../components/homepage/Heading";
import SubHeading from "../components/homepage/SubHeading";
import ImageBox from "../components/homepage/ImageBox";
import SellEverythingWithEveryWARE from "../components/homepage/SellEverythingWithEveryWARE";
import OnDemandCategories from "../components/homepage/OnDemandCategories";
import CustomAdvancedCoupons from "../components/homepage/CustomAdvancedCoupons";
import GamifyYourMarketing from "../components/homepage/GamifyYourMarketing";
import DeliverExcellence from "../components/homepage/DeliverExcellence";
import List from "../components/homepage/List";
import StartRunGrow from "../components/homepage/StartRunGrow";
import OurPricing from "../components/homepage/OurPricing";
import PartnerWithDailyKIT from "../components/homepage/PartnerWithDailyKIT";
import ScheduleMeeting from "../components/homepage/ScheduleMeeting";
export default class Homepage extends PureComponent {
  render() {
    return (
      <div>
        <Navbar />
        <VideoBanner />
        <Heading />
        <SubHeading />
        <ImageBox />
        <SellEverythingWithEveryWARE />
        <OnDemandCategories />
        <GamifyYourMarketing />
        <CustomAdvancedCoupons />
        <DeliverExcellence />
        <List />
        <StartRunGrow />
        <OurPricing />
        <PartnerWithDailyKIT />

        <ScheduleMeeting />

        <Footer />
      </div>
    );
  }
}
