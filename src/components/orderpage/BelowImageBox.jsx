import React, { PureComponent } from "react";

export default class BelowImageBox extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <div
          style={{
            color: "#1374f6",
            fontWeight: "bolder",
            fontSize: "15px",
            marginBottom: "1rem",
            marginTop: "2rem",
            marginLeft: "4rem",
          }}
        >
          Delivery Integrations
        </div>
        <h2 className="nunito order-fulfillment-heading">
          Explore & Partner with Delivery Providers Around You.
        </h2>
        <div
          class="container"
          style={{
            textAlign: "left",
            marginTop: "6rem",
            padding: "2rem 0rem 6rem 0rem",
          }}
        >
          <div class="row justify-content-evenly mb-4">
            <div
              class="col-md-3 col-xs-10 mt-2 p-4"
              style={{
                background: "linear-gradient(135deg, #121c2d 0%, #101a29 100%)",
                borderRadius: "12px",
              }}
            >
              <small
                style={{
                  color: "white",
                  display: "block",
                  marginBottom: "2rem",
                }}
              >
                Delivery Hub
              </small>{" "}
              <h5
                style={{
                  display: "inline",
                  fontWeight: "bolder",
                  textAlign: "center",
                  color: "#90c345",
                }}
                class="nunito"
              >
                Explore Partners
              </h5>
              <br />
              <p
                style={{
                  fontSize: "14px",
                  marginTop: "2rem",
                  textAlign: "center",
                  color: "white",
                  lineHeight: "1.6rem",
                }}
              >
                DailyKIT provides you the platform to find & connect with
                Delivery Partners, know their terms & conditions & partner with
                them with 100% transparency.
              </p>
            </div>
            <div
              class="col-md-3 col-xs-10 mt-2 p-4"
              style={{
                background: "linear-gradient(135deg, #121c2d 0%, #101a29 100%)",
                borderRadius: "12px",
              }}
            >
              <small
                style={{
                  color: "white",
                  display: "block",
                  marginBottom: "2rem",
                }}
              >
                Delivery Hub
              </small>{" "}
              <h5
                style={{
                  display: "inline",
                  fontWeight: "bolder",
                  color: "#90c345",
                }}
                class="nunito"
              >
                Setup & Assign Delivery Partners on Your Terms
              </h5>
              <br />
              <p
                style={{
                  fontSize: "14px",
                  marginTop: "2rem",
                  textAlign: "center",
                  color: "white",
                  lineHeight: "1.6rem",
                }}
              >
                Assign Deliveries to your Partners based on: delivery day,
                radius, price, and time, then let DailyKIT take care of
                notifying them.
              </p>
            </div>
            <div
              class="col-md-3 col-xs-10 mt-2 p-4"
              style={{
                background: "linear-gradient(135deg, #121c2d 0%, #101a29 100%)",
                borderRadius: "12px",
              }}
            >
              {" "}
              <small
                style={{
                  color: "white",
                  display: "block",
                  marginBottom: "2rem",
                }}
              >
                Delivery Hub
              </small>{" "}
              <h5
                style={{
                  display: "inline",
                  fontWeight: "bolder",
                  color: "#90c345",
                }}
                class="nunito"
              >
                Settle Your Payments Post-Cycle with DailyKIT
              </h5>
              <br />
              <p
                style={{
                  fontSize: "14px",
                  marginTop: "2rem",
                  textAlign: "center",
                  color: "white",
                  lineHeight: "1.6rem",
                }}
              >
                Settle your payments with your Delivery Partners at the end of
                each cycle, and Let us worry about the charge sheet & invoices.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
