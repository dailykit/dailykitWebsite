import React, { PureComponent } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer.js'
import '../style.css'
import ScheduleMeetingSection1 from '../components/shared/ScheduleMeetingSection1'
import BannerSection6 from '../components/shared/BannerSection6'
import Bluebox3 from '../components/menumanagepage/Bluebox3'
import BannerSection3 from '../components/shared/BannerSection3'
export default class MenuManagementpage extends PureComponent {
   render() {
      return (
         <div style={{ marginTop: '12rem' }}>
            <Navbar />
            <BannerSection3
               text={
                  'With our powerful tools at your disposal, menu innovations are just a few clicks away, so be creative and stand-out from the rest.'
               }
               heading={'Be An Innovator'}
               image={
                  'https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/menu/menu-banner.jpg'
               }
               blackbuttontext={'Start Now'}
            />
            <BannerSection6
               greenbuttontext={'Learn More'}
               heading={'Personalization Done Right'}
               para={[
                  'To Eat or To Cook? With DailyKIT you win either way, by offering your customers the choice of Ready-to-Eat or Ready-to-Cook',
                  'How Many Servings? You can choose to offer different products with different available servings.',
                  'What Sides Would You Like? Configure the specfic sides to offer along with a main product.',
                  'How Do You Want It? Offer your customers a choice of different recipes for the main product and sides to cater to your customer’s dietary preferences.'
               ]}
               leftImage={
                  'https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/menu/personalization.gif'
               }
               dataAccount='3161173:g2o5g2c3i8'
               dataForm={'4175704:a4w7j9'}
            />{' '}
            <BannerSection6
               greenbuttontext={'Learn More'}
               heading={'Give Life To Your Menu'}
               para={[
                  'Gone are the days of The Static Menu',
                  'With DailyKIT, you can rotate your menu by days & seasons, and offer special menus for special occasions to bring life to your brand, keeping your valued cusomters coming back for more!'
               ]}
               leftImage={
                  'https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/menu/give-life-to-your-menu2.gif'
               }
               dataAccount='3161173:g2o5g2c3i8'
               dataForm={'4175704:a4w7j9'}
            />
            <Bluebox3
               heading={'Menu Management vs Menu Engineering'}
               buttonlink={'#scheduledemo'}
               buttontext={'Schedule A Meeting'}
               leftpara={
                  "Menu management is a general menu building excercise done periodically and ideally before the start of business each day, where you simply build & discuss your menu, as well as specials and substitutions, rather than getting into the weeds of your customer's demands and desires. Novice businesses often miss out on the importance of menu engineering."
               }
               rightpara={
                  "Menu Engineering is Active & Modern Menu Management. Ask yourself: When was the last time you paid detailed attention to your menu and revamped it according to your customer's expectations? With increased competition, providing newer experiences to your customers is necessary to help you stand out and ultimately drive the success you wish for."
               }
            />
            <BannerSection6
               greenbuttontext={'Learn More'}
               heading={'How Intimately Do You Know Your Food Costs?'}
               para={[
                  'It’s impossible to optimize business profitablity without having a detailed handle on your Food Costs.',
                  "DailyKIT’s Automated Food Cost Tracking gives you all of the data you'll need to help you run a successful and profitable business."
               ]}
               rightImage={
                  'https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/menu/Food-cost.png'
               }
               dataAccount='3161173:g2o5g2c3i8'
               dataForm={'4175704:a4w7j9'}
            />
            <BannerSection6
               greenbuttontext={'Learn More'}
               heading={'Zero In On Product Pricing.'}
               para={[
                  "No more back-of-the-envelope math. No more calculators and excel sheets. With DailyKIT’s Intelligent Product Pricing, you can easily set target food cost %'s and get a suggested price range that falls within your targeted food cost. With minimal effort and easy decision making, set your menu prices like the experts."
               ]}
               rightImage={
                  'https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/menu/product-pricing.png'
               }
               dataAccount='3161173:g2o5g2c3i8'
               dataForm={'4175704:a4w7j9'}
            />
            <BannerSection6
               buttonlink={'#scheduledemo'}
               heading={'Automation is the New Mantra.'}
               para={[
                  'Today Nutritional & Allergen data are one of the most important factors in the consumer’s decision making process.',
                  'Unlike other tools, DailyKIT automatically builds a nutrition chart for you.'
               ]}
               rightImage={
                  'https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/menu/automation.png'
               }
               buttontext={'Schedule A Meeting'}
            />
            <ScheduleMeetingSection1
               heading={'Schedule an E-Meeting'}
               image={
                  'https://static.hsappstatic.net/ui-images/static-2.377/optimized/errors/map.svg'
               }
               id={'scheduledemo'}
               content={[
                  {
                     question: 'How Do You Schedule A Meeting?',
                     answer:
                        'Select the date on the calendar, the time slot, and then simply fill in your information. Done!'
                  },
                  {
                     question: 'What Happens After You Schedule A Meeting?',
                     answer:
                        "We will send you a calendar invite to your supplied email address with the Google Meet link at the scheduled date & time.In the event that you're unable to join by laptop/computer, we will call you on the given phone number"
                  },
                  {
                     question: 'What Happens During The Meeting?',
                     answer:
                        'We invite you to share good, bad and the ugly of your business. After understanding your requirements and concerns, we will figure out how to deploy the proper DailyKIT tech solutions based on your business strategy.'
                  }
               ]}
            />
            <Footer />
         </div>
      )
   }
}
