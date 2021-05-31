import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
import paperplane from "../paperplane.PNG";
import EndToEndFoodBusiness from "../components/shared/EndToEndFoodBusiness";
import ScheduleMeetingSection1 from "../components/shared/ScheduleMeetingSection1";
import BannerSection3 from "../components/shared/BannerSection3";
import BannerSection5 from "../components/shared/BannerSection5";
import BannerSection4 from "../components/shared/BannerSection4";
export default class Marketpage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Navbar />
        <BannerSection3
          heading={"Marketing Made Easy."}
          subheading={
            "Must have Innovative Marketing tools to help you connect your brand with your customers."
          }
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/marketing-overview/Marketing%20made%20easy.png"
          }
          button2={["Get Started Now", "Get Demo"]}
          button1link={"#scheduledemo"}
          button2link={"#scheduledemo"}
        />
        <BannerSection5
          icon={paperplane}
          heading={"Build Smarter Campaigns."}
          description={
            "Create and deliver engaging experiences, improve customer engagement and boost ROI in the process."
          }
          rightimage={
            "https://www.dailykit.org/hubfs/dailykit-assets/marketing-overview/Build%20smarter%20campaigns.png"
          }
        />
        <BannerSection5
          icon={paperplane}
          heading={"Inspire customers to take action."}
          para={[
            "Customers are always looking for fresh new deals. With DailyKIT's Custom Coupons become a lead magnet with exclusive offers and motivate customers to take action.",
            "Use DailyKIT's Smart Coupon Generation to experiment with various actions that you think your customers will perform.",
          ]}
          leftimage={
            "https://www.dailykit.org/hubfs/dailykit-assets/marketing-overview/Inspire%20customer%20to%20take%20action.png"
          }
        />
        <BannerSection5
          icon={paperplane}
          heading={"Create Rewarding Experiences."}
          description={
            "Keep your customers coming back by rewarding them when they take a certain action. With Loyalty Points, retain and keep your customers engaged."
          }
          leftimage={
            "https://www.dailykit.org/hubfs/dailykit-assets/marketing-overview/Creat%20rewarding%20experiances.png"
          }
          box1title={"Simple. Powerful. Fast"}
          box2title={"ROI-Focused"}
          box1description={""}
          box2description={""}
        />
        <BannerSection4
          heading={"Your tryst with virality"}
          description={
            "Experience accelerated growth using customer referrals as your trusted marketing strategy"
          }
          points={[
            ["Supercharge Word of Mouth", "Drive repeated growth"],
            ["Keep them coming back", "Get more customers from your customers"],
          ]}
          rightimage={
            "https://www.dailykit.org/hubfs/dailykit-assets/marketing-overview/Your%20tryst%20with%20virality.png"
          }
        />
        <BannerSection5
          icon={paperplane}
          heading={"Keep them Loyal."}
          description={
            "With our cashbacks, maintain customer loyalty by rewarding them for their action. With DailyKIT Wallets, provide more than one way to shop for your customer."
          }
          leftimage={
            "https://www.dailykit.org/hubfs/dailykit-assets/marketing-overview/keep%20them%20loyal.png"
          }
          box1title={"Consumer B2C App"}
          box2title={"Partner Restaurant Integration"}
          box1description={""}
          box2description={""}
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
