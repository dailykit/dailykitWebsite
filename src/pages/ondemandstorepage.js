import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
import ScheduleMeetingSection1 from "../components/shared/ScheduleMeetingSection1";
import IdealProduct from "../components/onDemardStorePage/IdealProduct";
import BannerSection4 from "../components/shared/BannerSection4";
import BannerSection2 from "../components/shared/BannerSection2";
import BannerSection3 from "../components/shared/BannerSection3";
import SpecialBanner5 from "../components/onDemardStorePage/SpecialBanner5";
export default class OnDemandStorepage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Navbar />
        <BannerSection3
          subheading={"DailyKIT for Online Ordering"}
          heading={"A Store That Sells"}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/ondemand-hero1.gif"
          }
          blackbuttontext={"Start Now"}
        />
        <BannerSection2
          rightimageurl={
            "https://www.dailykit.org/hubfs/dailykit-assets/popularOrderingExperiences.gif"
          }
          heading={"Popular Ordering Experiences"}
          bluesubheading={"Familiar & Intuitive"}
          description="Customer Experience shouldn't be an expense. DailyKIT offers turnkey solutions for higher conversions."
          descriptionpoints={[
            "Showcase Multiple Product Types in elegant cards & drawers.",
            "Give your customers option to choose between Now/Later & Pickup/Delivery.",
            "Increase conversions by showcasing categories as Digital Aisle for Smooth Browsing.",
          ]}
        />

        <IdealProduct />
        <BannerSection4
          heading={"Real-Time Order Tracking"}
          description={
            "Cater to consumer habits of tracking order lifecycle from Kitchen to Delivery leading to higher retention."
          }
          points={[
            ["Kitchen Order Status", "Delivery Personnel Info"],
            ["ETA & Map Tracking", "Review & Rating"],
          ]}
          leftimage={
            "https://www.dailykit.org/hubfs/dailykit-assets/Real-TimeOrderTracking@2x.png"
          }
        />
        <BannerSection4
          heading={"Showcase your COVID Safety Measures"}
          description={
            "Reassure your customers of their safety using DailyKIT's COVID Safety tools"
          }
          points={[
            ["Body-Temp Reports", "Safety report on Invoice"],
            ["Use of PPE Checklist", "Cleaning Protocols"],
          ]}
          rightimage={
            "https://www.dailykit.org/hubfs/dailykit-assets/ShowcaseYourCOVIDSafetyMeasures@2x.png"
          }
        />
        <BannerSection4
          heading={"Own Your Online Store Completely"}
          bluesubheading={"Don't Compromise"}
          description={
            "In the modern digital world, owning your web presence is a MUST."
          }
          points={[
            ["Your Own Domain", "Themes & Brand Colors"],
            ["iOS & Android Apps", "Custom Brand Pages"],
          ]}
          leftimage={
            "https://www.dailykit.org/hubfs/dailykit-assets/own-store/Themes%20and%20brand%20colors.png"
          }
        />
        <SpecialBanner5
          heading={"Why Choose DailyKIT"}
          subpara={
            "Are You Using A Plain Old Micro-Site For Online Ordering Or Worse, Do You Not Have An Online Store? It’s Vital To The Success Of Your Business To Have A Professional Looking Onine Store."
          }
          points={[
            [
              {
                heading: "Unlimited Categories",
                para: "Manage multiple categories for easy browsing.",
                icon: "https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/unlimited-categories.png",
              },
              {
                heading: "SEO-Friendly Pages",
                para: "URL-based pages for Products & Categories.",
                icon: "https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/seo-friendly.png",
              },
              {
                heading: "Product Tags",
                para: "Tag your products for easy filtering and discoverability.",
                icon: "https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/product-tags.png",
              },
              {
                heading: "Product Images",
                para: "Display Amazing Product Pictures for Higher Conversion.",
                icon: "https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/product-images.png",
              },
            ],
            [
              {
                heading: "Product Description",
                para: "Convert more via enticing product descriptions.",
                icon: "https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/product-description.png",
              },
              {
                heading: "Social Media Sharing",
                para: "Integrated Social Media sharing functionality on every product page.",
                icon: "https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/social-media-share.png",
              },
              {
                heading: "Desktop Friendly",
                para: "Don't miss out on the 20% of consumers ordering food through their laptops/desktops.",
                icon: "https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/desktop-friendly.png",
              },
              {
                heading: "Mobile & Tab Friendly",
                para: "Perfect experience through any browser app or in-app browsers.",
                icon: "https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/mobile-friendly.png",
              },
            ],
            [
              {
                heading: "Advanced Scheduling",
                para: "BreakFast, Lunch, Dinner or Daily/Weekly Recurring, Festive Menus.",
                icon: "https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/Advance%20Scheduling.svg",
              },
              {
                heading: "Know your Margins",
                para: "Control your food cost with Sales Price Recommendations.",
                icon: "https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/Margins.svg",
              },
              {
                heading: "Precise Configuration",
                para: "Configure Inventory, Packaging and Product Labels.",
                icon: "https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/Precise%20Configuration.svg",
              },
            ],
            [
              {
                heading: "Smart Insights",
                para: "Automated Sales Reports with conversion details.",
                icon: "https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/Smart%20Insights.svg",
              },
              {
                heading: "Discounts & Coupons",
                para: "Create Smart Rewards, Vouchers and more from CRM",
                icon: "https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/Discounts%20%26%20Coupons.svg",
              },
              {
                heading: "Delivery Integrations",
                para: "Supporting Selected Delivery Partners in your Area.",
                icon: "https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/Delivery%20Integrations.svg",
              },
            ],
          ]}
          buttontext={"Schedule A Demo"}
          buttonlink={"#scheduledemo"}
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
