import React, { Component } from "react";
import {
  generateFieldInterviewResponseCard,
  generateFieldInterviewResponseCardTitle
} from "../../../forms/frm_fieldInterviewResponseCard.js";
import { BBCode } from "../../common-form-components/common_form_components.js";
const {
  updateLocalStorage,
  retrieveLocalStorage
} = require("../../../scripts/localStorageForms.js");

class FieldInterviewCardResponseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      time: null,
      location: null,
      narrative: null
    };
    this.handleFormInput = this.handleFormInput.bind(this);
  }

  handleFormInput(e) {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }
  shouldComponentUpdate(nextProps, nextState) {
    updateLocalStorage("field_interview_card_response_form", nextState);
    return true;
  }

  componentDidMount() {
    let curState = this.state;
    if (retrieveLocalStorage("field_interview_card_response_form") != null) {
      curState = retrieveLocalStorage("field_interview_card_response_form");
      this.setState(curState);
    }
  }

  render() {
    return (
      <form>
        <h4>Response Details</h4>
        <div className="form-row">
          <div className="form-group col-xs-12 col-sm-4">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              className="form-control"
              id="date"
              value={this.state.date}
              onChange={e => this.handleFormInput(e)}
            />
          </div>
          <div className="form-group col-xs-12 col-sm-4">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              className="form-control"
              id="time"
              value={this.state.time}
              onChange={e => this.handleFormInput(e)}
            />
          </div>
          <div className="form-group col-xs-12 col-sm-4">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              value={this.state.location}
              onChange={e => this.handleFormInput(e)}
            />
          </div>
        </div>
        <h4>Response Narrative</h4>
        <div className="form-row">
          <div className="form-group col-xs-12">
            <label htmlFor="narrative">Narrative</label>
            <textarea
              className="form-control text-area"
              id="narrative"
              placeholder="Reason for contact, details of contact, information gathered, disposition, etc."
              rows="12"
              value={this.state.narrative}
              onChange={e => this.handleFormInput(e)}
            />
          </div>
        </div>
        <BBCode
          state={this.state}
          generateTitleFunction={generateFieldInterviewResponseCardTitle}
          generateBodyFunction={generateFieldInterviewResponseCard}
        />
      </form>
    );
  }
}

export default FieldInterviewCardResponseForm;
