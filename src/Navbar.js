import React, { PureComponent } from "react";
import "./style.css";
import "./dropdown.css";
export default class Navbar extends PureComponent {
  render() {
    return (
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-light bg-light"
        style={{
          border: "0px solid black",
          boxShadow: "5px 5px 5px #888888",
        }}
      >
        <div className="container-fluid mt-2 mb-2">
          <a className="navbar-brand" href="/" style={{ marginLeft: "1.5rem" }}>
            <img
              src="https://www.dailykit.org/hs-fs/hubfs/Group%2056-1.png?name=Group%2056-1.png"
              alt=""
              width="181"
              height="54"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav special-styling me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  style={{
                    color: "#113D63",
                    fontWeight: "600",
                    marginLeft: "0.7rem",
                    fontSize: "14px",
                  }}
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sell
                </a>
                <ul
                  className=" special-styling dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                      href="/sells/on-demand-online-store"
                    >
                      onDemand Store
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                      href="/sells/subscription-online-store"
                    >
                      Subscription Store
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                      href="/menu/overview"
                    >
                      Menu Management
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  style={{
                    color: "#113D63",
                    fontWeight: "600",
                    marginLeft: "0.7rem",
                    fontSize: "14px",
                  }}
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Operate
                </a>
                <ul
                  className=" special-styling dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                      href="/operate/centralized-order-dashboard"
                    >
                      Centralized Order Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                      href="/operate/order-routing-and-kitchen-display-system"
                    >
                      Order Routing & KDS
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                      href="/operate/order-fulfillment"
                    >
                      Order Fulfillment Management
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                      href="/operate/packaging-management"
                    >
                      Packaging Management
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                      href="/operate/portion-control"
                    >
                      Portion Control
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{
                    color: "#113D63",
                    fontWeight: "600",
                    marginLeft: "0.7rem",
                    fontSize: "14px",
                  }}
                  href="/market"
                >
                  Market
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{
                    color: "#113D63",
                    fontWeight: "600",
                    marginLeft: "0.7rem",
                    fontSize: "14px",
                  }}
                  href="/we_serve"
                >
                  We Serve
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  style={{
                    color: "#113D63",
                    fontWeight: "600",
                    marginLeft: "0.7rem",
                    fontSize: "14px",
                  }}
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Start a Meal Kit Brand
                </a>
                <ul
                  className=" special-styling dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                    >
                      For Restaurants ▼
                    </a>
                    <ul className="special-styling">
                      <li>
                        <a href="/restaurants/fine-dine-restaurants">
                          Casual and Fine Dining
                        </a>
                      </li>
                      <li>
                        <a href="/restaurants/cafes">QSR, Cafes</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                    >
                      For Enterprise ▼
                    </a>
                    <ul className="special-styling">
                      <li>
                        <a href="/enterprise/grocers">Grocers</a>
                      </li>
                      <li>
                        <a href="/enterprise/meal-kit-startups">
                          Meal kit Startups
                        </a>
                      </li>
                      <li>
                        <a href="/enterprise/how-dailykit-can-help-franchisees">
                          Franchisees
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                      href="/cloud_kitchen"
                    >
                      Cloud Kitchen
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                      href="/bakerypage"
                    >
                      Bakery
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                    >
                      Meal Kit Guides ▼
                    </a>
                    <ul className="special-styling">
                      <li>
                        <a href="/meal-kit-guides/meal-kit-packaging">
                          Meal Kit Packaging
                        </a>
                      </li>
                      <li>
                        <a>The Meal Kit Marketing Guide ▼</a>
                        <ul className="special-styling">
                          <li>
                            <a href="/meal-kit-guides/meal-kit-guides/how-to-decide-your-meal-kits">
                              How to decide your meal kits
                            </a>
                          </li>
                          <li>
                            <a href="/meal-kit-guides/meal-kit-guides/how-to-price-your-meal-kits">
                              How to price your meal kits
                            </a>
                          </li>
                          <li>
                            <a href="/meal-kit-guides/meal-kit-guides/how-to-promote-your-meal-kits">
                              How to promote your meal kits
                            </a>
                          </li>
                          <li>
                            <a href="/meal-kit-guides/meal-kit-guides/how-to-sell-your-meal-kits">
                              How to sell your meal kits
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                    >
                      Start Meal Kit Brand ▼
                    </a>
                    <ul className="special-styling">
                      <li>
                        <a href="/start-meal-kit-brands/what-is-meal-kit">
                          What is a Meal Kit?
                        </a>
                      </li>
                      <li>
                        <a href="/start-meal-kit-brands/how-to-start-a-Meal-Kit-Service">
                          How to start a Meal Kit Service
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                    >
                      Case study ▼
                    </a>
                    <ul className="special-styling">
                      <li>
                        <a href="/case-study/Groctaurant-Case-Study">
                          Groctaurant Case Study
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                    >
                      Do more ▼
                    </a>
                    <ul className="special-styling">
                      <li>
                        <a href="/do-more/Recipe-Provider">Recipe Provider</a>
                      </li>
                      <li>
                        <a href="/do-more/Co-Packer">Co-Packer</a>
                      </li>
                      <li>
                        <a href="/do-more/Co-Seller">Co-Seller</a>
                      </li>
                      <li>
                        <a href="/do-more/Delivery-Partner">Delivery Partner</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  style={{
                    color: "#113D63",
                    fontWeight: "600",
                    marginLeft: "0.7rem",
                    fontSize: "14px",
                  }}
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </a>
                <ul
                  className=" special-styling dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                      href="/Aboutus/Ourphilosophy"
                    >
                      Our Philosophy
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                      href="/AboutUs/Blog"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{
                    color: "#113D63",
                    fontWeight: "600",
                    marginLeft: "0.7rem",
                    fontSize: "14px",
                  }}
                  href="#scheduledemo"
                >
                  Schedule Demo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
