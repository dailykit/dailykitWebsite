import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
import VideoBanner from "../components/homepage/VideoBanners";
import ImageBox1 from "../components/shared/ImageBox1";
import PricingSection1 from "../components/homepage/PricingSection1";
import ScheduleMeetingSection1 from "../components/shared/ScheduleMeetingSection1";
import BannerSection1 from "../components/shared/BannerSection1";
import BannerSection2 from "../components/shared/BannerSection2";
import CategoriesSection from "../components/shared/CategoriesSection";
import BlueBoxSection1 from "../components/shared/BlueBoxSection1";
export default class Homepage extends PureComponent {
  render() {
    return (
      <div>
        <Navbar />
        <VideoBanner
          heading1text={"Time to EVOLVE with"}
          heading2text={"DailyKIT"}
          subheadingtext={
            "The Only Trend-Responsive Food-Tech Solution You'll Ever Need"
          }
          toggletextarr={[
            "Increase Bottom-Line Margin",
            "Grow Top-Line Revenue",
            "Mitigate Risk and Achieve Sustainability",
          ]}
          whitebuttontext={"Schedule Demo"}
          whitebuttonlink={"#scheduledemo"}
          purplebuttontext={"Start Now With A 3-Month Trial"}
          offertext={"Available for a Limited Time Only"}
        />

        <ImageBox1
          Heading1text={"Built For Food Businesses"}
          SubHeading1text={
            "Whether You Are A Start-Up Or An Existing Food Business, We've Got You Covered."
          }
          imagetext1={"Restaurants"}
          imagetext2={"Supermarkets"}
          image1url={
            "https://www.dailykit.org/hubfs/dailykit-assets/Serve-restaurant@2x.png"
          }
          image2url={
            "https://www.dailykit.org/hubfs/dailykit-assets/Serve-supermarket@2x.png"
          }
        />
        <BannerSection1
          boximage1subheading="Product Presentation"
          boximage1heading="Trend-Responsive Demand Platform"
          boximage1url="https://www.dailykit.org/hubfs/dailykit-assets/trending@2x.png"
          boximage2subheading="Add Combos"
          boximage2heading="Add Accompaniments"
          boximage2url="https://www.dailykit.org/hubfs/dailykit-assets/slidertrending@2x.png"
          heading={"Sell Everything With EveryWARE"}
          subheading={"Trend-Responsive Demand Platform"}
          buttontext={"TELL ME MORE"}
          dataAccount="3161173:g2o5g2c3i8"
          dataForm={"4175704:a4w7j9"}
        />
        <CategoriesSection
          list={[
            [
              "On-Demand Online Store",
              "Online Subscription Store",
              "Unlimited Ghost Brands",
              "iOS & Android Apps(Upon Request)",
              "Marketplace Integrations(Coming Soon)",
            ],
            [
              "Your Own Custom Domain",
              "Custom Brand Pages",
              "Easy Payment & Checkout Experiences",
              "Combo Products",
              "Build Your Own Meal",
            ],

            [
              "Modifiers",
              "Sort, Filter & Search",
              "Nutrition & Allergens",
              "Product Recommendations",
              "Recipe Pages",
              "Order & Delivery Tracking",
            ],
          ]}
        />
        <BannerSection2
          rightimagecarousel={[
            "https://www.dailykit.org/hubfs/dailykit-assets/homepage/Coupons.png",
            "https://www.dailykit.org/hubfs/dailykit-assets/homepage/Referral%20Campaigns.png",
            "https://www.dailykit.org/hubfs/dailykit-assets/homepage/Points.png",
          ]}
          heading={"Gamify Your Marketing"}
          buttonlink={"/market"}
          bluesubheading={"DailyKIT Marketing Hub"}
          greenbuttontext={"TELL ME MORE"}
          description="Let Your Imaginations Run Wild. Convert More with Advanced, Multi-Conditional Discounting Tools ."
          descriptionpoints={[
            "Create Smart Coupons that actually appeal to your consumers.",
            "Build exciting Referral Campaigns for your brand's Viral Growth.",
            "Loyalty Points, Wallet Money and more for Increased Customer Retention",
          ]}
        />

        <CategoriesSection
          list={[
            [
              "Custom Advanced Coupons",
              "Coupon-based Cashback",
              "Coupon-based Loyalty Points",
            ],
            [
              "Signup Offer Campaigns",
              "Referral Marketing Campaigns",
              "Post-Order Loyalty Points Wallet Cashback",
            ],
            [
              "Automated Social Media Collateral(Coming Soon)",
              "Automated Recipe Cards",
              "SEO - Friendly Product Pages",
            ],
          ]}
        />
        <BannerSection2
          leftimageurl="https://www.dailykit.org/hubfs/dailykit-assets/Operate-hero@2x.png"
          heading={"Deliver Excellence With DailyOS"}
          subheading={"Trend-Agnostic Supply Platform"}
          greenbuttontext={"TELL ME MORE"}
          buttonlink={"/operate/order-fulfillment"}
        />
        <CategoriesSection
          list={[
            [
              "Centralized Order Management",
              "KOT & Kitchen Display Systems",
              "Supplier, Inventory & Mise-en-Place Management",
              "Third-Party Delivery Integrations",
            ],
            [
              "Check-Weighing-based Portion Control",
              "QR Scan-based Assembly Flows",
              "Order Routing Between Kitchen Stations",
              "Work-Orders for Shift Planning",
            ],

            [
              "Planned/Batch Production Mode",
              "Standard Operating Procedures",
              "Hardware (Label & Receipt Printers, Weighing Scales)",
              "Product & Ingredient Label Printing",
            ],
          ]}
        />
        <BlueBoxSection1
          mainheading={"Start, Run & Grow Your Food Business with Ease"}
          subheading={"We’re There For You Every Step Of The Way"}
          boxes={[
            {
              image:
                "https://www.dailykit.org/hubfs/dailykit-assets/homepage/Technical%20Support.png",
              heading: "Technical Support",
              para: "Tech Glitches Happen.Our support team will be there.",
            },
            {
              image:
                "https://www.dailykit.org/hubfs/dailykit-assets/homepage/Emp.%20Training.png",
              heading: "Employee Training",
              para: "We Make Sure Your Staff Knows The System Like We Do.",
            },
            {
              image:
                "https://www.dailykit.org/hubfs/dailykit-assets/homepage/Menu%20%26%20Recipe%20Ideas.png",
              heading: "Menu & Recipe Ideas",
              para: "Need Inspiration? No Sweat! We Can Help.",
            },
            {
              image:
                "https://www.dailykit.org/hubfs/dailykit-assets/homepage/Migrate.png",
              heading: "Migrate",
              para: "Running Outdated Tech? Don't Worry, We'll Handle It.",
            },
            {
              image:
                "https://www.dailykit.org/hubfs/dailykit-assets/homepage/Data%20Onboarding.png",
              heading: "Data Onboarding",
              para: "Got Tons of Recipes to Upload? Our Team Can Get You There in a Snap!",
            },
            {
              image:
                "https://www.dailykit.org/hubfs/dailykit-assets/homepage/Packaging%20Ass..png",
              heading: "Packaging Assistance",
              para: "We Know Finding Right Packaging is Tough. Let Our Partners Help You.",
            },
          ]}
        />
        <PricingSection1
          offers={[
            {
              name: "One Time Setup Fees",
              price: "$ 999",
              feature1: "Store Setup, Menu Building, Includes Onboarding",
              feature2: "Staff Training, Data Upload",
            },
            {
              name: "Monthly Subscription",
              price: "$ 99",
              feature1: "* 4.7% + 30c per transaction",
              feature2: "Includes Every feature Listed Above",
            },
          ]}
        />
        <BannerSection2
          rightimageurl="https://www.dailykit.org/hubfs/dailykit-assets/homepage/Reseller.png"
          heading={"Partner with DailyKIT."}
          subheading={"Are You A Reseller?"}
          descriptiontype2={
            "We offer very attractive incentives to anyone who wishes to Resellour platform to prospective clients anywhere in the world Click on the button below to talk to us about this opputunity."
          }
          blackbuttontext={"Schedule A meeting"}
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
