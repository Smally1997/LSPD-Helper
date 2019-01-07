import React, { Component, Fragment } from "react";
import CategoryPage from "../category-page/category-page";
import FieldInterviewCardForm from "./field_interview_cards/field_interview_card_form";
import FieldInterviewResponseCardForm from "./field_interview_cards/field_interview_card_response_form";
import IntelligenceReportForm from "./intelligence_reports/intelligence_report_form";
import InvestigativeReportForm from "./investigative_reports/investigative_report_form";
import DailyFieldActivitesReportForm from "./daily_field_activities/daily_field_activities_report_form";
import { clearLocalStorage } from "../../scripts/localStorageForms.js";

const formItems = [
  {
    text: "DAILY FIELD ACTIVITIES",
    id: "daily_field_activities_report_form",
    form: DailyFieldActivitesReportForm,
    disabled: false
  },
  {
    text: "INVESTIGATIVE REPORT",
    id: "investigative_report_form",
    form: InvestigativeReportForm,
    disabled: false
  },
  {
    text: "INTELLIGENCE REPORT",
    id: "intelligence_report_form",
    form: IntelligenceReportForm,
    disabled: true
  },
  {
    text: "FIELD INTERVIEW CARD",
    id: "field_interview_card_form",
    form: FieldInterviewCardForm,
    disabled: false
  },
  {
    text: "FIELD INTERVIEW RESPONSE",
    id: "field_interview_card_response_form",
    form: FieldInterviewResponseCardForm,
    disabled: false
  }
];
class Reports extends Component {
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
          pageTitle={"REPORTS"}
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

export default Reports;
