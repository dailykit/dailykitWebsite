import React, { PureComponent } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import "../../style.css";
import BlackHeading from "../../components/BlackHeading";
import BlogSection from "../../components/BlogSection";
import GreenHeading from "../../components/GreenHeading";
import Sidebar from "../../components/Sidebar";
import FormSection1 from "../../components/FormSection1";
export default class RecipeProvider extends PureComponent {
  render() {
    return (
      <div>
        <Navbar />
        <RecipeProviderComponent />
        <Footer />
      </div>
    );
  }
}

export class RecipeProviderComponent extends PureComponent {
  render() {
    return (
      <div>
        
  <FormSection1 dataAccount="3161173:g2o5g2c3i8"
  dataForm="4175704:a4w7j9"/>

        <div className="head">
          <GreenHeading text="Don’t just depend on Advertising Revenue" />
          <BlackHeading text="Say HELLO to Royalties" />
        </div>
        {/* <--first sidebar--> */}
        <Sidebar
          rest={[
            {
              sidebar_heading: "KNOWLEDGEBASE",
              sidebar_link: [
                "Have a recipe blog? Let your followers order Meal Kits of your recipes",
                "Enterprise Brand? Get Maximum ROI from your culinary investments",
                "How DailyKIT helped Groctaurant to Upsell and Cross Sell Meal Kits and Cooked Food",
                "With DailyKit’s technology, it is super-easy to to partner with manufacturers and earn royalties.",
              ],
              para_heading:
                "Got Recipe with a twist? Publish your Grandma’s Recipe for community to cook.",
              para: [
                "People always look forward to trying out a new recipe. Every new recipe is like a drug that has to be experimented upon. If you happen to have a recipe that you are confident that will blow away people’s minds, then you would proudly publish them.",

                "Now when you know your recipe is special, so will the people. So might as well make some revenue out of it right? Dailykit makes it easy for you to make revenue from your recipe. Become a part of the Dailykit community and enjoy being a celebrity of the food world.",
              ],
              para2: [
                {
                  para2_heading:
                    "Have a recipe blog? Let your followers order Meal Kits of your recipes",
                  para2: [
                    "If you are running a blog with recipes and are attracting some traffic, you might want to think about letting more people know about them. With Dailykit, your recipes will get undivided attention from many of our patrons in the Marketplace.",

                    "If you are running a Blog then our Marketplace is just the place to be. We have thousands of Restaurants just waiting to get their hands on new recipes. All your Recipes can be priced well and if your recipe is magic, it will generate revenue",
                  ],
                },
                {
                  para2_heading:
                    "Enterprise Brand? Get Maximum ROI from your culinary investments",
                  para2: [
                    "Do you have an R&D kitchen in your company or work with chefs to bring out new ideas using your product, be it any specialty ingredient or a Cooking Equipment?",
                    "Well, chances are your recipes are not really creating any effect to help people buy your product and the expected ROI from this work is probably low but you still do it because of FOMO.",
                    "Well, using Dailykit’s recipe marketplace, your recipes can be exposed to meal kits brands who will use those recipes which could contain your ingredient or use your equipment. Well, Meal kits are the perfectly exposed partner to get maximum out of your culinary investments.",
                  ],
                },
                {
                  para2_heading:
                    "How DailyKIT helped Groctaurant to Upsell and Cross Sell Meal Kits and Cooked Food",
                  para2: [
                    "One of the biggest requirement for Groctaurant was to Upsell and Cross Sell Cooked Food with Meal Kits.",
                    "Groctaurant’s consumer base was working millennials, families and bachelors. Depending on different needs, they used to order accordingly. A particular example can be of a customer who ordered bigger servings of meal kits on weekends to host a party with their family and friends. And the same customer, also ordered from Groctaurant for their dietary food requirements which came pre-cooked and ready to consume.",
                    "Selling Meal Kits and Cooked food allowed Groctaurant to reach out to all the need states of a consumer. This helped Groctaurant differentiate itself from other restaurants and significantly helped with its branding exposure on social media and word of mouth.",
                    "Selling Meal Kits also brought on consumers who strictly followed cooking at home and would hardly visit the restaurant or order cooked food.",
                  ],
                },
                {
                  para2_heading:
                    "With DailyKit’s technology, it is super-easy to to partner with manufacturers and earn royalties.",
                  para2: [
                    "Partner with Dailykit and and use our Technology to be an Influencer in your Niche. Do you want to partner with a Manufacturer for a particular ingredient, get your hands on the newest or the most trending recipes or just make some revenue, Dailykit shows you the way.",
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
