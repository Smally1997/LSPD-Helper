import React, { Component } from "react";
import { UserContextConsumer } from "../../../UserContext.js";
import {
  generateSearchWarrant,
  generateSearchWarrantTitle
} from "../../../forms/frm_searchWarrant.js";
import BBCode from "../../bbCode/bbCode.js";
const {
  updateLocalStorage,
  retrieveLocalStorage
} = require("../../../scripts/localStorageForms.js");

const SearchProperties = ({
  properties,
  handleFormInput,
  addProperty,
  removeProperty
}) => {
  return (
    <div>
      {properties.map(property => {
        const index = properties.indexOf(property);
        return (
          <div className="form-row" key={`searchProperty_${index}`}>
            <div className="form-group col-xs-9">
              <label htmlFor={`searchPropertyDescription_${index}`}>
                Property/Premises #{index + 1}
              </label>
              <input
                type="text"
                className="form-control"
                id={`searchPropertyDescription_${index}`}
                value={properties[index].searchPropertyDescription}
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
                      removeProperty(e, "searchProperty", index);
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
                    addProperty(e, "searchProperty");
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

const ConcealedProperties = ({
  properties,
  handleFormInput,
  addProperty,
  removeProperty
}) => {
  return (
    <div>
      {properties.map(property => {
        const index = properties.indexOf(property);
        return (
          <div className="form-row" key={`concealedProperty_${index}`}>
            <div className="form-group col-xs-9">
              <label htmlFor={`concealedPropertyDescription_${index}`}>
                Property/Premises #{index + 1}
              </label>
              <input
                type="text"
                className="form-control"
                id={`concealedPropertyDescription_${index}`}
                value={properties[index].concealedPropertyDescription}
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
                      removeProperty(e, "concealedProperty", index);
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
                    addProperty(e, "concealedProperty");
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

const Charges = ({ charges, addCharge, removeCharge, handleFormInput }) => {
  return (
    <div>
      {charges.map(charge => {
        const index = charges.indexOf(charge);
        return (
          <div className="form-row" key={`charge_${index}`}>
            <div className="form-group col-xs-6">
              <label htmlFor={`chargeName_${index}`}>Charge #{index + 1}</label>
              <input
                type="text"
                className="form-control"
                id={`chargeName_${index}`}
                value={charges[index].chargeName}
                onChange={e => handleFormInput(e)}
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

const Facts = ({ facts, addFact, removeFact, handleFormInput }) => {
  return (
    <div>
      {facts.map(fact => {
        const index = facts.indexOf(fact);
        return (
          <div className="form-row" key={`fact_${index}`}>
            <div className="form-group col-xs-9">
              <label htmlFor={`fact_${index}`}>Fact #{index + 1}</label>
              <input
                type="text"
                className="form-control"
                id={`fact_${index}`}
                value={facts[index].statement}
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
                      removeFact(e, "facts", index);
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
                    addFact(e, "facts");
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

class SearchWarrantForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchProperties: [{ searchPropertyDescription: null }],
      concealedProperties: [{ concealedPropertyDescription: null }],
      charges: [{ chargeName: null, counts: null }],
      facts: [{ fact: null }],
      date: null
    };
    this.handleFormInput = this.handleFormInput.bind(this);
    this.addInputBox = this.addInputBox.bind(this);
    this.removeInputBox = this.removeInputBox.bind(this);
  }

  handleFormInput(e) {
    const { id, value } = e.target;
    const field = id.substring(0, id.indexOf("_"));
    const index = id.substring(id.indexOf("_") + 1);
    if (id.includes("searchPropertyDescription")) {
      this.setState(prevState => ({
        searchProperties: prevState.searchProperties.map(property => {
          if (prevState.searchProperties.indexOf(property) == index) {
            return Object.assign(property, { [field]: value });
          } else {
            return property;
          }
        })
      }));
    } else if (id.includes("concealedPropertyDescription")) {
      this.setState(prevState => ({
        concealedProperties: prevState.concealedProperties.map(property => {
          if (prevState.concealedProperties.indexOf(property) == index) {
            return Object.assign(property, { [field]: value });
          } else {
            return property;
          }
        })
      }));
    } else if (id.includes("chargeName_") || id.includes("counts_")) {
      this.setState(prevState => ({
        charges: prevState.charges.map(charge => {
          if (prevState.charges.indexOf(charge) == index) {
            return Object.assign(charge, { [field]: value });
          } else {
            return charge;
          }
        })
      }));
    } else if (id.includes("fact")) {
      this.setState(prevState => ({
        facts: prevState.facts.map(fact => {
          if (prevState.facts.indexOf(fact) == index) {
            return Object.assign(fact, { [field]: value });
          } else {
            return fact;
          }
        })
      }));
    } else {
      this.setState({ [id]: value });
    }
  }

  addInputBox(e, type) {
    if (type === "searchProperty") {
      let newProperty = { searchPropertyDescription: null };
      let { searchProperties } = this.state;
      searchProperties.push(newProperty);
      this.setState({ searchProperties });
    } else if (type === "concealedProperty") {
      let newProperty = { concealedPropertyDescription: null };
      let { concealedProperties } = this.state;
      concealedProperties.push(newProperty);
      this.setState({ concealedProperties });
    } else if (type === "charges") {
      let newCharge = { chargeName: null, counts: null };
      let { charges } = this.state;
      charges.push(newCharge);
      this.setState({ charges });
    } else if (type === "facts") {
      let newFact = { fact: null };
      let { facts } = this.state;
      facts.push(newFact);
      this.setState({ facts });
    }
  }

  removeInputBox(e, type, index) {
    if (type === "searchProperty") {
      let { searchProperties } = this.state;
      searchProperties.splice(index, 1);
      this.setState([searchProperties]);
    } else if (type === "concealedProperty") {
      let { concealedProperties } = this.state;
      concealedProperties.splice(index, 1);
      this.setState([concealedProperties]);
    } else if (type === "charges") {
      let { charges } = this.state;
      charges.splice(index, 1);
      this.setState([charges]);
    } else if (type === "facts") {
      let { facts } = this.state;
      facts.splice(index, 1);
      this.setState([facts]);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    updateLocalStorage("search_warrant_form", nextState);
    return true;
  }

  componentDidMount() {
    let curState = this.state;
    if (retrieveLocalStorage("search_warrant_form") != null) {
      curState = retrieveLocalStorage("search_warrant_form");
      this.setState(curState);
    }
  }

  render() {
    const {
      searchProperties,
      concealedProperties,
      charges,
      facts
    } = this.state;
    return (
      <UserContextConsumer>
        {({ user }) => {
          this.context = user;
          return (
            <form>
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

                <div className="form-group col-xs-12 col-sm-6">
                  <label htmlFor="affDivisionAbbreviation">
                    Division Abbreviation
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="affDivisionAbbreviation"
                    value={user.divisionAbbreviation}
                    placeholder="RHD/GND/DSVD"
                    readOnly={true}
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
              </div>
              <h4>Search Properties</h4>
              <SearchProperties
                properties={searchProperties}
                addProperty={(e, type) => {
                  this.addInputBox(e, type);
                }}
                removeProperty={(e, type, index) => {
                  this.removeInputBox(e, type, index);
                }}
                handleFormInput={e => {
                  this.handleFormInput(e);
                }}
              />
              <h4>Concealed Properties/Premises</h4>
              <ConcealedProperties
                properties={concealedProperties}
                addProperty={(e, type) => {
                  this.addInputBox(e, type);
                }}
                removeProperty={(e, type, index) => {
                  this.removeInputBox(e, type, index);
                }}
                handleFormInput={e => {
                  this.handleFormInput(e);
                }}
              />
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
              <h4>Statement of Facts</h4>
              <Facts
                facts={facts}
                addFact={(e, type) => {
                  this.addInputBox(e, type);
                }}
                removeFact={(e, type, index) => {
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
                  {user.signatureType === "text" && (
                    <input
                      type="text"
                      className="form-control"
                      id="signature"
                      value={user.signature}
                      readOnly={true}
                    />
                  )}
                  {user.signatureType === "image" && (
                    <img className="input-group" src={user.signature} />
                  )}
                </div>
              </div>
              <BBCode
                state={this.state}
                generateTitleFunction={generateSearchWarrantTitle}
                generateBodyFunction={generateSearchWarrant}
              />
            </form>
          );
        }}
      </UserContextConsumer>
    );
  }
}

export default SearchWarrantForm;
