import React, { PureComponent } from "react";
import "../style.css";
export default class FormSection1 extends PureComponent {
  render() {
    return (
      <>
        <button
          type="button"
          class="btn btn-primary sidebar-contactus sticky-top"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Contact Us
        </button>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Fill the form
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div
                class="ml-form-embed"
                data-account={this.props.dataAccount}
                data-form={this.props.dataForm}
              ></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
