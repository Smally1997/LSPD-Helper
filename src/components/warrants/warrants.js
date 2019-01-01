import React, { Component, Fragment } from "react";
import CategoryPage from "../category-page/category-page";
import ArrestWarrantForm from "./arrest_warrants/arrest_warrant_form";
import SearchWarrantForm from "./search_warrants/search_warrant_form";
import CovertSurveillanceOrderForm from "./covert_surveillance_order/covert_surveillance_order_form";
import { clearLocalStorage } from "../../scripts/localStorageForms.js";
const formItems = [
  {
    text: "SEARCH WARRANT",
    id: "search_warrant_form",
    form: SearchWarrantForm
  },
  {
    text: "ARREST WARRANT",
    id: "arrest_warrant_form",
    form: ArrestWarrantForm
  },
  {
    text: "SURVEILLANCE ORDER",
    id: "covert_surveillance_order_form",
    form: CovertSurveillanceOrderForm
  }
];

class Warrants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFormID: null
    };
    this.changeActiveForm = this.changeActiveForm.bind(this);
  }
  changeActiveForm(e, newActiveFormID) {
    this.setState({ activeFormID: newActiveFormID });
  }
  render() {
    return (
      <Fragment>
        <CategoryPage
          pageTitle={"WARRANTS"}
          pageForms={formItems}
          changeActiveForm={(e, newActiveFormID) =>
            this.changeActiveForm(e, newActiveFormID)
          }
        />

        {formItems.map(formItem => {
          if (formItem.id == this.state.activeFormID) {
            return (
              <div id="form-container" key={this.state.activeFormID}>
                <button
                  className="btn btn-default clearLocalStorage"
                  onClick={() => {
                    clearLocalStorage(this.state.activeFormID);
                    window.location.reload();
                  }}
                >
                  Clear Saved Fields
                </button>
                <formItem.form key={formItem.id} />
              </div>
            );
          }
        })}
      </Fragment>
    );
  }
}

export default Warrants;
