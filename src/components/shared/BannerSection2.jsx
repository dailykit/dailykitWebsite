import React, { PureComponent } from "react";
import "../../style.css";

export default class BannerSection2 extends PureComponent {
  render() {
    return (
      <div className="container nunito">
        <div class="row justify-content-center text-center">
          {this.props.leftimageurl && (
            <div class="col-md-6 col-xs-10 leftimage1">
              <img src={this.props.leftimageurl} alt="women-cooking" />
            </div>
          )}
          <div class="col-md-5 col-xs-10 trend-responsive banner-section1-description">
            {this.props.bluesubheading && (
              <div class="bluesubheading">{this.props.bluesubheading}</div>
            )}
            {this.props.subheading && (
              <div class="subheading2">{this.props.subheading}</div>
            )}
            {this.props.heading && <h2>{this.props.heading}</h2>}
            {this.props.description && (
              <p class="descriptiontype1">{this.props.description}</p>
            )}{" "}
            {this.props.descriptiontype2 && (
              <p class="descriptiontype2 nunito">
                {this.props.descriptiontype2}
              </p>
            )}{" "}
            {this.props.descriptionpoints && (
              <ul className="onDemandCategories">
                {this.props.descriptionpoints.map((point) => {
                  return <li>{point}</li>;
                })}
              </ul>
            )}
            {this.props.buttonlink && (
              <a href={this.props.buttonlink}>
                {this.props.greenbuttontext && (
                  <button type="button" className="btn-style-thirteen green">
                    {this.props.greenbuttontext}
                  </button>
                )}
                {this.props.blackbuttontext && (
                  <button type="button" className="btn-style-thirteen black">
                    {this.props.blackbuttontext}
                  </button>
                )}
              </a>
            )}
          </div>
          {this.props.rightimageurl && (
            <div class="col-md-6 col-xs-10 leftimage1">
              <img src={this.props.rightimageurl} alt="right-picture" />
            </div>
          )}
          {this.props.rightimagecarousel && (
            <div class="col-md-5 col-xs-10">
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
                      src={this.props.rightimagecarousel[0]}
                      class="d-block w-80"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src={this.props.rightimagecarousel[1]}
                      class="d-block w-80"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src={this.props.rightimagecarousel[2]}
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
          )}
        </div>
      </div>
    );
  }
}
