import React, { PureComponent } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import "../../style.css";
import BlackHeading from "../../components/BlackHeading";
import BlogSection from "../../components/BlogSection";
import GreenHeading from "../../components/GreenHeading";
import Sidebar from "../../components/Sidebar";
export default class For_Restaurants extends PureComponent {
  render() {
    return (
      <div>
        <Navbar />
        <Restaurants />
        <Footer />
      </div>
    );
  }
}

export class Restaurants extends PureComponent {
  render() {
    return (
      <div>
        <div className="head">
          <GreenHeading text="Fine Dine customers love Meal Kits the most since" />
          <BlackHeading text="Your recipes are unique, Loyal Customers & You can get very high ROI" />
        </div>
        {/* <--first sidebar--> */}
        <Sidebar
          rest={[
            {
              sidebar_heading:
                "WHY FINE DINING RESTAURANTS SHOULD DO MEAL KITS?",
              sidebar_link: [
                "Low turnout on regular week nights",
                "Losing revenue by unexpected crowd",
                "Conundrum to partner with 3rd party delivery or not",
              ],
              para_heading: "Fine dining or experience restaurants ",
              para: [
                "are the places that we love to dine in. They provide an ambiance and service to look forward to. There are hardly any restaurants who can attribute their loyal customers to ambiance and service alone. Everyone knows that if the food ain’t right, then the place ain’t right.",
                "So, if you are running your establishment successfully, we have a reason to believe that your food is exceptional and makes people come to you again and again. Every business has some challenges and the case is same here.",
                "Below we discuss some of the challenges faced by fine dining",
              ],
              para2: [
                {
                  para2_heading: "Low turnout on regular week nights",
                  para2: [
                    "Most people follow the corporate style, hangout on weekends and relax at home on regular nights. It is not uncommon to see, restaurants almost empty on most of the nights and crowded way above capacity on weekends and some special dates.",
                    "It would be a shame if fancy dishes like yours were to be delivered cooked in some plastic ware and we know that . Your chef curated meals does not deserve that.",
                    "Well, if there’s any truth to success behind blueapron, it’s their fancy recipes that people love to cook at home. It makes them feel like a chef and gives them a satisfaction that is only making them more loyal to company like BA.",
                    "So what do you do now?",
                    "With Meal Kits, you have a chance to build brand loyalty with your  customers and add new customers who would love to cook your recipes at home, try and succeed to make it look like and bring out the flavours your chefs intended.",
                  ],
                },
                {
                  para2_heading: "Losing revenue by unexpected crowd",
                  para2: [
                    "Table reservations.. They have been a social norm for past many decades. When a place is so successful that people have to reserve the tables hours before to in some cases even months.",
                    "As an establishment owner, you are proud and satisfied with this enormous success but losing clients who were impromptu and impulsive may mean that you may lose them forever. Countless incidents have been heard when people tired of waiting and reservations, choose places that they are certain would be available.",
                    "Well here again, adding Meal Kits, any customer who is there for food and not particularly for ambiance, have an opportunity to cook your meal kit at home and not disappoint their spouse on anniversary for their failure to secure a reservation.",
                    "Adding new item in menu is a risk",
                    "How often do you introduce and play around with your menu? Your menu for cooked food is something that should not be fooled around with but how does your culinary team test out the recipes if not put on the menu?",
                    "Well, with meal kits, you have an opportunity to develop a recipe, and test it in market before introducing that to your main menu",
                  ],
                },
                {
                  para2_heading:
                    "Conundrum to partner with 3rd party delivery or not",
                  para2: [
                    "As said in the first point, delivery in plastic ware wouldn’t do justice to your finely chef curated meals. We know that you know that which is why such a low percentage of fine dining places are present on these marketplaces.",
                    "Condensation, coldness, shakiness in delivery? Those fancy meals couldn’t handle that. Well, with meal kits, any recipe is delivery safe. People cook them at home and garnish the way you direct them to with recipe cards.",
                    "Meaning? Well, now you can sell meal kits on aggregators and instead of runining your brand image, you’ll be getting more revenue and increased brand loyalty.",
                    "Some examples of some fine dining restaurants doing meal kits in one of the forms is one of steakhouses out of NY. This place, sells kits of steaks costing about 300 dollars and they sell quite a lot.",
                    "So, we don’t know what you’re waiting for but if you want to learn how we help you do it, then read our section.",
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
