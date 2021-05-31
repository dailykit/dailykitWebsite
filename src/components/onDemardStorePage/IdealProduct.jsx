import React, { PureComponent } from "react";
export default class IdealProduct extends PureComponent {
  render() {
    return (
      <div>
        <h5
          style={{
            textAlign: "center",
            color: "#8ac03b",
            fontWeight: "600",
            marginTop: "10.5rem",
          }}
        >
          For Every Trend Out There
        </h5>
        <div
          style={{
            textAlign: "center",
            marginTop: "2.3rem",
            marginBottom: "1.2rem",
          }}
        >
          <h1
            style={{
              fontWeight: "bolder",
              fontSize: "3rem",
              fontFamily: "'Nunito', sans-serif",
              letterSpacing: "1.5px",
            }}
          >
            Ideal Product Presentations
          </h1>
        </div>

        {/* carousel */}

        <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              class="invisible"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              class="invisible"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>

            <button
              class="invisible"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img
                src="https://www.dailykit.org/hubfs/dailykit-assets/customizableProduct.gif"
                class="d-block w-30"
                alt="..."
              />
              <div
                class="carousel-caption d-none w-60 d-md-block"
                style={{ textAlign: "left", marginLeft: "28rem" }}
              >
                <h5
                  style={{
                    textAlign: "left",
                    color: "#8ac03b",
                    fontWeight: "600",
                    marginTop: "10.5rem",
                  }}
                >
                  Customer's Choice
                </h5>
                <div
                  style={{
                    textAlign: "left",
                    marginTop: "2.3rem",
                    marginBottom: "1.2rem",
                  }}
                >
                  <h1
                    style={{
                      fontWeight: "bolder",
                      fontSize: "3.5rem",
                      fontFamily: "'Nunito', sans-serif",
                      letterSpacing: "1.5px",
                    }}
                  >
                    Customizable Products
                  </h1>
                </div>
                <h3>
                  Allow to customers to modify different components of a dish.
                </h3>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img
                src="https://www.dailykit.org/hubfs/dailykit-assets/customizableProduct.gif"
                class="d-block w-30"
                alt="..."
              />
              <div
                class="carousel-caption d-none w-50 d-md-block"
                style={{ textAlign: "left", marginLeft: "25rem" }}
              >
                <h5
                  style={{
                    textAlign: "left",
                    color: "#8ac03b",
                    fontWeight: "600",
                    marginTop: "10.5rem",
                  }}
                >
                  Cross-Sell & Up-Sell
                </h5>
                <div
                  style={{
                    textAlign: "left",
                    marginTop: "2.3rem",
                    marginBottom: "1.2rem",
                  }}
                >
                  <h1
                    style={{
                      fontWeight: "bolder",
                      fontSize: "3.5rem",
                      fontFamily: "'Nunito', sans-serif",
                      letterSpacing: "1.5px",
                    }}
                  >
                    Accompaniments
                  </h1>
                </div>
                <h3>
                  Recommend & Showcase Cross-Sell Products such as Beverages,
                  Desserts and More..
                </h3>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://www.dailykit.org/hubfs/dailykit-assets/customizableProduct.gif"
                class="d-block w-30"
                alt="..."
              />
              <div
                class="carousel-caption d-none w-50 d-md-block"
                style={{ textAlign: "left", marginLeft: "28rem" }}
              >
                <h5
                  style={{
                    textAlign: "left",
                    color: "#8ac03b",
                    fontWeight: "600",
                    marginTop: "10.5rem",
                  }}
                >
                  Extra Product Presentations
                </h5>
                <div
                  style={{
                    textAlign: "left",
                    marginTop: "2.3rem",
                    marginBottom: "1.2rem",
                  }}
                >
                  <h1
                    style={{
                      fontWeight: "bolder",
                      fontSize: "3.5rem",
                      fontFamily: "'Nunito', sans-serif",
                      letterSpacing: "1.5px",
                    }}
                  >
                    Flexible Combo Options{" "}
                  </h1>
                </div>
                <h3>Suited for "Build Your Own Meal" concepts</h3>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <a href="#scheduledemo">
          <button
            type="button"
            class="btn-style-thirteen green responsive-button"
          >
            Get Started Now
          </button>
        </a>
      </div>
    );
  }
}

{
  /* <img
src="https://www.dailykit.org/hubfs/dailykit-assets/customizableProduct.gif"
class="d-block w-30"
alt="..."
/> */
}

{
  /*  */
}
