import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
import EndToEndFoodBusiness from "../components/marketpage/EndToEndFoodBusiness";
import ScheduleMeeting from "../components/homepage/ScheduleMeeting";
import StoreThatSells from "../components/onDemardStorePage/StoreThatSells";
import Bluebox1 from "../components/orderpage/Bluebox1";
import Digitalise from "../components/orderpage/Digitalise";
import RoutingSameBanners from "../components/orderpage/RoutingSameBanners";
export default class Orderroutingpage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Navbar />
        <StoreThatSells
          subheading={
            "Operate a Kitchen Where Everyone Knows Their Roles & Responsibilites."
          }
          heading={"Idiot-Proof Production"}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/order-routing/Idiot%20Proof.....png"
          }
        />
        <Bluebox1
          heading={"Large or Small, We're Built for Every Scale of Operations"}
          subheading={
            "You Can Configure Fully-Automated Flows, Manual Flows Or Both Using DailyOS"
          }
          col1heading={"Kitchen Display System (KDS)"}
          col1para={
            "A KDS is any screen-based device that can replace paper order tickets for streamlined back-of-house workflow."
          }
          col2heading={"Kitchen Order Tickets (KOT)"}
          col2para={
            "No KDS? No problem! Print receipts with precise job instructions."
          }
        />

        <Digitalise />
        <Bluebox1
          heading={"DailyKIT Understands Production Nuances"}
          subheading={
            "The Need For Ideal Flow For Production Fluctuates At Different Kitchen Production Volumes. We Provide You With The Option To Switch To Any Of The Below At Will."
          }
          col1heading={"Batch/Planned Mode"}
          col1para={
            "For pre-orders with scheduled delivery times, it is best to operate knowing the required inventory beforehand, so you can save time by packing similar ingredients in one shot, allowing for seamless final packaging"
          }
          col2heading={"Made to Order Mode"}
          col2para={
            "For on-demand ordering it is best to assign priority to each received order and pack & assemble them according to their expected dispatch time."
          }
          learn={"one"}
        />
        <RoutingSameBanners
          heading={"How It Works for Meal Kits"}
          subheading={"Routing Meal Kit Ingredients"}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/order-routing/Work-for-MealKit@2x.png"
          }
          para={[
            "Step 1 - The meal kit ingredients are reported at the stations according to your operational configuration, either through KDS or KOTs.",
            "Step 2 - Your staff is shown precise instructions regarding packaging, weight, SOPs, etc., in order to ensure product consistency.",
            "Step 3 - Post ingredients packing, the assembly station is notified. Staff then assemble meal kits using a hand-scanner or mobile app.",
          ]}
        />
        <RoutingSameBanners
          heading={"How It Works for Ready-to-Eat"}
          subheading={"Routing Menu Items"}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/order-routing/ready-to-eat.png"
          }
          para={[
            "Step 1 - All of the items in a Ready-to-Eat order are routed to assigned work stations.",
            "Step 2 - Your staff is shown precise instructions, packaging, and any customer-generated modification. Once staff marks it done, the label is automatically printed if configured.",
            "Step 3 - Once all of the items are packed, it's sent to the designated assembly station, where label is scanned or marked manually.",
          ]}
        />
        <RoutingSameBanners
          heading={"How It Works for Grocery"}
          subheading={"Routing Grocery Items"}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/order-routing/Order-routing@2x.png"
          }
          para={[
            "Step 1 - All of the grocery items are routed to their assigned stations for picking & packaging.",
            "Step 2 - Your staff is shown precise instructions on picking the supplier item, along with the quantity needed, as well as packaging. Once staff marks it done, the label is automatically printed if configured.",
            "Step 3 - Once all items are packed, it's then sent to the designated assembly station where the label is scanned or marked manually & the items are assembled in their respective bags",
          ]}
        />
        <EndToEndFoodBusiness />
        <ScheduleMeeting />
        <Footer />
      </div>
    );
  }
}
