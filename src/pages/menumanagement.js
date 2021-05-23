import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
import ScheduleMeeting from "../components/homepage/ScheduleMeeting";
import StoreThatSells from "../components/onDemardStorePage/StoreThatSells";
import PersonalizationDoneRight from "../components/menumanagepage/menusecondComponent";
import Bluebox from "../components/menumanagepage/Bluebox";
export default class MenuManagementpage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Navbar />
        <StoreThatSells
          text={
            "With our powerful tools at your disposal, menu innovations are just a few clicks away, so be creative and stand-out from the rest."
          }
          heading={"Be An Innovator"}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/menu/menu-banner.jpg"
          }
        />
        <PersonalizationDoneRight
          heading={"Personalization Done Right"}
          para={[
            "To Eat or To Cook? With DailyKIT you win either way, by offering your customers the choice of Ready-to-Eat or Ready-to-Cook",
            "How Many Servings? You can choose to offer different products with different available servings.",
            "What Sides Would You Like? Configure the specfic sides to offer along with a main product.",
            "How Do You Want It? Offer your customers a choice of different recipes for the main product and sides to cater to your customer’s dietary preferences.",
          ]}
          leftImage={
            "https://www.dailykit.org/hubfs/dailykit-assets/menu/personalization.gif"
          }
        />{" "}
        <PersonalizationDoneRight
          heading={"Give Life To Your Menu"}
          para={[
            "Gone are the days of The Static Menu",
            "With DailyKIT, you can rotate your menu by days & seasons, and offer special menus for special occasions to bring life to your brand, keeping your valued cusomters coming back for more!",
          ]}
          leftImage={
            "https://www.dailykit.org/hubfs/dailykit-assets/menu/give-life-to-your-menu2.gif"
          }
        />
        <Bluebox />
        <PersonalizationDoneRight
          heading={"How Intimately Do You Know Your Food Costs?"}
          para={[
            "It’s impossible to optimize business profitablity without having a detailed handle on your Food Costs.",
            "DailyKIT’s Automated Food Cost Tracking gives you all of the data you'll need to help you run a successful and profitable business.",
          ]}
          rightImage={
            "https://www.dailykit.org/hubfs/dailykit-assets/menu/Food-cost.png"
          }
        />
        <PersonalizationDoneRight
          heading={"Zero In On Product Pricing."}
          para={[
            "No more back-of-the-envelope math. No more calculators and excel sheets. With DailyKIT’s Intelligent Product Pricing, you can easily set target food cost %'s and get a suggested price range that falls within your targeted food cost. With minimal effort and easy decision making, set your menu prices like the experts.",
          ]}
          rightImage={
            "https://www.dailykit.org/hubfs/dailykit-assets/menu/product-pricing.png"
          }
        />
        <PersonalizationDoneRight
          heading={"Automation is the New Mantra."}
          para={[
            "Today Nutritional & Allergen data are one of the most important factors in the consumer’s decision making process.",
            "Unlike other tools, DailyKIT automatically builds a nutrition chart for you.",
          ]}
          rightImage={
            "https://www.dailykit.org/hubfs/dailykit-assets/menu/automation.png"
          }
          buttontext={"Schedule A Meeting"}
        />
        <ScheduleMeeting />
        <Footer />
      </div>
    );
  }
}
