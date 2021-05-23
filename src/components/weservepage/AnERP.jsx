import React, { PureComponent } from "react";
import "../../style.css";
export default class AnERP extends PureComponent {
  render() {
    return (
      <>
        <div class="container" style={{ marginTop: "12rem" }}>
          <div class="row justify-content-between">
            <div class="col-md-6 col-xs-10 trend-responsive">
              <h2 className="nunito we-serve-heading">
                An ERP for Large Enterprises
              </h2>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "bolder",
                  color: "silver",
                }}
              >
                Easily address the complexities of large food manufacturers and
                distributors while dealing with high transaction volumes and
                multiple locations.
              </p>
              <button type="button" className="weserve_button1">
                SCHEDULE A MEETING
              </button>
            </div>
            <div class="col-md-6 col-xs-10 right-image-margintop">
              <img
                src="https://www.dailykit.org/hubfs/dailykit-assets/enterprise-solution@2x.png"
                alt="..."
                class="enterprise-image"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
