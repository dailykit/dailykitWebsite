import React, { PureComponent } from "react";
import "../../style.css";
import computerIcon from "../../computerIcon.PNG";
export default class BuildSmarterCampaigns extends PureComponent {
  render() {
    return (
      <>
        <div class="container-fluid">
          <div class="row justify-content-between">
            <div class="col-md-6 col-sm-10 col-xs-10 trend-responsive">
              <img src={computerIcon} width="70px" />
              <h2 className="nunito market-heading">
                Build Smarter Campaigns.
              </h2>{" "}
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                <br />
                Create and deliver engaging experiences, improve customer
                engagement and boost ROI in the process.
              </p>
              <div className="justify-content-center"></div>
            </div>
            <div class="col-md-6 col-sm-10 col-xs-10">
              <img
                src="https://www.dailykit.org/hubfs/dailykit-assets/marketing-overview/Build%20smarter%20campaigns.png"
                class="d-block image-responsive-size"
                alt="..."
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
