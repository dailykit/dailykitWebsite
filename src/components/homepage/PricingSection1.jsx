import React, { PureComponent } from "react";
import "../../style.css";
import TrialForm from "../shared/TrialForm";
export default class PricingSection1 extends PureComponent {
  render() {
    return (
      <div className="nunito pricingsection1">
        <h6 className="price-heading">Our Pricing</h6>
        <div class="container">
          <div class="row justify-content-center">
            {this.props.offers.map((offer) => {
              return (
                <div class="col-md-6 col-xs-10">
                  <div class="card pricing-box">
                    <div class="card-body">
                      <h4 class="card-subtitle">{offer.name}</h4>
                      <h1 class="card-title">{offer.price}</h1>
                      <h4 class="card-subtitle">{offer.feature1}</h4>
                      <h4 class="card-subtitle">{offer.feature2}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <TrialForm
            dataAccount={"3161173:g2o5g2c3i8"}
            dataForm={"4175542:d4z0s3"}
          />
        </div>
      </div>
    );
  }
}
