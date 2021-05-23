import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
import EndToEndFoodBusiness from "../components/marketpage/EndToEndFoodBusiness";
import ScheduleMeeting from "../components/homepage/ScheduleMeeting";
import StoreThatSells from "../components/onDemardStorePage/StoreThatSells";
import RoutingSameBanners from "../components/orderpage/RoutingSameBanners";
import OrderNotification from "../components/orderpage/OrderNotification";
export default class Packagingmanagementpage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Navbar />
        <StoreThatSells
          subheading={
            "With Integrated Packaging Management Platform,Eliminate Low-Quality & Improper Packaging"
          }
          heading={"Packaging Made Easy"}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/packaging/packaging-banner.png"
          }
        />
        <OrderNotification
          heading={"Packaging Matters"}
          subheading={
            "Packaging not only ties your product together for final product presentation but it is also your Brand's Identity."
          }
          image1={
            "https://www.dailykit.org/hubfs/dailykit-assets/packaging/Unique%20Product.png"
          }
          image2={
            "https://www.dailykit.org/hubfs/dailykit-assets/packaging/Envir.%20Concern.png"
          }
          image3={
            "https://www.dailykit.org/hubfs/dailykit-assets/packaging/Consumer%20ed..png"
          }
          imagetitle1={"Each Product is Unique"}
          imagetitle2={"Environmental Concerns"}
          imagetitle3={"Consumer Education"}
          imagepara1={
            "Every order component requires specific packaging in order to be safe, secure, and presentable."
          }
          imagepara2={
            "Excess packaging is a problem. Choose environmental friendly packaging for your brand from our platform"
          }
          imagepara3={
            "Choose packaging that educates consumers about your brand. They rely on the print to learn more about your product."
          }
        />
        <RoutingSameBanners
          heading={"The Proper Packaging for The Product"}
          subheading={"Integrated Packaging Module"}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/packaging/1st.png"
          }
          para={[
            "Get recommendations for packaging for your unique products be they meal kits, desserts, beverages, hot or cold food, etc., based on different parameters such as if they are solid, liquid or require refrigration.",
          ]}
          learn={1}
        />{" "}
        <RoutingSameBanners
          heading={"Explore & Purchase Packaging"}
          subheading={"Integrated Packaging Store"}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/packaging/2nd.png"
          }
          para={[
            "Use PackagingHub to Review Pricing, Explore & Filter Out packaging items per your product requirements. Be it insulated ones for cold items, heat-resistant for Ready-to-Eat, tranparent, polyethylene or paper-based, we've got it all.",
            " ",
            "Manage Inventory & Create Purchase Orders using forecasting making sure your staff always has enough proper packaging on hand at their assigned workstations.",
          ]}
          learn={1}
        />
        <RoutingSameBanners
          heading={"Ensure Each Order is Properly Packed"}
          subheading={"Leave Nothing To Chance"}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/packaging/3rd.png"
          }
          para={[
            "Showcase the product packaging to be used per your input at KDS or KOTs to save time and headaches.",
            "Packaging Inventory is tracked as well, so you're notified if you're running short and need to immediately order additional packaging.",
          ]}
          learn={1}
        />{" "}
        <EndToEndFoodBusiness />
        <ScheduleMeeting />
        <Footer />
      </div>
    );
  }
}
