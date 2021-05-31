import React, { PureComponent } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import "../../style.css";
import BlackHeading from "../../components/BlackHeading";
import BlogSection from "../../components/BlogSection";
import GreenHeading from "../../components/GreenHeading";
import Sidebar from "../../components/Sidebar";
import FormSection1 from "../../components/FormSection1";
export default class DeliveryPartner extends PureComponent {
  render() {
    return (
      <div>
        <Navbar />
        <DeliveryPartnerComponent />
        <Footer />
      </div>
    );
  }
}

export class DeliveryPartnerComponent extends PureComponent {
  render() {
    return (
      <div>
         <FormSection1 dataAccount="3161173:g2o5g2c3i8"
  dataForm="4175704:a4w7j9"/>
        <div className="head">
          <GreenHeading text="Everyone's doing meal kits" />
          <BlackHeading text="But are you delivering them all?" />
        </div>
        {/* <--first sidebar--> */}
        <Sidebar
          rest={[
            {
              sidebar_heading: "KNOWLEDGEBASE",
              sidebar_link: [
                "Shipping all across US? There are Meal Kits to be shipped",
                "Doing local scheduled logistics? America is pre ordering Meal Kits right now",
              ],
              para_heading: "Can you deliver Meal Kits faster than Pizza?",
              para: [
                "If you are a brand running errands/on demand delivery, we have the perfect item to delivery for you. Meal Kits are not only easy to deliver but you are never in the risk of ruining the customer’s food as you are delivering ingredients and not the actual prepared food.",
                "Meal Kits can not only be delivered easily but also our partner restaurants can make them in under 5 minutes. Pizza is no longer the fastest delivered food. Meal Kits have dethroned them. So we ask you again, can you deliver Meal Kits faster than Pizza. Yes you definitely can.",
              ],
              para2: [
                {
                  para2_heading:
                    "Shipping all across US? There are Meal Kits to be shipped",
                  para2: [
                    "Meal Kits are already being delivered all over the US and Meal Kits companies are leading the way. But Dailykit is here to change that trend and add an additional source of revenue for all the companies shipping across the US. ",
                    "Let’s say a customer living in LA is craving for an authentic Chicago Deep Dish Pizza. There was no way for that person to get his cravings satisfied rather than travel to Chicago. But you can be there for them. This is just one instance. We have multiple instances of Meal Kits being asked to be delivered all across the US from one state to the other. We have multiple brands that not only ship locally but also nationally",
                  ],
                },
                {
                  para2_heading:
                    "Doing local scheduled logistics? America is pre ordering Meal Kits right now",
                  para2: [
                    "Meal Kits are everywhere. Even the local restaurants are making Meal Kits on the go. But there are substantial amount of people planning their meals from their favorite brands. These Meal Kits need to be delivered and this number is pretty substantial.",
                    "Scheduled Logistics is a definite need for brands who want their customers to pre order meal kits and also for customers who prefer to pre order meal kits. Even the most remote areas of America is pre ordering meal kits so there is a definite demand.",
                  ],
                },
              ],
            },
          ]}
        />

        <BlogSection
          blogs={[
            {
              id: "1",
              image:
                "https://www.dailykit.org/hubfs/Screenshot%202021-04-14%20at%206.55.19%20PM.png",
              title: "HOW TO LAUNCH MEAL KITS AT YOUR RESTAURANT?",
              cardText:
                "There is an urgent need to make sure Restaurants try every possible way in which they can get people ordering. If you think you as a Restaurateur have tried everything then,think again. Yes,...",
              readMoreId: "#Readmore",
            },
            {
              id: "2",
              image:
                "https://lh6.googleusercontent.com/W179jGz7_CWkKJJHsQeertViy_N7W6nQASgk07vzJ_m6WWSfKCO3-BZzi6yAdjzak2R8o2758sHE8ovCYo9cWXrEZJMFK3KEXIttymyJ1FiqNIPQgQ0azI0R8OMoZeAiZzOqe1_A",
              title: "YOUR PACKAGING SHOULD BUILD BRAND RECALL",
              cardText:
                "Your brand is in a constant battle to retain customers,build confidence and encourage brand recall. To ensure this, a brand needs to build their brand voice. When it comes to food, brand voice...",
              readMoreId: "#Readmore",
            },
          ]}
          blogs_heading="CHECK OUT OUR BLOG"
        />
      </div>
    );
  }
}
