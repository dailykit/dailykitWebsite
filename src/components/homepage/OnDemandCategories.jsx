import React, { PureComponent } from "react";
import "../../style.css";
export default class OnDemandCategories extends PureComponent {
  render() {
    return (
      <div class="container">
        <div
          class="row justify-content-center categories"
          style={{
            fontSize: "15px",
            fontWeight: "bold",
            marginBottom: "10rem",
            marginTop: "10rem",
          }}
        >
          <div class="col-md-3 col-xs-10">
            <ul class="onDemandCategories">
              <li>On-Demand Online Store</li>
              <li>Online Subscription Store</li>
              <li>Unlimited Ghost Brands</li>
              <li>iOS & Android Apps(Upon Request)</li>
            </ul>
          </div>
          <div class="col-md-3 col-xs-10">
            <ul class="onDemandCategories">
              <li>Marketplace Integrations(Coming Soon)</li>
              <li>Your Own Custom Domain</li>
              <li>Custom Brand Pages</li>
              <li>Easy Payment & Checkout Experiences</li>
            </ul>
          </div>
          <div class="col-md-3 col-xs-10">
            <ul class="onDemandCategories">
              <li>Combo Products</li>
              <li>Build Your Own Meal</li>
              <li>Modifiers</li>
              <li>Sort, Filter & Search</li>
            </ul>
          </div>
          <div class="col-md-3 col-xs-10">
            <ul class="onDemandCategories">
              <li>Nutrition & Allergens</li>
              <li>Product Recommendations</li>
              <li>Recipe Pages</li>
              <li>Order & Delivery Tracking</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
