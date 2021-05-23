import React, { PureComponent } from "react";
import "../../style.css";
import map2 from "../../assets/map2.PNG";
import assign from "../../assets/assign.PNG";
import Control from "../../assets/Control.PNG";
export default class Digitalise extends PureComponent {
  render() {
    return (
      <>
        <div class="container" style={{ marginTop: "8rem" }}>
          {" "}
          <small
            style={{
              color: "#8ac03b",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "6rem",
            }}
            class="nunito"
          >
            Define As You Go
          </small>
          <h2
            style={{
              fontWeight: "bolder",
              fontSize: "50px",
              margin: "1rem 0rem 2rem 0rem",
            }}
            className="nunito"
          >
            Digitalize Your Kitchen Operations
          </h2>
          <div class="row justify-content-between">
            <div class="col-md-6 col-xs-10">
              <div class="row justify-content-evenly">
                <div
                  class="col-12 p-4"
                  style={{ boxShadow: "0px 10px 20px rgb(19 116 246 / 10%);" }}
                >
                  <img src={map2} alt="icon" width="50px" />
                  <h4 style={{ fontWeight: "bolder", display: "inline" }}>
                    Station Operations
                  </h4>
                  <small
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.6rem",
                      display: "block",
                    }}
                  >
                    Integrate your existing workstations with DailyKIT
                    (packaging or processing stations, i.e. prep, meat, fish,
                    sauce, assembly, etc.) and track the real-time status
                    updates of each product as it flows through each
                    workstation.
                  </small>
                </div>
              </div>
              <div class="row justify-content-evenly">
                <div
                  class="col-12 p-4"
                  style={{ boxShadow: "0px 10px 20px rgb(19 116 246 / 10%);" }}
                >
                  <img src={assign} alt="icon" width="50px" />
                  <h4 style={{ fontWeight: "bolder", display: "inline" }}>
                    Assign Operators to Your Stations
                  </h4>
                  <small
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.6rem",
                      display: "block",
                    }}
                  >
                    DailyKIT enables labor assignment to each workstation &
                    shows real-time work status at each station.
                  </small>
                </div>
              </div>
              <div class="row justify-content-evenly">
                <div
                  class="col-12 p-4"
                  style={{ boxShadow: "0px 10px 20px rgb(19 116 246 / 10%);" }}
                >
                  <img src={Control} alt="icon" width="50px" />
                  <h4 style={{ fontWeight: "bolder", display: "inline" }}>
                    Grant & Control Permissions
                  </h4>
                  <small
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.6rem",
                      display: "block",
                    }}
                  >
                    Be it to Accept or Reject an order on KDS, Mark Packaging,
                    Assembly of an Item or Whole Order manually, with DailyKIT
                    you can grant and control specific permissions to each
                    operator.
                  </small>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xs-10 imagebox18"></div>
          </div>
        </div>
      </>
    );
  }
}
