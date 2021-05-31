import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
import EndToEndFoodBusiness from "../components/shared/EndToEndFoodBusiness";
import ScheduleMeetingSection1 from "../components/shared/ScheduleMeetingSection1";
import Heading from "../components/shared/Heading";
import BannerSection8 from "../components/shared/BannerSection8";
import BannerSection9 from "../components/shared/BannerSection9";
import SpecialBanner1 from "../components/shared/SpecialBanner1";
import SpecialBanner4 from "../components/orderpage/SpecialBanner4";

export default class Portioncontrolpage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "7rem" }}>
        <Navbar />
        <SpecialBanner1
          heading={"Ensuring Portion Consistency"}
          subheading={""}
          imageurl={
            "https://www.dailykit.org/hubfs/dailykit-assets/portion-control/idiotproof-banner.png"
          }
          button1text={"Get Started Now"}
          button2text={"Free Demo"}
          button1link={"#scheduledemo"}
          button2link={"#scheduledemo"}
        />
        <BannerSection9
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
        <BannerSection8
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
        <BannerSection8
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
        <BannerSection8
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
        <SpecialBanner4
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
