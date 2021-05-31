import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
import EndToEndFoodBusiness from "../components/shared/EndToEndFoodBusiness";
import ScheduleMeetingSection1 from "../components/shared/ScheduleMeetingSection1";
import BannerSection7 from "../components/shared/BannerSection7";
import BannerSection8 from "../components/shared/BannerSection8";
import SpecialBanner1 from "../components/shared/SpecialBanner1";
import ImageBox1 from "../components/shared/ImageBox1";
import SpecialBanner2 from "../components/orderpage/SpecialBanner2";
import SpecialBanner3 from "../components/orderpage/SpecialBanner3";
export default class Orderfulfillmentpage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Navbar />
        <SpecialBanner1
          heading={"Set Your Own Delivery Terms"}
          subheading={"Flexible Order Fulfillment"}
          imageurl={
            "https://www.dailykit.org/hubfs/dailykit-assets/order-fulfilment/order-fulfilment-hero@2x.png"
          }
          button1text={"Get Started Now"}
          button2text={"Free Demo"}
          button1link={"#scheduledemo"}
          button2link={"#scheduledemo"}
        />
        <ImageBox1
          Heading1text={"What Do You Need? Pick-Up? Delivery? Both?"}
          SubHeading2text={"Order Fulfillment"}
          imagepara={[
            {
              heading: "PICK-UP",
              para: "Set Pickup Time Range Daily, Weekly, Monthly, etc.Ensure Contactless Pickup",
            },
            {
              heading: "DELIVERY",
              para: "Opt for Self-Delivery or Partner with a 3rd-Party Set Multiple Delivery Choices Based on: Day, Delivery Range, Cost, etc..",
            },
          ]}
          image1url={
            "https://www.dailykit.org/hubfs/dailykit-assets/order-fulfilment/pickup@2x.png"
          }
          image2url={
            "https://www.dailykit.org/hubfs/dailykit-assets/order-fulfilment/delivery@2x.png"
          }
        />
        <SpecialBanner2
          SubHeading2text={"Delivery Integrations"}
          Heading1text={"Explore & Partner with Delivery Providers Around You."}
          lists={[
            {
              heading1: "Delivery Hub",
              heading2: "Explore Partners",
              para: "DailyKIT provides you the platform to find & connect with Delivery Partners, know their terms & conditions & partner with them with 100% transparency.",
            },
            {
              heading1: "Delivery Hub",
              heading2: "Setup & Assign Delivery Partners on Your Terms",
              para: "Assign Deliveries to your Partners based on: delivery day, radius, price, and time, then let DailyKIT take care of notifying them.",
            },
            {
              heading1: "Delivery Hub",
              heading2: "Settle Your Payments Post-Cycle with DailyKIT",
              para: "Settle your payments with your Delivery Partners at the end of each cycle, and Let us worry about the charge sheet & invoices.",
            },
          ]}
        />
        <SpecialBanner3
          SubHeading2text={"Order Tracking"}
          Heading1text={"Customer or Operator? Track Orders the Same Way!"}
          imageurl1={
            "https://www.dailykit.org/hubfs/dailykit-assets/order-fulfilment/consumer@2x.png"
          }
          imageurl2={
            "https://www.dailykit.org/hubfs/dailykit-assets/order-fulfilment/operator@2x-1.png"
          }
        />
        <BannerSection8
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

        <BannerSection8
          heading={"Schedule Weekly Shipments with Ease"}
          subheading={"Subscription Delivery"}
          rightImage={
            "https://www.dailykit.org/hubfs/dailykit-assets/order-fulfilment/subscription-delivery.png"
          }
          para={[
            "Operate subscription deliveries from your fingertips. Select delivery days & zip codes, along with with custom delivery prices.DailyKIT takes care of your scheduled & recurring deliveries by assigning the right delivery partner beforehand, ensuring on-time delivery every time.",
          ]}
        />
        <BannerSection7
          heading={"Delivery and Pickup Insights"}
          list={[
            "Pickup Insights",
            "Self-Delivery Reports",
            "Delivery Partner Ananlytics",
          ]}
          image={["imagebox8", "imagebox9", "imagebox10"]}
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
