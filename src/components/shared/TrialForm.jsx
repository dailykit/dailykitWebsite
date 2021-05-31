import React, { PureComponent } from "react";

export default class TrialForm extends PureComponent {
  render() {
    return (
      <div class="container mt-4">
        <div
          class="ml-form-embed"
          data-account={this.props.dataAccount}
          data-form={this.props.dataForm}
        ></div>
      </div>
    );
  }
}
