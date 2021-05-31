import React, { PureComponent } from "react";
import ContactFormSection2 from "../shared/ContactFormSection2";

export default class SpecialBanner4 extends PureComponent {
  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            opacity: "0.3",
            flexWrap: "wrap",
          }}
        >
          <img
            src="https://www.dailykit.org/hubfs/dailykit-assets/portion-control/longfly.png"
            alt="..."
          />
          <img
            src="https://www.dailykit.org/hubfs/dailykit-assets/portion-control/averyweigh-tronix.png"
            alt="..."
          />
          <img
            src="https://www.dailykit.org/hubfs/dailykit-assets/portion-control/badeer.png"
            alt="..."
          />
          <img
            src="https://www.dailykit.org/hubfs/dailykit-assets/portion-control/Scanvaegt%20Systems.png"
            alt="..."
            width="200px"
          />{" "}
          <img
            src="https://www.dailykit.org/hubfs/dailykit-assets/portion-control/Fairbanks%20Scales.png"
            alt="..."
          />
        </div>{" "}
        <button
          type="button"
          className="btn-style-thirteen green"
          style={{ margin: "1rem 30% 1rem 30%" }}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          TELL ME MORE
        </button>
        <ContactFormSection2
          dataAccount={this.props.dataAccount}
          dataForm={this.props.dataForm}
        />
      </>
    );
  }
}
