import React, { Component } from "react";
import { UserContextConsumer } from "../../../UserContext.js";
import {
  BBCode,
  Charges,
  Victims,
  Suspects,
  InvolvedPersons,
  Photographs,
  Evidence,
  AdditionalItems,
  Vehicles
} from "../../common-form-components/common_form_components";
import {
  generateInvestigativeReport,
  generateInvestigativeReportTitle
} from "../../../forms/frm_investigativeReport.js";
const {
  updateLocalStorage,
  retrieveLocalStorage
} = require("../../../scripts/localStorageForms.js");
class InvestigativeReportForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charges: [{ chargeName: null, counts: null }],
      location: null,
      premisesType: null,
      date: null,
      time: null,
      affUnit: null,
      propertyStolenDamaged: null,
      estValueOfProperty: null,
      modusOperandi: null,
      victims: [
        {
          firstName: null,
          lastName: null,
          alias: null,
          sex: null,
          race: null,
          age: null,
          address: null,
          maritalStatus: null
        }
      ],
      suspectVehicles: [
        {
          makeAndModel: null,
          type: null,
          colors: null,
          index: null,
          description: null
        }
      ],
      suspects: [
        {
          firstName: null,
          lastName: null,
          race: null,
          age: null,
          description: null,
          clothing: null,
          weapon: null,
          knownInfo: null,
          infoSource: null
        }
      ],
      involvedPersons: [
        {
          type: null,
          firstName: null,
          lastName: null,
          sex: null,
          race: null,
          phone: null
        }
      ],
      caseScrWeapons: null,
      caseScrNarcotics: null,
      narrative: {
        sourceOfActivity: null,
        investigation: null,
        injuriesMedicalTreatment: null,
        photographs: [{ description: null }],
        evidence: [{ description: null }],
        additional: [{ description: null }]
      }
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
    } else if (id.includes("victim-")) {
      const field = id.substring(id.indexOf("-") + 1, id.indexOf("_"));
      const index = id.substring(id.indexOf("_") + 1);
      this.setState(prevState => ({
        victims: prevState.victims.map(victim => {
          if (prevState.victims.indexOf(victim) == index) {
            return Object.assign(victim, { [field]: value });
          } else {
            return victim;
          }
        })
      }));
    } else if (id.includes("vehicle-")) {
      const field = id.substring(id.indexOf("-") + 1, id.indexOf("_"));
      const index = id.substring(id.indexOf("_") + 1);
      this.setState(prevState => ({
        suspectVehicles: prevState.suspectVehicles.map(vehicle => {
          if (prevState.suspectVehicles.indexOf(vehicle) == index) {
            return Object.assign(vehicle, { [field]: value });
          } else {
            return vehicle;
          }
        })
      }));
    } else if (id.includes("suspect-")) {
      const field = id.substring(id.indexOf("-") + 1, id.indexOf("_"));
      const index = id.substring(id.indexOf("_") + 1);
      this.setState(prevState => ({
        suspects: prevState.suspects.map(suspect => {
          if (prevState.suspects.indexOf(suspect) == index) {
            return Object.assign(suspect, { [field]: value });
          } else {
            return suspect;
          }
        })
      }));
    } else if (id.includes("involvedPerson-")) {
      const field = id.substring(id.indexOf("-") + 1, id.indexOf("_"));
      const index = id.substring(id.indexOf("_") + 1);
      this.setState(prevState => ({
        involvedPersons: prevState.involvedPersons.map(involvedPerson => {
          if (prevState.involvedPersons.indexOf(involvedPerson) == index) {
            return Object.assign(involvedPerson, { [field]: value });
          } else {
            return involvedPerson;
          }
        })
      }));
    } else if (id.includes("narrative-")) {
      const field = id.substring(id.indexOf("-") + 1);
      console.log(field);
      const index = id.substring(id.indexOf("_") + 1);
      let { narrative } = this.state;
      narrative[field] = value;
      this.setState({ narrative });
    } else if (id.includes("photograph-")) {
      const index = id.substring(id.indexOf("_") + 1);
      let { photographs } = this.state.narrative;
      photographs.map(photograph => {
        if (photographs.indexOf(photograph) == index) {
          return (photographs[
            photographs.indexOf(photograph)
          ].description = value);
        }
      });
      let { narrative } = this.state;
      narrative.photographs = photographs;
      this.setState({ narrative });
    } else if (id.includes("evidenceDescription_")) {
      const index = id.substring(id.indexOf("_") + 1);
      let { evidence } = this.state.narrative;
      evidence.map(evidenceItem => {
        if (evidence.indexOf(evidenceItem) == index) {
          return (evidence[evidence.indexOf(evidenceItem)].description = value);
        }
      });
      let { narrative } = this.state;
      narrative.evidence = evidence;
      this.setState({ narrative });
    } else if (id.includes("additionalItem-")) {
      const index = id.substring(id.indexOf("_") + 1);
      let { additional } = this.state.narrative;
      additional.map(additionalItem => {
        if (additional.indexOf(additionalItem) == index) {
          return (additional[
            additional.indexOf(additionalItem)
          ].description = value);
        }
      });
      let { narrative } = this.state;
      narrative.additional = additional;
      this.setState({ narrative });
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
      let { narrative } = this.state;
      narrative.evidence.push(newEvidence);
      this.setState({ narrative });
    } else if (type === "victim") {
      let newVictim = {
        firstName: null,
        lastName: null,
        alias: null,
        sex: null,
        race: null,
        age: null,
        address: null,
        maritalStatus: null
      };
      let { victims } = this.state;
      victims.push(newVictim);
      this.setState({ victims });
    } else if (type === "suspect") {
      let newSuspect = {
        firstName: null,
        lastName: null,
        race: null,
        age: null,
        description: null,
        clothing: null,
        weapon: null,
        knownInfo: null,
        infoSource: null
      };
      let { suspects } = this.state;
      suspects.push(newSuspect);
      this.setState({ suspects });
    } else if (type === "vehicle") {
      let newVehicle = {
        makeAndModel: null,
        type: null,
        colors: null,
        index: null,
        description: null
      };
      let { suspectVehicles } = this.state;
      suspectVehicles.push(newVehicle);
      this.setState({ suspectVehicles });
    } else if (type === "involvedPerson") {
      let newInvolvedPerson = {
        type: null,
        firstName: null,
        lastName: null,
        sex: null,
        race: null,
        phone: null
      };
      let { involvedPersons } = this.state;
      involvedPersons.push(newInvolvedPerson);
      this.setState({ involvedPersons });
    } else if (type === "photograph") {
      let newPhotograph = { description: null };
      let { narrative } = this.state;
      narrative.photographs.push(newPhotograph);
      this.setState({ narrative });
    } else if (type === "additionalItem") {
      let newAdditionalItem = { description: null };
      let { narrative } = this.state;
      narrative.additional.push(newAdditionalItem);
      this.setState({ narrative });
    }
  }
  removeInputBox(e, type, index) {
    if (type === "charges") {
      let { charges } = this.state;
      charges.splice(index, 1);
      this.setState([charges]);
    } else if (type === "victim") {
      let { victims } = this.state;
      victims.splice(index, 1);
      this.setState({ victims });
    } else if (type === "suspect") {
      let { suspects } = this.state;
      suspects.splice(index, 1);
      this.setState({ suspects });
    } else if (type === "involvedPerson") {
      let { involvedPersons } = this.state;
      involvedPersons.splice(index, 1);
      this.setState({ involvedPersons });
    } else if (type === "photograph") {
      let { narrative } = this.state;
      narrative.photographs.splice(index, 1);
      this.setState({ narrative });
    } else if (type === "evidence") {
      let { narrative } = this.state;
      narrative.evidence.splice(index, 1);
      this.setState({ narrative });
    } else if (type === "additionalItem") {
      let { narrative } = this.state;
      narrative.additional.splice(index, 1);
      this.setState({ narrative });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    updateLocalStorage("investigative_report_form", nextState);
    return true;
  }

  componentDidMount() {
    let curState = this.state;
    if (retrieveLocalStorage("investigative_report_form") != null) {
      curState = retrieveLocalStorage("investigative_report_form");
      this.setState(curState);
    }
  }

  render() {
    return (
      <UserContextConsumer>
        {({ user }) => {
          return (
            <form>
              <h4>Report Information</h4>
              <Charges
                charges={this.state.charges}
                addCharge={this.addInputBox}
                removeCharge={this.removeInputBox}
                handleFormInput={this.handleFormInput}
              />
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
              <h4>Occurrence Details</h4>
              <div className="form-row">
                <div className="form-group col-xs-12 col-sm-6">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    placeholder="Address of Occurrence"
                    value={this.state.location}
                    onChange={e => this.handleFormInput(e)}
                  />
                </div>
                <div className="form-group col-xs-12 col-sm-6">
                  <label htmlFor="premisesType">Premises Type</label>
                  <input
                    type="text"
                    className="form-control"
                    id="premisesType"
                    placeholder=" Residence/Business/Office/Street/Park/etc."
                    value={this.state.premisesType}
                    onChange={e => this.handleFormInput(e)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-xs-12 col-sm-6">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    value={this.state.date}
                    onChange={e => this.handleFormInput(e)}
                  />
                </div>
                <div className="form-group col-xs-12 col-sm-6">
                  <label htmlFor="time">Time</label>
                  <input
                    type="time"
                    className="form-control"
                    id="time"
                    value={this.state.time}
                    onChange={e => this.handleFormInput(e)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-xs-12 col-sm-6">
                  <label htmlFor="propertyStolenDamaged">
                    PROPERTY STOLEN/DAMAGED
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="propertyStolenDamaged"
                    placeholder="Description of stolen/damaged property"
                    value={this.state.propertyStolenDamaged}
                    onChange={e => this.handleFormInput(e)}
                  />
                </div>
                <div className="form-group col-xs-12 col-sm-6">
                  <label htmlFor="estValueOfProperty">
                    EST. VALUE OF PROPERTY
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="estValueOfProperty"
                    value={this.state.estValueOfProperty}
                    onChange={e => this.handleFormInput(e)}
                  />
                </div>
              </div>
              <h4>Reporting Employee</h4>
              <div className="form-row">
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
                </div>
                <div className="form-row">
                  <div className="form-group col-xs-12 col-sm-6">
                    <label htmlFor="affRank">Division</label>
                    <input
                      type="text"
                      className="form-control"
                      id="affRank"
                      placeholder="Detective I"
                      value={user.division}
                      readOnly={true}
                    />
                  </div>
                  <div className="form-group col-xs-12 col-sm-6">
                    <label htmlFor="unit">Unit</label>
                    <input
                      type="text"
                      className="form-control"
                      id="affRank"
                      placeholder="Chief Of Police"
                      value={this.state.affUnit}
                      onChange={e => this.handleFormInput(e)}
                    />
                  </div>
                </div>
                <h4>MO</h4>
                <div className="form-row">
                  <div className="form-group col-xs-12">
                    <label htmlFor="modusOperandi">Modus Operandi</label>
                    <input
                      type="text"
                      className="form-control"
                      id="modusOperandi"
                      placeholder="DESCRIBE THE SUSPECT'S ACTIONS IN BRIEF PHRASES, INCLUDING WEAPON USED."
                      value={this.state.modusOperandi}
                      onChange={e => this.handleFormInput(e)}
                    />
                  </div>
                </div>
                <h4>Victims</h4>
                <Victims
                  victims={this.state.victims}
                  addVictim={this.addInputBox}
                  removeVictim={this.removeInputBox}
                  handleFormInput={this.handleFormInput}
                />
                <h4>Suspects</h4>
                <Vehicles
                  vehicles={this.state.suspectVehicles}
                  addVehicle={this.addInputBox}
                  removeVehicle={this.removeInputBox}
                  handleFormInput={this.handleFormInput}
                />
                <Suspects
                  suspects={this.state.suspects}
                  addSuspect={this.addInputBox}
                  removeSuspect={this.removeInputBox}
                  handleFormInput={this.handleFormInput}
                />
                <h4>Involved Person(s)</h4>
                <InvolvedPersons
                  involvedPersons={this.state.involvedPersons}
                  addInvolvedPerson={this.addInputBox}
                  removeInvolvedPerson={this.removeInputBox}
                  handleFormInput={this.handleFormInput}
                />
                <h4>Case Screening Factors</h4>
                <div className="form-row">
                  <div className="form-group col-xs-12 col-sm-6">
                    <label htmlFor="caseScrWeapons">Weapons Found</label>
                    <select
                      className="custom-select form-control"
                      id="caseScrWeapons"
                      onChange={e => this.handleFormInput(e)}
                      value={this.state.caseScrWeapons}
                    >
                      <option value="CHOOSE ONE">CHOOSE ONE</option>
                      <option value="Y">Y</option>
                      <option value="N">N</option>
                    </select>
                  </div>
                  <div className="form-group col-xs-12 col-sm-6">
                    <label htmlFor="caseScrNarcotics">Narcotics Found</label>

                    <select
                      className="custom-select form-control"
                      id="caseScrNarcotics"
                      onChange={e => this.handleFormInput(e)}
                      value={this.state.caseScrNarcotics}
                    >
                      <option value="CHOOSE ONE">CHOOSE ONE</option>
                      <option value="Y">Y</option>
                      <option value="N">N</option>
                    </select>
                  </div>
                </div>
                <h4>Narrative</h4>
                <div className="form-row">
                  <div className="form-group col-xs-12">
                    <label htmlFor="narrative-sourceOfActivity">
                      Source Of Activity
                    </label>
                    <textarea
                      className="form-control"
                      id="narrative-sourceOfActivity"
                      value={this.state.narrative.sourceOfActivity}
                      placeholder="On (m-d-yy) at approximately (0000) hours, my partner Officer (Last) #(serial) and I, Officer (Last) #(serial), were assigned to unit (callsign), (Division). We were working in (full uniform/plainclothes/undercover) in a (marked/unmarked/undercover) police vehicle. We (received a radio call/were on patrol when we observed/were flagged down by a citizen/etc.) regarding a (type of crime) at (address)."
                      onChange={e => this.handleFormInput(e)}
                    />
                  </div>
                  <div className="form-group col-xs-12">
                    <label htmlFor="narrative-investigation">
                      Investigation
                    </label>
                    <textarea
                      className="form-control"
                      id="narrative-investigation"
                      value={this.state.narrative.investigation}
                      placeholder="Upon arrival, (all investigatory steps taken)."
                      onChange={e => this.handleFormInput(e)}
                    />
                  </div>
                  <div className="form-group col-xs-12">
                    <label htmlFor="narrative-injuriesMedicalTreatment">
                      Injuries/Medical Treatment
                    </label>
                    <textarea
                      className="form-control"
                      id="narrative-injuriesMedicalTreatment"
                      value={this.state.narrative.injuriesMedicalTreatment}
                      placeholder="The victim suffered (injuries). The victim was (treated on scene/transported to hospital). The victim was (admitted to hospital/discharged/deceased/etc.)."
                      onChange={e => this.handleFormInput(e)}
                    />
                  </div>
                  <div className="form-group col-xs-12">
                    <label>Photographs</label>
                    <Photographs
                      photographs={this.state.narrative.photographs}
                      addPhotograph={this.addInputBox}
                      removePhotograph={this.removeInputBox}
                      handleFormInput={this.handleFormInput}
                    />
                  </div>
                  <h4>Evidence</h4>
                  <Evidence
                    evidence={this.state.narrative.evidence}
                    addEvidence={this.addInputBox}
                    removeEvidence={this.removeInputBox}
                    handleFormInput={this.handleFormInput}
                  />
                  <h4>Additional</h4>
                  <AdditionalItems
                    additionalItems={this.state.narrative.additional}
                    addAdditionalItem={this.addInputBox}
                    removeAdditionalItem={this.removeInputBox}
                    handleFormInput={this.handleFormInput}
                  />
                </div>
              </div>
              <BBCode
                state={this.state}
                generateTitleFunction={generateInvestigativeReportTitle}
                generateBodyFunction={generateInvestigativeReport}
                //    forumPostLinks={ForumPostLinks}
              />
            </form>
          );
        }}
      </UserContextConsumer>
    );
  }
}

export default InvestigativeReportForm;
