import React, { PureComponent } from "react";
import "../../style.css";
export default class OrderNotification extends PureComponent {
  render() {
    return (
      <div style={{ backgroundColor: "#F7F9FC", textAlign: "center" }}>
        <div style={{ color: "#F7F9FC" }}>.</div>
        <h2
          style={{
            fontWeight: "bolder",
            fontSize: "50px",
            margin: "4rem 0rem 0.5rem 0rem",
          }}
          className="nunito"
        >
          {this.props.heading ? this.props.heading : "Order Notifications"}
        </h2>
        <h6>
          {this.props.subheading
            ? this.props.subheading
            : `It is vital that no order slips through the cracks.
         Get Notifications where you want.`}
        </h6>
        <div
          class="container"
          style={{
            textAlign: "center",
            marginTop: "1rem",
            padding: "2rem 0rem 0rem 0rem",
          }}
        >
          <div class="row justify-content-evenly">
            <div class="col-md-3 col-xs-10 p-4  justify-content-center">
              <img
                alt="icon"
                src={this.props.image1}
                style={{
                  width: "220px",
                  display: "block",
                  margin: "0rem 40% 2rem 30%",
                }}
              />
              <h5
                style={{
                  display: "inline",
                  fontWeight: "bolder",
                  fontSize: "21px",
                  textAlign: "center",
                }}
                class="nunito"
              >
                {this.props.imagetitle1
                  ? this.props.imagetitle1
                  : "Create Custom Plans & Options"}
              </h5>
              <br />
              <p
                style={{
                  fontSize: "14px",
                  marginTop: "1rem",
                  textAlign: "center",
                }}
              >
                {this.props.imagepara1
                  ? this.props.imagepara1
                  : `Multiple Plans like Vegan or Seafood | Couple or family | 2 or 3
                  items. It's upto you.`}
              </p>
            </div>
            <div class="col-md-3 col-xs-10 p-4  justify-content-center">
              <img
                alt="icon"
                src={this.props.image2}
                style={{
                  width: "220px",
                  display: "block",
                  margin: "0rem 40% 2rem 30%",
                }}
              />
              <h5
                style={{
                  display: "inline",
                  fontWeight: "bolder",
                  fontSize: "21px",
                }}
                class="nunito"
              >
                {this.props.imagetitle2 ? this.props.imagetitle2 : `Print KOTs`}
              </h5>
              <br />
              <p
                style={{
                  fontSize: "14px",
                  marginTop: "1rem",
                  textAlign: "center",
                }}
              >
                {this.props.imagepara2
                  ? this.props.imagepara2
                  : `Automatically Print KOTs with Order Details for the Manager &
                  Kitchen Stations.`}
              </p>
            </div>
            <div class="col-md-3 col-xs-10 p-4  justify-content-center">
              {" "}
              <img
                alt="icon"
                src={this.props.image3}
                style={{
                  width: "220px",
                  display: "block",
                  margin: "0rem 40% 2rem 30%",
                }}
              />{" "}
              <h5
                style={{
                  display: "inline",
                  fontWeight: "bolder",
                  fontSize: "21px",
                }}
                class="nunito"
              >
                {this.props.imagetitle3
                  ? this.props.imagetitle3
                  : `Email & SMS Notifications`}
              </h5>
              <br />
              <p
                style={{
                  fontSize: "14px",
                  marginTop: "1rem",
                  textAlign: "center",
                }}
              >
                {this.props.imagepara3
                  ? this.props.imagepara3
                  : `Configure Email & SMS to be sent to multiple staff members
                  anytime a new order is received.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
