import React, { Component, Fragment } from "react";
import CategoryPage from "../category-page/category-page";
import PatrolObservationReportFrom from "./patrol_observation_reports/patrol_observation_report_form";
import { clearLocalStorage } from "../../scripts/localStorageForms.js";

const formItems = [
  {
    text: "PATROL OBSERVATION REPORT",
    id: "patrol_observation_report_form",
    form: PatrolObservationReportFrom,
    disabled: false
  }
];
class FieldTrainingProgram extends Component {
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
          pageTitle={"FIELD TRAINING PROGRAM"}
          pageForms={formItems}
          changeActiveForm={(e, newActiveFormID) =>
            this.changeActiveForm(e, newActiveFormID)
          }
        />

        {formItems.map(formItem => {
          if (formItem.id === this.state.activeFormID) {
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
                <formItem.form
                  key={formItem.id}
                  clearLocalStorage={clearLocalStorage}
                />
              </div>
            );
          }
        })}
      </Fragment>
    );
  }
}

export default FieldTrainingProgram;
