import React, { PureComponent } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import "../../style.css";
import BlackHeading from "../../components/BlackHeading";
import BlogSection from "../../components/BlogSection";
import GreenHeading from "../../components/GreenHeading";
import Sidebar from "../../components/Sidebar";
import FormSection1 from "../../components/FormSection1";
export default class Copacker extends PureComponent {
  render() {
    return (
      <div>
        <Navbar />
        <CopackerComponent />
        <Footer />
      </div>
    );
  }
}

export class CopackerComponent extends PureComponent {
  render() {
    return (
      <div>
       
  <FormSection1 dataAccount="3161173:g2o5g2c3i8"
  dataForm="4175704:a4w7j9"/>

        <div className="head">
          <GreenHeading text="Meal Kits go Packed" />
          <BlackHeading text="Are you ready to become a Co Packer for Brands across the US?" />
        </div>
        {/* <--first sidebar--> */}
        <Sidebar
          rest={[
            {
              sidebar_heading: "KNOWLEDGEBASE",
              sidebar_link: [
                "Win newer accounts with Dailtkit",
                "Dailykit Analytics knows what you need to pack",
              ],
              para_heading: "Restaurants are looking for what you already pack",
              para: [
                "You can be a Ketchup Brand or a Salt Packer, we have customers looking for everything you make. If you are preparing them in portions, we the customers for you. Our Marketplace is a one stop shop for requirements like these that pop up every other day.",
                "Meal Kits have not only opened bigger doors for conventional pre-prepared ingredients like Ketchups or Salt..etc but also for Non Conventional Ingredients like Basil Seeds, Mustard Seeds, Bay Leaves..etc in smaller proportions. If you pack them, Dailykit has a market for you.",
              ],
              para2: [
                {
                  para2_heading: "Win newer accounts with Dailtkit",
                  para2: [
                    "With Dailykit, you will always have customers who would not even know they need your ingredient. Gone are the days where you had to advertise and educate your customers on multiple platforms on how your ingredient makes a dish special.",
                    "Dailykit provides a platform where you can publish your specialty and you can have customers knocking your doors without breaking a sweat. With this, you can earn newer accounts and supply to them regularly in bulk.",
                  ],
                },
                {
                  para2_heading:
                    "Dailykit Analytics knows what you need to pack",
                  para2: [
                    "Dailykit Technology not only provides a one stop shop but also its extensive data gives you an opportunity to analyse what is being portioned the most or what is that specialty item that is in demand..etc.",
                    "This makes your job as a co packer a lot easier as Dailykit will act as your third eye with its data and provides with the right information including seasonal demands of ingredients with its details.",
                    "Dailykit Marketplace is unlike any other Marketplace where you can leverage our Data Analytics tool to learn more about the industry you are in and be on top of the game.",
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
