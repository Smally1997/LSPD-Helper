import React, { Component } from "react";
import { UserContextConsumer } from "../../../UserContext.js";
import { nextChar } from "../../../scripts/nextChar.js";
import { BBCode } from "../../common-form-components/common_form_components";
import "./daily_field_activities_report_form.css";
import {
  generateDailyFieldActivitiesReport,
  generateDailyFieldActivitiesReportTitle
} from "../../../forms/frm_dailyFieldActivitiesReport.js";
const {
  updateLocalStorage,
  retrieveLocalStorage
} = require("../../../scripts/localStorageForms.js");
const ActivityIncident = ({ id, value, label, handleFormInput }) => {
  if (id.includes("other")) {
    return (
      <div>
        <input
          type="text"
          id={id}
          value={value}
          placeholder="Other (specify)"
          onChange={e => handleFormInput(e)}
        />
      </div>
    );
  } else {
    return (
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={value}
          id={id}
          onChange={e => handleFormInput(e)}
        />
        <label className="form-check-label" htmlFor={id}>
          {label}
        </label>
      </div>
    );
  }
};

const Activities = ({
  activities,
  handleFormInput,
  addActivity,
  removeActivity
}) => {
  return (
    <div>
      {activities.map(activity => {
        const index = activities.indexOf(activity);
        const letter = nextChar(index);
        return (
          <div>
            <div
              key={`activity_${index}`}
              className="container-fluid activity-wrapper"
            >
              <div className="form-row">
                <h4>{letter}</h4>
              </div>

              <div className="form-row">
                <h4>Activity Info</h4>
                <div className="form-group col-xs-6 col-sm-4">
                  <label htmlFor={`activities-startTime_${index}`}>
                    Start Time
                  </label>
                  <input
                    type="time"
                    className="form-control"
                    id={`activities-startTime_${index}`}
                    value={activities[index].startTime}
                    onChange={e => handleFormInput(e)}
                  />
                </div>
                <div className="form-group col-xs-6 col-sm-4">
                  <label htmlFor={`activities-endTime_${index}`}>
                    End Time
                  </label>
                  <input
                    type="time"
                    className="form-control"
                    id={`activities-endTime_${index}`}
                    value={activities[index].endTime}
                    onChange={e => handleFormInput(e)}
                  />
                </div>
                <div className="form-group col-xs-12 col-sm-4">
                  <label htmlFor={`activities-location_${index}`}>
                    Location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id={`activities-location_${index}`}
                    value={activities[index].location}
                    onChange={e => handleFormInput(e)}
                  />
                </div>
              </div>
              <div className="form-row">
                <h4>Incident</h4>
                <div className="form-group col-xs-12 activity-incident-wrapper">
                  {activity.incidents.map(activityIncident => {
                    return (
                      <div
                        key={`activityIncident-${activityIncident.id}_${index}`}
                        className="activity-incident form-group col-xs-12 col-sm-3"
                      >
                        <ActivityIncident
                          id={`activityIncident-${
                            activityIncident.id
                          }_${index}`}
                          value={activityIncident.value}
                          label={activityIncident.label}
                          handleFormInput={handleFormInput}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="form-row">
                <h4>Supervisor Info</h4>
                <div className="form-group col-xs-12 col-sm-6">
                  <label htmlFor={`activities-supervisorRank_${index}`}>
                    Rank
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id={`activities-supervisorRank_${index}`}
                    value={activities[index].supervisorRank}
                    onChange={e => handleFormInput(e)}
                  />
                </div>
                <div className="form-group col-xs-12 col-sm-6">
                  <label htmlFor={`activities-supervisorName_${index}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id={`activities-supervisorName_${index}`}
                    value={activities[index].supervisorName}
                    onChange={e => handleFormInput(e)}
                  />
                </div>
              </div>
              <div className="form-row">
                <h4>Disposition</h4>
                <div className="form-group col-xs-12 activity-incident-wrapper">
                  {activity.dispositions.map(disposition => {
                    return (
                      <div
                        key={`disposition-${disposition.id}_${index}`}
                        className="form-group col-xs-4 activity-incident"
                      >
                        <Checkbox
                          id={`disposition-${disposition.id}_${index}`}
                          value={disposition.value}
                          label={disposition.label}
                          handleFormInput={handleFormInput}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="form-row">
                <h4>How Received</h4>
                <div className="form-group col-xs-12 activity-incident-wrapper">
                  {activity.howReceived.map(howReceivedMethod => {
                    return (
                      <div
                        key={`howReceived-${howReceivedMethod.id}_${index}`}
                        className="form-group col-xs-4 activity-incident"
                      >
                        <Checkbox
                          id={`howReceived-${howReceivedMethod.id}_${index}`}
                          value={howReceivedMethod.value}
                          label={howReceivedMethod.label}
                          handleFormInput={handleFormInput}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="form-row">
                <h4>Reports</h4>
                {activity.reports.map(report => {
                  let reportIndex = activity.reports.indexOf(report);
                  return (
                    <div key={`report_${reportIndex}`}>
                      <Report
                        id={`report_${reportIndex}`}
                        link={report.link}
                        type={report.type}
                        handleFormInput={handleFormInput}
                        addReport={addActivity}
                        removeReport={removeActivity}
                        activityIndex={index}
                        reportIndex={reportIndex}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="form-row">
                <h4>Narrative</h4>
                <div className="form-group col-xs-12">
                  <label htmlFor="narrative" />
                  <textarea
                    className="form-control text-area"
                    id={`narrative_${index}`}
                    value={activity.narrative}
                    onChange={e => handleFormInput(e)}
                  />
                </div>
              </div>
            </div>
            <div className="form-row container-fluid">
              <div className="form-group col-xs-9" />
              <div className="form-group col-xs-3">
                <label style={{ visibility: "hidden" }}>Delete/Add</label>

                <div className="input-group plus_minus_wrapper">
                  {index != 0 && (
                    <button
                      className="btn"
                      type="button"
                      onClick={e => {
                        removeActivity(e, "activity", index);
                      }}
                    >
                      <i className="fas fa-minus-square" />
                    </button>
                  )}
                  {index == 0 && <button className="btn" />}

                  <button
                    className="btn"
                    type="button"
                    onClick={e => {
                      addActivity(e, "activity");
                    }}
                  >
                    <i className="fas fa-plus-square" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Checkbox = ({ id, value, label, handleFormInput }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        checked={value}
        id={id}
        onChange={e => handleFormInput(e)}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

const Report = ({
  id,
  link,
  type,
  handleFormInput,
  addReport,
  removeReport,
  activityIndex,
  reportIndex
}) => {
  return (
    <div>
      <div className="form-group col-xs-5">
        <label htmlFor={id}>Report Type</label>
        <input
          type="text"
          className="form-control"
          id={`type_${activityIndex}-${reportIndex}`}
          value={type}
          placeholder={
            "Warrant, Investigative Report, Traffic Collision Report, etc"
          }
          onChange={e => handleFormInput(e)}
        />
      </div>
      <div className="form-group col-xs-4">
        <label htmlFor={id}>Report Link</label>
        <input
          type="text"
          className="form-control"
          id={`link_${activityIndex}-${reportIndex}`}
          value={link}
          onChange={e => handleFormInput(e)}
        />
      </div>
      <div className="form-group col-xs-3">
        <label style={{ visibility: "hidden" }}>Delete/Add</label>

        <div className="input-group plus_minus_wrapper">
          {reportIndex != 0 && (
            <button
              className="btn"
              type="button"
              onClick={e => {
                removeReport(e, "report", activityIndex, reportIndex);
              }}
            >
              <i className="fas fa-minus-square" />
            </button>
          )}
          {reportIndex == 0 && <button className="btn" />}

          <button
            className="btn"
            type="button"
            onClick={e => {
              addReport(e, "report", activityIndex, reportIndex);
            }}
          >
            <i className="fas fa-plus-square" />
          </button>
        </div>
      </div>
    </div>
  );
};

class DailyFieldActivitesReportForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: null,
      endTime: null,
      callSign: null,
      activities: [
        {
          letter: null,
          startTime: null,
          endTime: null,
          location: null,
          supervisor: null,
          supervisorRank: null,
          narrative: null,
          callsForService: null,
          trafficStops: null,
          citationsIssued: null,
          warningsIssued: null,
          felonyArrests: null,
          misdemeanorArrests: null,
          incidents: [
            { label: "Trespassing", id: "trespassing", value: false },
            { label: "Disturbance", id: "disturbance", value: false },
            { label: "ADW", id: "adw", value: false },
            { label: "Check Area", id: "checkArea", value: false },
            { label: "Burglary", id: "burglary", value: false },
            { label: "Public Assist", id: "publicAssist", value: false },
            { label: "Civilian Flag-Down", id: "civFlagDown", value: false },
            {
              label: "Suspicious Activity",
              id: "suspiciousActivity",
              value: false
            },
            { label: "Fight", id: "fight", value: false },
            { label: "Traffic Stop", id: "trafficStop", value: false },
            { label: "High Risk Stop", id: "highRiskStop", value: false },
            { label: "Vehicle Alarm", id: "vehicleAlarm", value: false },
            { label: "Motorist Assist", id: "motoristAssist", value: false },
            {
              label: "Medical Call PD requested",
              id: "medCallPDRequested",
              value: false
            },
            { label: "MVA Non-Injury", id: "mvaNonInjury", value: false },
            { label: "MVA With Injuries", id: "mvaInjury", value: false },
            {
              label: "Open Door Premises Check",
              id: "openDoorPremisesCheck",
              value: false
            },
            { label: "Escort Transport", id: "escortTransport", value: false },
            {
              label: "Unconscious/Fainting",
              id: "unconsciousFainting",
              value: false
            },
            { label: "Found Item", id: "foundItem", value: false },
            { label: "Vehicle Pursuit", id: "vehiclePursuit", value: false },
            { label: "Foot Pursuit", id: "footPursuit", value: false },
            { label: "Injured Person", id: "injuredPerson", value: false },
            { label: "Mutual Aid", id: "mutualAid", value: false },
            { label: "Reckless Driving", id: "recklessDriving", value: false },
            { label: "Sick Person", id: "sickPerson", value: false },
            { label: "Foot Patrol", id: "footPatrol", value: false },
            {
              label: "911 Call Nature Unknown",
              id: "ninerNatureUnknown",
              value: false
            },
            { label: "Follow Up", id: "followUp", value: false },
            { label: "Assault", id: "assault", value: false },
            { label: "Shots Heard", id: "shotsHeard", value: false },
            { label: "Other (Specify)", id: "other", value: null }
          ],
          dispositions: [
            { label: "ADV (Advised)", id: "adv", value: false },
            { label: "ARR (Arrest)", id: "arr", value: false },
            { label: "CIT (Citation)", id: "cit", value: false },
            { label: "GOA (Gone on arrival)", id: "goa", value: false },
            { label: "QNR (Questioned and Released)", id: "qnr", value: false },
            { label: "WRN (Warned)", id: "wrn", value: false },
            { label: "RPT (Report)", id: "rpt", value: false },
            { label: "INF (Information)", id: "inf", value: false },
            { label: "OTH (Other)", id: "other", value: false }
          ],
          howReceived: [
            { label: "Dispatch", id: "dispatch", value: false },
            { label: "Call For Service", id: "callForService", value: false },
            { label: "Civilian Walk-Up", id: "civWalkUp", value: false },
            { label: "Radio Call", id: "radioCall", value: false },
            {
              label: "Personal Observation",
              id: "personalObservation",
              value: false
            }
          ],
          reports: [{ type: null, link: null }]
        }
      ]
    };
    this.handleFormInput = this.handleFormInput.bind(this);
    this.addInputBox = this.addInputBox.bind(this);
    this.removeInputBox = this.removeInputBox.bind(this);
  }
  handleFormInput(e) {
    const { id, value, checked } = e.target;
    if (id.includes("activities-")) {
      const field = id.substring(id.indexOf("-") + 1, id.indexOf("_"));
      const index = id.substring(id.indexOf("_") + 1);
      this.setState(prevState => ({
        activities: prevState.activities.map(activity => {
          if (prevState.activities.indexOf(activity) == index) {
            return Object.assign(activity, { [field]: value });
          } else {
            return activity;
          }
        })
      }));
    } else if (id.includes("activityIncident-")) {
      const field = id.substring(id.indexOf("-") + 1, id.indexOf("_"));
      const index = id.substring(id.indexOf("_") + 1);
      let activityIncidents = this.state.activities[index].incidents;
      activityIncidents.map(incident => {
        if (incident.id == field) {
          if (field == "other") {
            return (activityIncidents[
              activityIncidents.indexOf(incident)
            ].value = value);
          } else {
            return (activityIncidents[
              activityIncidents.indexOf(incident)
            ].value = checked);
          }
        }
      });
      let { activities } = this.state;
      activities[index].incidents = activityIncidents;
      this.setState({ activities });
    } else if (id.includes("disposition-")) {
      const field = id.substring(id.indexOf("-") + 1, id.indexOf("_"));
      const index = id.substring(id.indexOf("_") + 1);
      let dispositions = this.state.activities[index].dispositions;
      dispositions.map(disposition => {
        if (disposition.id == field) {
          return (dispositions[
            dispositions.indexOf(disposition)
          ].value = checked);
        }
      });
      let { activities } = this.state;
      activities[index].dispositions = dispositions;
      this.setState({ activities });
    } else if (id.includes("howReceived-")) {
      const field = id.substring(id.indexOf("-") + 1, id.indexOf("_"));
      const index = id.substring(id.indexOf("_") + 1);
      let howReceived = this.state.activities[index].howReceived;
      howReceived.map(howReceivedMethod => {
        if (howReceivedMethod.id == field) {
          return (howReceived[
            howReceived.indexOf(howReceivedMethod)
          ].value = checked);
        }
      });
      let { activities } = this.state;
      activities[index].howReceived = howReceived;
      this.setState({ activities });
    } else if (id.includes("type_") || id.includes("link_")) {
      const field = id.substring(0, id.indexOf("_"));
      const activityIndex = id.substring(id.indexOf("_") + 1, id.indexOf("-"));
      const reportIndex = id.substring(id.indexOf("-") + 1);
      let { activities } = this.state;
      let reports = activities[activityIndex].reports;
      reports[reportIndex][field] = value;
      this.setState({ activities });
    } else if (id.includes("narrative")) {
      const index = id.substring(id.indexOf("_") + 1);
      let { activities } = this.state;
      activities[index].narrative = value;
      this.setState({ activities });
    } else {
      this.setState({ [id]: value });
    }
  }

  addInputBox(e, type, activityIndex, reportIndex) {
    if (type === "activity") {
      let newActivity = {
        letter: null,
        date: null,
        startTime: null,
        endTime: null,
        location: null,
        supervisor: null,
        supervisorRank: null,
        callsForService: null,
        trafficStops: null,
        citationsIssued: null,
        warningsIssued: null,
        felonyArrests: null,
        misdemeanorArrests: null,
        incidents: [
          { label: "Trespassing", id: "trespassing", value: false },
          { label: "Disturbance", id: "disturbance", value: false },
          { label: "ADW", id: "adw", value: false },
          { label: "Check Area", id: "checkArea", value: false },
          { label: "Burglary", id: "burglary", value: false },
          { label: "Public Assist", id: "publicAssist", value: false },
          { label: "Civilian Flag-Down", id: "civFlagDown", value: false },
          {
            label: "Suspicious Activity",
            id: "suspiciousActivity",
            value: false
          },
          { label: "Fight", id: "fight", value: false },
          { label: "Traffic Stop", id: "trafficStop", value: false },
          { label: "High Risk Stop", id: "highRiskStop", value: false },
          { label: "Vehicle Alarm", id: "vehicleAlarm", value: false },
          { label: "Motorist Assist", id: "motoristAssist", value: false },
          {
            label: "Medical Call PD requested",
            id: "medCallPDRequested",
            value: false
          },
          { label: "MVA Non-Injury", id: "mvaNonInjury", value: false },
          { label: "MVA With Injuries", id: "mvaInjury", value: false },
          {
            label: "Open Door Premises Check",
            id: "openDoorPremisesCheck",
            value: false
          },
          { label: "Escort Transport", id: "escortTransport", value: false },
          {
            label: "Unconscious/Fainting",
            id: "unconsciousFainting",
            value: false
          },
          { label: "Found Item", id: "foundItem", value: false },
          { label: "Vehicle Pursuit", id: "vehiclePursuit", value: false },
          { label: "Foot Pursuit", id: "footPursuit", value: false },
          { label: "Injured Person", id: "injuredPerson", value: false },
          { label: "Mutual Aid", id: "mutualAid", value: false },
          { label: "Reckless Driving", id: "recklessDriving", value: false },
          { label: "Sick Person", id: "sickPerson", value: false },
          { label: "Foot Patrol", id: "footPatrol", value: false },
          {
            label: "911 Call Nature Unknown",
            id: "ninerNatureUnknown",
            value: false
          },
          { label: "Follow Up", id: "followUp", value: false },
          { label: "Assault", id: "assault", value: false },
          { label: "Shots Heard", id: "shotsHeard", value: false },
          { label: "Other (Specify)", id: "other", value: null }
        ],
        dispositions: [
          { label: "ADV (Advised)", id: "adv", value: false },
          { label: "ARR (Arrest)", id: "arr", value: false },
          { label: "CIT (Citation)", id: "cit", value: false },
          { label: "GOA (Gone on arrival)", id: "goa", value: false },
          { label: "QNR (Questioned and Released)", id: "qnr", value: false },
          { label: "WRN (Warned)", id: "wrn", value: false },
          { label: "RPT (Report)", id: "rpt", value: false },
          { label: "INF (Information)", id: "inf", value: false },
          { label: "OTH (Other)", id: "other", value: false }
        ],
        howReceived: [
          { label: "Dispatch", id: "dispatch", value: false },
          { label: "Call For Service", id: "callForService", value: false },
          { label: "Civilian Walk-Up", id: "civWalkUp", value: false },
          { label: "Radio Call", id: "radioCall", value: false },
          {
            label: "Personal Observation",
            id: "personalObservation",
            value: false
          }
        ],
        reports: [{ type: null, link: null }]
      };
      let { activities } = this.state;
      activities.push(newActivity);
      this.setState({ activities });
    } else if (type === "report") {
      let newReport = { type: null, link: null };
      let { activities } = this.state;
      activities[activityIndex].reports.push(newReport);
      this.setState({ activities });
    }
  }

  removeInputBox(e, type, activityIndex, reportIndex) {
    if (type === "activity") {
      let { activities } = this.state;
      activities.splice(activityIndex, 1);
      this.setState([activities]);
    }
    if (type === "report") {
      let { activities } = this.state;
      activities[activityIndex].reports.splice(reportIndex, 1);
      this.setState({ activities });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    updateLocalStorage("daily_field_activities_report_form", nextState);
    return true;
  }

  componentDidMount() {
    let curState = this.state;
    if (retrieveLocalStorage("daily_field_activities_report_form") != null) {
      curState = retrieveLocalStorage("daily_field_activities_report_form");
      this.setState(curState);
    }
  }

  render() {
    return (
      <UserContextConsumer>
        {({ user }) => {
          return (
            <form>
              <h4>Reporting Employee</h4>
              <div className="form-row">
                <div className="form-group col-xs-12 col-sm-4">
                  <label htmlFor="affLastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="affLastName"
                    placeholder="Doe"
                    value={user.lastName}
                    readOnly={true}
                  />
                </div>
                <div className="form-group col-xs-12 col-sm-4">
                  <label htmlFor="affSerial">Serial Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="affSerial"
                    placeholder="#12345"
                    value={user.serial}
                    readOnly={true}
                  />
                </div>
                <div className="form-group col-xs-12 col-sm-4">
                  <label htmlFor="affDivision">Division</label>
                  <input
                    type="text"
                    className="form-control"
                    id="affDivision"
                    value={user.division}
                    placeholder="Traffic Division"
                    readOnly={true}
                  />
                </div>
              </div>

              <h4>Patrol Information</h4>
              <div className="form-row">
                <div className="form-group col-xs-12 col-sm-3">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    value={this.state.date}
                    onChange={e => this.handleFormInput(e)}
                  />
                </div>
                <div className="form-group col-xs-12 col-sm-3">
                  <label htmlFor="startTime">Start Of Watch</label>
                  <input
                    type="time"
                    className="form-control"
                    id="startTime"
                    value={this.state.startTime}
                    onChange={e => this.handleFormInput(e)}
                  />
                </div>
                <div className="form-group col-xs-12 col-sm-3">
                  <label htmlFor="endTime">End Of Watch</label>
                  <input
                    type="time"
                    className="form-control"
                    id="endTime"
                    value={this.state.endTime}
                    onChange={e => this.handleFormInput(e)}
                  />
                </div>
                <div className="form-group col-xs-12 col-sm-3">
                  <label htmlFor="callSign">Call Sign</label>
                  <input
                    type="text"
                    className="form-control"
                    id="callSign"
                    value={this.state.callSign}
                    placeholder="3-TOM-21"
                    onChange={e => this.handleFormInput(e)}
                  />
                </div>
              </div>
              <h4>Activities</h4>
              <Activities
                activities={this.state.activities}
                handleFormInput={this.handleFormInput}
                addActivity={this.addInputBox}
                removeActivity={this.removeInputBox}
              />
              <h4>Logs</h4>
              <div className="form-row">
                <div className="form-group col-xs-12 col-sm-4">
                  <label htmlFor="callsForService">Calls For Service</label>
                  <input
                    type="number"
                    step="1"
                    className="form-control"
                    id="callsForService"
                    value={this.state.callsForService}
                    onChange={e => this.handleFormInput(e)}
                  />
                </div>
                <div className="form-group col-xs-12 col-sm-4">
                  <label htmlFor="trafficStops">Traffic Stops</label>
                  <input
                    type="number"
                    step="1"
                    className="form-control"
                    id="trafficStops"
                    value={this.state.trafficStops}
                    onChange={e => this.handleFormInput(e)}
                  />
                </div>
                <div className="form-group col-xs-12 col-sm-4">
                  <label htmlFor="citationsIssued">Citations Issued</label>
                  <input
                    type="number"
                    step="1"
                    className="form-control"
                    id="citationsIssued"
                    value={this.state.citationsIssued}
                    onChange={e => this.handleFormInput(e)}
                  />
                </div>
                <div className="form-group col-xs-12 col-sm-4">
                  <label htmlFor="warningsIssued">Warnings Issued</label>
                  <input
                    type="number"
                    step="1"
                    className="form-control"
                    id="warningsIssued"
                    value={this.state.warningsIssued}
                    onChange={e => this.handleFormInput(e)}
                  />
                </div>
                <div className="form-group col-xs-12 col-sm-4">
                  <label htmlFor="felonyArrests">Felony Arrests</label>
                  <input
                    type="number"
                    step="1"
                    className="form-control"
                    id="felonyArrests"
                    value={this.state.felonyArrests}
                    onChange={e => this.handleFormInput(e)}
                  />
                </div>
                <div className="form-group col-xs-12 col-sm-4">
                  <label htmlFor="misdemeanorArrests">
                    Misdemeanor Arrests
                  </label>
                  <input
                    type="number"
                    step="1"
                    className="form-control"
                    id="misdemeanorArrests"
                    value={this.state.misdemeanorArrests}
                    onChange={e => this.handleFormInput(e)}
                  />
                </div>
              </div>
              <BBCode
                state={this.state}
                generateTitleFunction={generateDailyFieldActivitiesReportTitle}
                generateBodyFunction={generateDailyFieldActivitiesReport}
                //forumPostLinks={}
              />
            </form>
          );
        }}
      </UserContextConsumer>
    );
  }
}

export default DailyFieldActivitesReportForm;
