import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
import EndToEndFoodBusiness from "../components/shared/EndToEndFoodBusiness";
import ScheduleMeetingSection1 from "../components/shared/ScheduleMeetingSection1";
import BannerSection2 from "../components/shared/BannerSection2";
import BannerSection7 from "../components/shared/BannerSection7";
import BannerSection9 from "../components/shared/BannerSection9";
import SpecialBanner1 from "../components/shared/SpecialBanner1";
export default class Orderdashboardpage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Navbar />
        <SpecialBanner1
          heading={"Centralized Order Management"}
          subheading={"Make Your Life Easier"}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/order-dashboard/order-dashboard-hero2@2x.png"
          }
          button1text={"Get Started Now"}
          button2text={"Free Demo"}
          button1link={"#scheduledemo"}
          button2link={"#scheduledemo"}
        />

        <BannerSection2
          rightimageurl={
            "https://www.dailykit.org/hubfs/dailykit-assets/order-dashboard/all-orders-2@2x.png"
          }
          heading={"One Dashboard For Every Product Line"}
          bluesubheading={"Easy & Intuitive"}
          description="Be it Meal Kits, Ready-To-Eat, Private-Label Artisanal Grocery or Any Other Trending Product Line, DailyKIT Offers One Comprehensive Dashboard to Manage Them All."
          descriptionpoints={[
            "Accept Orders from Everywhere e.g.On-Demand/Subscription Store, Multiple Ghost Brands/Third-Party Marketplaces",
            "Cloud-Based Access allowing you to manage orders from anywhere",
            "Apply Filters & Sorting using multiple parameters to help with Order Expediting",
          ]}
        />

        <BannerSection9
          image1={
            "https://www.dailykit.org/hubfs/dailykit-assets/order-dashboard/DailyOS-Notifications@2x.png"
          }
          image2={
            "https://www.dailykit.org/hubfs/dailykit-assets/order-dashboard/print-KOTs@2x.png"
          }
          image3={
            "https://www.dailykit.org/hubfs/dailykit-assets/order-dashboard/Email-%26-SMS-Notifications@2x.png"
          }
        />

        <BannerSection7
          heading={"Daily Order Reporting & Analytics"}
          list={[
            "Order Fulfillment",
            "Daily Sales & Revenue",
            "Inventory Usage",
          ]}
          image={["imagebox5", "imagebox6", "imagebox7"]}
          dataAccount="3161173:g2o5g2c3i8"
          dataForm="4175704:a4w7j9"
        />
        <EndToEndFoodBusiness
          subheading={"An End-To-End Food Business Software Solution Provider"}
          heading={"You've Never Managed Your Food Business Like This Before"}
          dataAccount={"3161173:g2o5g2c3i8"}
          dataForm={"4175542:d4z0s3"}
          points={[
            [
              "Recipe & Menu Engineering",
              "Manufacturing Technology",
              "Sales & Marketing Platform",
            ],
            [
              "Delivery & Packaging Integrations",
              "Inventory Management",
              "Analytics",
            ],
          ]}
        />
        <ScheduleMeetingSection1
          heading={"Schedule an E-Meeting"}
          image={
            "https://static.hsappstatic.net/ui-images/static-2.377/optimized/errors/map.svg"
          }
          id={"scheduledemo"}
          content={[
            {
              question: "How Do You Schedule A Meeting?",
              answer:
                "Select the date on the calendar, the time slot, and then simply fill in your information. Done!",
            },
            {
              question: "What Happens After You Schedule A Meeting?",
              answer:
                "We will send you a calendar invite to your supplied email address with the Google Meet link at the scheduled date & time.In the event that you're unable to join by laptop/computer, we will call you on the given phone number",
            },
            {
              question: "What Happens During The Meeting?",
              answer:
                "We invite you to share good, bad and the ugly of your business. After understanding your requirements and concerns, we will figure out how to deploy the proper DailyKIT tech solutions based on your business strategy.",
            },
          ]}
        />
        <Footer />
      </div>
    );
  }
}
