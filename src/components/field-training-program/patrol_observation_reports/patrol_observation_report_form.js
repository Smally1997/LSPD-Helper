import React, { Component } from "react";
import { UserContextConsumer } from "../../../UserContext.js";
import BBCode from "../../bbCode/bbCode.js";
import {
  generatePatrolObservationReport,
  generatePatrolObservationReportTitle
} from "../../../forms/frm_patrolObservationReport.js";
import "./patrol_observation_report_form.css";
const {
  updateLocalStorage,
  retrieveLocalStorage
} = require("../../../scripts/localStorageForms.js");

const PerformanceCategory = ({
  categoryLabel,
  categoryID,
  ratingValue,
  trnValue,
  handleFormInput
}) => {
  return (
    <div className="form-row">
      <div className="from-group col-xs-12">
        <label>{categoryLabel}</label>
      </div>
      <div className="form-group col-xs-12 col-sm-6">
        <div className="input-group">
          <div className="input-group-addon">
            <span className="input-group-text" htmlFor={`${categoryID}_rating`}>
              Rating
            </span>
          </div>
          <select
            className="custom-select form-control"
            id={`${categoryID}_rating`}
            onChange={e => handleFormInput(e)}
            value={ratingValue}
          >
            <option value="CHOOSE ONE">CHOOSE ONE</option>
            <option value="N/I">N/I</option>
            <option value="C">C</option>
            <option value="S">S</option>
            <option value="N/O">N/O</option>
          </select>
        </div>
      </div>
      <div className="form-group col-xs-12 col-sm-6">
        <div className="input-group">
          <div className="input-group-addon">
            <span className="input-group-text" htmlFor={`${categoryID}_TRN`}>
              TRN
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            id={`${categoryID}_TRN`}
            placeholder="0000"
            value={trnValue}
            onChange={e => handleFormInput(e)}
          />
        </div>
      </div>
    </div>
  );
};

const NoteworthyIncident = ({ id, value, label, handleFormInput }) => {
  return (
    <div className="form-group col-xs-12">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={value}
          id={id}
          onChange={e => handleFormInput(e)}
        />
        <label className="form-check-label" htmlFor="vehicleStop">
          {label}
        </label>
      </div>
    </div>
  );
};

class PatrolObservationReportFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      probFirstName: null,
      probLastName: null,
      date: null,
      phase: null,
      acceptanceOfFeedback_rating: null,
      acceptanceOfFeedback_TRN: null,
      relationshipWithCitizens_rating: null,
      relationshipWithCitizens_TRN: null,
      generalAppearence_rating: null,
      generalAppearence_TRN: null,
      drivingSkill_rating: null,
      drivingSkill_TRN: null,
      fieldPerformance_rating: null,
      fieldPerformance_TRN: null,
      investigativeSkills_rating: null,
      investigativeSkills_TRN: null,
      interviewSkills_rating: null,
      interviewSkills_TRN: null,
      officerSafety_rating: null,
      officerSafety_TRN: null,
      selfInitiatedFieldActivity_rating: null,
      selfInitiatedFieldActivity_TRN: null,
      decisionMakingProblemSolving_rating: null,
      decisionMakingProblemSolving_TRN: null,
      vehiclePedestrianStops_rating: null,
      vehiclePedestrianStops_TRN: null,
      radioCommunications_rating: null,
      radioCommunications_TRN: null,
      departmentPolicy_rating: null,
      departmentPolicy_TRN: null,
      criminalLaw_rating: null,
      criminalLaw_TRN: null,
      criminalProcedure_rating: null,
      criminalProcedure_TRN: null,
      vehicleStop: false,
      highRiskStop: false,
      vehiclePursuit: false,
      footPursuit: false,
      largeScaleSituation: false,
      comments: null
    };
    this.handleFormInput = this.handleFormInput.bind(this);
  }
  handleFormInput(e) {
    const { id, value, checked, type } = e.target;
    if (type === "checkbox") {
      return this.setState({ [id]: checked });
    }

    this.setState({ [id]: value });
  }

  shouldComponentUpdate(nextProps, nextState) {
    updateLocalStorage("patrol_observation_report_form", nextState);
    return true;
  }

  componentDidMount() {
    let curState = this.state;
    if (retrieveLocalStorage("patrol_observation_report_form") != null) {
      curState = retrieveLocalStorage("patrol_observation_report_form");
      this.setState(curState);
    }
  }
  render() {
    const PerformanceCategories = [
      {
        categoryLabel: "1. Acceptance of Criticism / Feedback",
        categoryID: "acceptanceOfFeedback",
        ratingValue: this.state.acceptanceOfFeedback_rating,
        trnValue: this.state.acceptanceOfFeedback_TRN
      },
      {
        categoryLabel: "2. Relationship with Citizens",
        categoryID: "relationshipWithCitizens",
        ratingValue: this.state.relationshipWithCitizens_rating,
        trnValue: this.state.relationshipWithCitizens_TRN
      },
      {
        categoryLabel: "3. General Appearance",
        categoryID: "generalAppearence",
        ratingValue: this.state.generalAppearence_rating,
        trnValue: this.state.generalAppearence_TRN
      },
      {
        categoryLabel: "4. Driving Skill: Moderate Stress/Emergency",
        categoryID: "drivingSkill",
        ratingValue: this.state.drivingSkill_rating,
        trnValue: this.state.drivingSkill_TRN
      },
      {
        categoryLabel: "5. Field Performance",
        categoryID: "fieldPerformance",
        ratingValue: this.state.fieldPerformance_rating,
        trnValue: this.state.fieldPerformance_TRN
      },
      {
        categoryLabel: "6. Investigative Skills",
        categoryID: "investigativeSkills",
        ratingValue: this.state.investigativeSkills_rating,
        trnValue: this.state.investigativeSkills_TRN
      },
      {
        categoryLabel: "7. Interview Skills",
        categoryID: "interviewSkills",
        ratingValue: this.state.interviewSkills_rating,
        trnValue: this.state.interviewSkills_TRN
      },
      {
        categoryLabel: "8. Officer Safety",
        categoryID: "officerSafety",
        ratingValue: this.state.officerSafety_rating,
        trnValue: this.state.officerSafety_TRN
      },
      {
        categoryLabel: "9. Self-Initiated Field Activity",
        categoryID: "selfInitiatedFieldActivity",
        ratingValue: this.state.selfInitiatedFieldActivity_rating,
        trnValue: this.state.selfInitiatedFieldActivity_TRN
      },
      {
        categoryLabel: "10. Decision Making / Problem Solving",
        categoryID: "decisionMakingProblemSolving",
        ratingValue: this.state.decisionMakingProblemSolving_rating,
        trnValue: this.state.decisionMakingProblemSolving_TRN
      },
      {
        categoryLabel: "11. Vehicle / Pedestrian Stops",
        categoryID: "vehiclePedestrianStops",
        ratingValue: this.state.vehiclePedestrianStops_rating,
        trnValue: this.state.vehiclePedestrianStops_TRN
      },
      {
        categoryLabel: "12. Radio Communication",
        categoryID: "radioCommunications",
        ratingValue: this.state.radioCommunications_rating,
        trnValue: this.state.radioCommunications_TRN
      },
      {
        categoryLabel: "13. Department Policy",
        categoryID: "departmentPolicy",
        ratingValue: this.state.departmentPolicy_rating,
        trnValue: this.state.departmentPolicy_TRN
      },
      {
        categoryLabel: "14. Criminal Law",
        categoryID: "criminalLaw",
        ratingValue: this.state.criminalLaw_rating,
        trnValue: this.state.criminalLaw_TRN
      },
      {
        categoryLabel: "15. Criminal Procedure",
        categoryID: "criminalProcedure",
        ratingValue: this.state.criminalProcedure_rating,
        trnValue: this.state.criminalProcedure_TRN
      }
    ];

    const NoteworthyIncidents = [
      {
        id: "vehicleStop",
        label: "Vehicle Stop(s)",
        value: this.state.vehicleStop
      },
      {
        id: "highRiskStop",
        label: "High Risk Stop(s)",
        value: this.state.highRiskStop
      },
      {
        id: "vehiclePursuit",
        label: "Vehicle Pursuit(s)",
        value: this.state.vehiclePursuit
      },

      {
        id: "footPursuit",
        label: "Foot Pursuit(s)",
        value: this.state.footPursuit
      },

      {
        id: "largeScaleSituation",
        label: "Large Scale Situation(s)",
        value: this.state.largeScaleSituation
      }
    ];
    return (
      <UserContextConsumer>
        {({ user }) => {
          this.context = user;
          return (
            <form>
              <h4>Patrol Information</h4>
              <p className="small sub-header">
                <a
                  href="https://pd.lsgov.io/forum/viewtopic.php?f=2663&t=234427#232"
                  target="_blank"
                >
                  Task Reference Numbers
                </a>
              </p>
              <div className="form-row">
                <div className="form-group col-xs-12 col-sm-3">
                  <label htmlFor="probFirstName">PO I's First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="probFirstName"
                    value={this.state.probFirstName}
                    onChange={e => this.handleFormInput(e)}
                  />
                </div>
                <div className="form-group col-xs-12 col-sm-3">
                  <label htmlFor="probLastName">PO I's Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="probLastName"
                    value={this.state.probLastName}
                    onChange={e => this.handleFormInput(e)}
                  />
                </div>
                <div className="form-group col-xs-12 col-sm-3">
                  <label htmlFor="date">Patrol Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    value={this.state.date}
                    onChange={e => this.handleFormInput(e)}
                  />
                </div>
                <div className="form-group col-xs-12 col-sm-3">
                  <label htmlFor="phase">FTP Phase</label>
                  <input
                    type="number"
                    min="1"
                    max="4"
                    step="1"
                    className="form-control"
                    id="phase"
                    value={this.state.phase}
                    onChange={e => this.handleFormInput(e)}
                  />
                </div>
              </div>
              <h4>Performance Categories</h4>
              {PerformanceCategories.map(category => {
                return (
                  <div key={category.categoryID}>
                    <PerformanceCategory
                      categoryID={category.categoryID}
                      categoryLabel={category.categoryLabel}
                      ratingValue={category.ratingValue}
                      trnValue={category.trnValue}
                      handleFormInput={this.handleFormInput}
                    />
                  </div>
                );
              })}
              <h4>Noteworthy Incidents</h4>
              {NoteworthyIncidents.map(incident => {
                return (
                  <div key={incident.id}>
                    <NoteworthyIncident
                      id={incident.id}
                      label={incident.label}
                      value={incident.value}
                      handleFormInput={this.handleFormInput}
                    />
                  </div>
                );
              })}
              <h4>Additional Information</h4>
              <div className="form-row">
                <div className="form-group col-xs-12">
                  <label htmlFor="details">Comments</label>
                  <textarea
                    className="form-control text-area"
                    id="comments"
                    rows="12"
                    value={this.state.comments}
                    onChange={e => this.handleFormInput(e)}
                  />
                </div>
              </div>
              <BBCode
                state={this.state}
                generateTitleFunction={generatePatrolObservationReportTitle}
                generateBodyFunction={generatePatrolObservationReport}
              />
            </form>
          );
        }}
      </UserContextConsumer>
    );
  }
}

export default PatrolObservationReportFrom;
