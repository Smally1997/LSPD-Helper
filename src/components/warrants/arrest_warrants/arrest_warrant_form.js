import React, { Component } from "react";
import $ from "jquery";
import { UserContextConsumer } from "../../../UserContext.js";
import {
  generateArrestWarrant,
  generateArrestWarrantTitle
} from "../../../forms/frm_arrestWarrant.js";
import { SearchPenalCode } from "../../../scripts/searchPenalCode.js";

import BBCode from "../../bbCode/bbCode.js";
const {
  updateLocalStorage,
  retrieveLocalStorage
} = require("../../../scripts/localStorageForms.js");

const ForumPostLinks = [
  {
    link: "https://pd.lsgov.io/forum/posting.php?mode=post&f=2392",
    linkText: "Arrest Warrant"
  },
  {
    link: "https://pd.lsgov.io/forum/posting.php?mode=post&f=2393",
    linkText: "DB Arrest Warrant"
  }
];
const Charges = ({ charges, addCharge, removeCharge, handleFormInput }) => {
  return (
    <div>
      {charges.map(charge => {
        const index = charges.indexOf(charge);
        return (
          <div className="form-row" key={`charge_${index}`}>
            <div className="form-group col-xs-6">
              <label htmlFor={`chargeName_${index}`}>Charge #{index + 1}</label>
              <SearchPenalCode
                id={`chargeName_${index}`}
                value={charges[index].chargeName || " "}
                handleFormInput={handleFormInput}
              />
            </div>
            <div className="form-group col-xs-3">
              <label htmlFor={`counts_${index}`}>Counts</label>

              <input
                type="number"
                min="1"
                className="form-control"
                id={`counts_${index}`}
                value={charges[index].counts}
                onChange={e => handleFormInput(e)}
              />
            </div>
            <div className="form-group col-xs-3">
              <label style={{ visibility: "hidden" }}>Delete/Add</label>

              <div className="input-group plus_minus_wrapper">
                {index != 0 && (
                  <button
                    className="btn"
                    type="button"
                    onClick={e => {
                      removeCharge(e, "charges", index);
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
                    addCharge(e, "charges");
                  }}
                >
                  <i className="fas fa-plus-square" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Evidence = ({
  evidence,
  handleFormInput,
  addEvidence,
  removeEvidence
}) => {
  return (
    <div>
      {evidence.map(evidenceItem => {
        const index = evidence.indexOf(evidenceItem);
        return (
          <div className="form-row" key={`evidence_${index}`}>
            <div className="form-group col-xs-9">
              <label htmlFor={`evidenceDescription_${index}`}>
                Exhibit #{index + 1}
              </label>
              <input
                type="text"
                className="form-control"
                id={`evidenceDescription_${index}`}
                value={evidence[index].description}
                onChange={e => handleFormInput(e)}
              />
            </div>

            <div className="form-group col-xs-3">
              <label style={{ visibility: "hidden" }}>Delete/Add</label>

              <div className="input-group plus_minus_wrapper">
                {index != 0 && (
                  <button
                    className="btn"
                    type="button"
                    onClick={e => {
                      removeEvidence(e, "evidence", index);
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
                    addEvidence(e, "evidence");
                  }}
                >
                  <i className="fas fa-plus-square" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
class ArrestWarrantForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warrantType: null,
      susFirstName: null,
      susLastName: null,
      susGender: null,
      susPhone: null,
      date: null,
      time: null,
      location: null,
      details: null,
      charges: [{ chargeName: null, counts: null }],
      evidence: [{ description: null }]
    };
    this.handleFormInput = this.handleFormInput.bind(this);
    this.addInputBox = this.addInputBox.bind(this);
    this.removeInputBox = this.removeInputBox.bind(this);
  }

  handleFormInput(e) {
    const { id, value } = e.target;
    if (id.includes("chargeName_") || id.includes("counts_")) {
      const field = id.substring(0, id.indexOf("_"));
      const index = id.substring(id.indexOf("_") + 1);

      this.setState(prevState => ({
        charges: prevState.charges.map(charge => {
          if (prevState.charges.indexOf(charge) == index) {
            return Object.assign(charge, { [field]: value });
          } else {
            return charge;
          }
        })
      }));
    } else if (id.includes("evidenceDescription_")) {
      const index = id.substring(id.indexOf("_") + 1);
      this.setState(prevState => ({
        evidence: prevState.evidence.map(evidenceExhibit => {
          if (prevState.evidence.indexOf(evidenceExhibit) == index) {
            return Object.assign(evidenceExhibit, { ["description"]: value });
          } else {
            return evidenceExhibit;
          }
        })
      }));
    } else {
      this.setState({ [id]: value });
    }
  }

  addInputBox(e, type) {
    if (type === "charges") {
      let newCharge = { chargeName: null, counts: null };
      let { charges } = this.state;
      charges.push(newCharge);
      this.setState({ charges });
    } else if (type === "evidence") {
      let newEvidence = { description: null };
      let { evidence } = this.state;
      evidence.push(newEvidence);
      this.setState({ evidence });
    }
  }

  removeInputBox(e, type, index) {
    if (type === "charges") {
      let { charges } = this.state;
      charges.splice(index, 1);
      this.setState([charges]);
    }
    if (type === "evidence") {
      let { evidence } = this.state;
      evidence.splice(index, 1);
      this.setState({ evidence });
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    updateLocalStorage("arrest_warrant_form", nextState);
    return true;
  }

  componentDidMount() {
    let curState = this.state;
    if (retrieveLocalStorage("arrest_warrant_form") != null) {
      curState = retrieveLocalStorage("arrest_warrant_form");
      this.setState(curState);
    }
  }

  render() {
    const { charges, evidence } = this.state;
    return (
      <UserContextConsumer>
        {({ user }) => {
          this.context = user;
          return (
            <form>
              <h4>Arrest Warrant Type</h4>
              <div className="form-row">
                <div className="form-group col-xs-12">
                  <label htmlFor="warrantType">L-RAW/H-RAW</label>
                  <select
                    className="custom-select form-control"
                    id="warrantType"
                    onChange={e => this.handleFormInput(e)}
                    value={this.state.warrantType}
                  >
                    <option value="CHOOSE ONE">CHOOSE ONE</option>
                    <option value="L-RAW">L-RAW</option>
                    <option value="H-RAW">H-RAW</option>
                  </select>
                </div>
              </div>
              <h4>Affiant Details</h4>
              <p className="small sub-header">
                Change this information in the USER section.
              </p>
              <div className="form-row">
                <div className="form-group col-xs-12 col-sm-6">
                  <label htmlFor="affFirstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="affFirstName"
                    placeholder="John"
                    value={user.firstName}
                    readOnly={true}
                  />
                </div>
                <div className="form-group col-xs-12 col-sm-6">
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
              </div>
              <div className="form-row">
                <div className="form-group col-xs-12 col-sm-6">
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
                <div className="form-group col-xs-12 col-sm-6">
                  <label htmlFor="affRank">Dept. Rank</label>
                  <input
                    type="text"
                    className="form-control"
                    id="affRank"
                    placeholder="Chief Of Police"
                    value={user.rank}
                    readOnly={true}
                  />
                </div>
              </div>
              <h4>Suspect Details</h4>
              <div className="form-row">
                <div className="form-group col-xs-12 col-sm-6">
                  <label htmlFor="susFirstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="susFirstName"
                    placeholder="Jane"
                    value={
                      this.state.susFirstName || this.props.defaultInputValue
                    }
                    onChange={e => this.handleFormInput(e)}
                  />
                </div>
                <div className="form-group col-xs-12 col-sm-6">
                  <label htmlFor="susLastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="susLastName"
                    placeholder="Smith"
                    value={this.state.susLastName}
                    onChange={e => this.handleFormInput(e)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-xs-12 col-sm-6">
                  <label htmlFor="susGender">Gender</label>
                  <input
                    type="text"
                    className="form-control"
                    id="susGender"
                    placeholder="Female"
                    value={this.state.susGender}
                    onChange={e => this.handleFormInput(e)}
                  />
                </div>
                <div className="form-group col-xs-12 col-sm-6">
                  <label htmlFor="susPhone">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="susPhone"
                    placeholder="123-4567"
                    value={this.state.susPhone}
                    onChange={e => this.handleFormInput(e)}
                  />
                </div>
              </div>
              <h4>Narrative</h4>
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
                  <label htmlFor="time">Time</label>
                  <input
                    type="time"
                    className="form-control"
                    id="time"
                    value={this.state.time}
                    onChange={e => this.handleFormInput(e)}
                  />
                </div>
                <div className="form-group col-xs-12 col-sm-6">
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
              <div className="form-row">
                <div className="form-group col-xs-12">
                  <label htmlFor="details">Details</label>
                  <textarea
                    className="form-control text-area"
                    id="details"
                    rows="12"
                    value={this.state.details}
                    onChange={e => this.handleFormInput(e)}
                  />
                </div>
              </div>
              <h4>Charges</h4>
              <Charges
                charges={charges}
                addCharge={(e, type) => {
                  this.addInputBox(e, type);
                }}
                removeCharge={(e, type, index) => {
                  this.removeInputBox(e, type, index);
                }}
                handleFormInput={e => {
                  this.handleFormInput(e);
                }}
              />

              <h4>Evidence</h4>
              <Evidence
                evidence={evidence}
                addEvidence={(e, type) => {
                  this.addInputBox(e, type);
                }}
                removeEvidence={(e, type, index) => {
                  this.removeInputBox(e, type, index);
                }}
                handleFormInput={e => {
                  this.handleFormInput(e);
                }}
              />
              <h4>Signature</h4>
              <div className="form-row">
                <div className="form-group col-xs-12">
                  <label htmlFor="signature">Signature</label>
                  {user.signatureType == "text" && (
                    <input
                      type="text"
                      className="form-control"
                      id="signature"
                      value={user.signature}
                      readOnly={true}
                    />
                  )}
                  {user.signatureType == "image" && (
                    <img className="input-group" src={user.signature} />
                  )}
                  {user.signatureType == null && (
                    <input
                      type="text"
                      className="form-control"
                      id="signature"
                      value={
                        "Select signature type and provide signature in the USER section."
                      }
                      readOnly={true}
                    />
                  )}
                </div>
              </div>
              <BBCode
                state={this.state}
                generateTitleFunction={generateArrestWarrantTitle}
                generateBodyFunction={generateArrestWarrant}
                forumPostLinks={ForumPostLinks}
              />
            </form>
          );
        }}
      </UserContextConsumer>
    );
  }
}

export default ArrestWarrantForm;
