import React, { PureComponent } from "react";
import "../../style.css";
export default class GamifyYourMarketing extends PureComponent {
  render() {
    return (
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-6 col-xs-10 gamify">
            <div
              style={{
                color: "#1374f6",
                fontWeight: "bolder",
                fontSize: "15px",
                marginBottom: "1rem",
                marginTop: "2rem",
              }}
            >
              DailyKIT Marketing Hub
            </div>
            <h2
              style={{
                fontWeight: "bolder",
                fontSize: "50px",
                marginBottom: "2rem",
              }}
              className="nunito"
            >
              Gamify Your Marketing
            </h2>
            <p
              style={{
                fontSize: "23px",
              }}
            >
              Let Your Imaginations Run Wild. Convert More with Advanced,
              Multi-Conditional Discounting Tools .
            </p>
            <button type="button" class="btn btn-outline-success btn-lg">
              <a
                href="/meal-kit-guides/meal-kit-guides/how-to-sell-your-meal-kits"
                style={{ textDecoration: "none" }}
              ></a>
              TELL ME MORE
            </button>
            <ul
              className="onDemandCategories"
              style={{
                fontSize: "19px",
                marginTop: "2rem",
              }}
            >
              <li>
                Create<b> Smart Coupons</b> that actually appeal to your
                consumers.
              </li>
              <li>
                Build exciting <b>Referral Campaigns</b> for your brand's{" "}
                <b>Viral Growth.</b>
              </li>
              <li>
                <b>Loyalty Points, Wallet Money</b> and more for{" "}
                <b>Increased Customer Retention</b>
              </li>
            </ul>
          </div>
          <div class="col-md-6 col-xs-10 gamify-carousel">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://www.dailykit.org/hubfs/dailykit-assets/homepage/Points.png"
                    class="d-block w-80"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://www.dailykit.org/hubfs/dailykit-assets/homepage/Referral%20Campaigns.png"
                    class="d-block w-80"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://www.dailykit.org/hubfs/dailykit-assets/homepage/Coupons.png"
                    class="d-block w-80"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
