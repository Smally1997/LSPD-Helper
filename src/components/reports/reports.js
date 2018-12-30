import React, { Component, Fragment } from "react";
import CategoryPage from "../category-page/category-page";
import FieldInterviewCardForm from "./field_interview_cards/field_interview_card_form";
import FieldInterviewResponseCardForm from "./field_interview_cards/field_interview_card_response_form";
import IntelligenceReportForm from "./intelligence_reports/intelligence_report_form";
import InvestigativeReportForm from "./investigative_reports/investigative_report_form";
const formItems = [
  {
    text: "INVESTIGATIVE REPORT",
    id: "investigativeReport",
    form: InvestigativeReportForm,
    disabled: true
  },
  {
    text: "INTELLIGENCE REPORT",
    id: "intelligenceReport",
    form: IntelligenceReportForm,
    disabled: true
  },
  {
    text: "FIELD INTERVIEW CARD",
    id: "fieldInterviewCard",
    form: FieldInterviewCardForm,
    disabled: false
  },
  {
    text: "FIELD INTERVIEW RESPONSE",
    id: "fieldInterviewResponse",
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
          if (formItem.id == this.state.activeFormID) {
            return <formItem.form key={formItem.id} />;
          }
        })}
      </Fragment>
    );
  }
}

export default Reports;
