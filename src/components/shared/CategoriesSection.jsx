import React, { PureComponent } from "react";
import "../../style.css";
export default class Categoriessection extends PureComponent {
  render() {
    return (
      <div class="container">
        <div class="row justify-content-around categories">
          {this.props.list.map((item) => {
            return (
              <div class="col-md-3 col-xs-10">
                <ul class="onDemandCategories">
                  {item.map((li) => {
                    return <li>{li}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
