import React from "react";
import dailykit_logo from "./dailykit_logo.svg";
import "./style.css";
const Footer = () => {
  return (
    <>
      <div class="flex-container">
        <div className="footer_section">
          <img
            src={dailykit_logo}
            style={{ width: "50px", paddingBottom: "1rem" }}
            alt="footer_logo"
          />
          <p>
            DailyKit is a Meal Kit Technology Platform
            <br />
            Our software suite - recipe management, manufacturing solution,
            sales and marketing platforms and delivery integrations are
            everything that your company needs to grow.
          </p>
        </div>
        <div className="footer_section">
          <h3>ABOUT US</h3>
          <p>DailyKit Philosophy</p>
        </div>

        <ul className="footer_section">
          <h3>START A MEAL KIT BRAND</h3>

          <li>QSR & Cafes</li>
          <li>Casual and Fine Dining</li>
          <li>Cloud Kitchen</li>
          <li>Bakery</li>
        </ul>

        <ul className="footer_section">
          <h3>Contact us</h3>

          <li>Rishi@dailykit.org</li>

          <li>+13125210704</li>
        </ul>
      </div>

      <div className="copyright">
        Copyright © 2021 DailyKit Inc. All Rights Reserved.
      </div>
    </>
  );
};
export default Footer;
