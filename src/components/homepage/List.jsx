import React, { PureComponent } from "react";
import "../../style.css";
export default class List extends PureComponent {
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
              <li>Centralized Order Management</li>
              <li>KOT & Kitchen Display Systems</li>
              <li>Supplier, Inventory & Mise-en-Place Management</li>
            </ul>
          </div>
          <div class="col-md-3 col-xs-10">
            <ul class="onDemandCategories">
              <li>Third-Party Delivery Integrations</li>
              <li>Check-Weighing-based Portion Control</li>
              <li>QR Scan-based Assembly Flows</li>
            </ul>
          </div>
          <div class="col-md-3 col-xs-10">
            <ul class="onDemandCategories">
              <li>Order Routing Between Kitchen Stations</li>
              <li>Work-Orders for Shift Planning</li>
              <li>Planned/Batch Production Mode</li>
            </ul>
          </div>
          <div class="col-md-3 col-xs-10">
            <ul class="onDemandCategories">
              <li>Standard Operating Procedures</li>
              <li>Hardware (Label & Receipt Printers, Weighing Scales)</li>
              <li>Product & Ingredient Label Printing</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
