import React, { PureComponent } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import "../../style.css";
import BlackHeading from "../../components/BlackHeading";
import BlogSection from "../../components/BlogSection";
import GreenHeading from "../../components/GreenHeading";
import Sidebar from "../../components/Sidebar";
import FormSection1 from "../../components/FormSection1";
export default class MealkitStartups extends PureComponent {
  render() {
    return (
      <div>
        <Navbar />
        <MealkitStartupsComponent />
        <Footer />
      </div>
    );
  }
}

export class MealkitStartupsComponent extends PureComponent {
  render() {
    return (
      <div>
         <FormSection1 dataAccount="3161173:g2o5g2c3i8"
  dataForm="4175704:a4w7j9"/>
        <div className="head">
          <GreenHeading text="Start your business journey" />
          <BlackHeading text="Explore all the tools you need to start, run, and grow your business" />
        </div>
        {/* <--first sidebar--> */}
        <Sidebar
          rest={[
            {
              sidebar_heading: "WHY YOU SHOULDN'T BUILD YOUR OWN TECHNOLOGY?",
              sidebar_link: [
                "We founders aren’t CTOs",
                "Building a technology product",
                "Raise funds",
              ],
              para_heading: "",
              para: [
                "If you are a founder of a Meal Kit Brand, we’re so glad you’re here.",
                "I’m Rishi, founder of Dailykit and before Dailykit, I was founder of a meal kit company.",
                "Here are the experience from my previous company and other meal kit founders who were in the industry,",
              ],
              para2: [
                {
                  para2_heading: "We founders aren’t CTOs",
                  para2: [
                    "We all know that meal kit operations require a custom technology because it’s much deeper and complex. When I started my company, I was in constant search for a CTO for my company. One thing that is rarer than the rarest things on earth, are CTOs.",
                    "We ourselves are passionate about bringing good food to the people but often restrained by our skills.",
                  ],
                },
                {
                  para2_heading: "Building a technology product",
                  para2: [
                    "Let’s say you found a CTO or decided to be CTO of your company like me (Fine, I’ll do it myself attitude), we all know the problem is just starting.",
                    "Now, you require product managers, developers, UI/UX designer and what not.",
                    "Let me ask you? Are you in the business of selling food or selling technology. Building your own technology in the context of Meal kit is same as building your own ERP/Restaurant management system if you want to start a restaurant",
                  ],
                },
                {
                  para2_heading: "Raise funds",
                  para2: [
                    "What comes first? Chicken or Egg? Well, that’s the nightmare of every startup founder. Funding would come when you become big, you become big when you have the technology and resources, you can have the tech and resources when you have funding. Sigh!",
                    "Well, you can read more on “You don’t need VC money to start a meal kit brand”",
                    "In all essence, I decided to be the CTO of my company and it taught me a lesson that the technology I was building can come to use of founders of other meal kit companies like me.",
                    "So, if you are thinking of competing with Dailykit in future, we welcome you to build your own tech (we’re open source, so you can fork us on github). But if your passion is to be in food industry, then don’t get into the sink of IT expenditures and take help of Dailykit in succeeding yourself.",
                  ],
                },
              ],
            },
          ]}
        />

        {/* <--first sidebar--> */}

        <Sidebar
          rest={[
            {
              sidebar_heading: "HOW DAILYKIT HELPS YOU?",
              sidebar_link: [
                "Recipes",
                "Manufacturing/Fulfillment",
                "Market and Sell",
                "Delivery",
              ],
              para_heading: "Dailykit being an open source technology",
              para: [
                " company is non-opinionated on how meal kit brands should be run. So, using our technology, you can add meal kits to your business in a way that suits you best.",
                "Our solution is divided in 4 parts.",
              ],
              para2: [
                {
                  para2_heading: "Recipes",
                  para2: [
                    "Using advanced recipe management tools, your chefs can very easily curate your existing recipes or new recipes in form of meal kits.",
                    "It will be your business decision, but our tool allows you to make recipes smart meaning you can add variations for some specific niches like vegan/low calorie etc.",
                  ],
                },
                {
                  para2_heading: "Manufacturing/Fulfillment",
                  para2: [
                    "Dailykit solution can be very easily integrated inside your kitchen. Our simple and easy to use weighing scales will make portioning and packing so easy that even a child can pack meal kits (not that you should use child labour).",
                    "The essence is that Dailykit makes packing meal kits idiot proof, leaving no room for errors.",
                  ],
                },
                {
                  para2_heading: "Market and Sell",
                  para2: [
                    "Using Dailykit, you can decide which platforms to sell and market your product on. From your own website to 3rd party aggregators, you have a variety of choice.",
                    "We understand that you may have some restrictions in relation to the lead time on order and delivery days so you can very easily fine tune the availability period for your meal kit offering.",
                  ],
                },
                {
                  para2_heading: "Delivery",
                  para2: [
                    "We know that you wouldn’t have your own delivery fleet and are in no interest to have one. So, using integrated delivery partner on the platform, you can choose different companies to deliver your product, either in real time or for pre-orders.",
                    "Be assured that you’ll get all the help from our customer support and we don’t hesitate to go the extra mile and help you.",
                    "So, let’s be partner in profit and bring us today, our daily kits.",
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
