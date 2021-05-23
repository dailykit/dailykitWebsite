import React, { PureComponent } from "react";

export default class Weighingimage extends PureComponent {
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
          className="learMore_button2 mt-4 pb-3 pt-3"
          style={{ margin: "1rem 30% 1rem 30%" }}
        >
          TELL ME MORE
        </button>
      </>
    );
  }
}
