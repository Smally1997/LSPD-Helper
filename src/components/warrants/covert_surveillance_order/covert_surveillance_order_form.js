import React, { Component } from "react";
import { UserContextConsumer } from "../../../UserContext.js";
import {
  generateCovertSurveillanceOrder,
  generateCovertSurveillanceOrderTitle
} from "../../../forms/frm_covertSurveillanceOrder.js";
import {
  Charges,
  BBCode
} from "../../common-form-components/common_form_components";
const {
  updateLocalStorage,
  retrieveLocalStorage
} = require("../../../scripts/localStorageForms.js");

const ForumPostLinks = [
  {
    link: "https://pd.lsgov.io/forum/posting.php?mode=post&f=1232",
    linkText: "RHD CSO"
  },
  {
    link: "https://pd.lsgov.io/forum/posting.php?mode=post&f=1233",
    linkText: "GND CSO"
  },
  {
    link: "https://pd.lsgov.io/forum/posting.php?mode=post&f=1234",
    linkText: "DSVD CSO"
  }
];

const SurveillanceProperties = ({
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
          <div className="form-row" key={`property_${index}`}>
            <div className="form-group col-xs-9">
              <label htmlFor={`propertyDescription_${index}`}>
                Property/Premises #{index + 1}
              </label>
              <input
                type="text"
                className="form-control"
                id={`propertyDescription_${index}`}
                value={properties[index].propertyDescription}
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
                      removeProperty(e, "surveillanceProperty", index);
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
                    addProperty(e, "surveillanceProperty");
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

const PeopleOrPersons = ({
  peopleOrPersons,
  handleFormInput,
  addPeopleOrPersons,
  removePeopleOrPersons
}) => {
  return (
    <div>
      {peopleOrPersons.map(peopleOrPerson => {
        const index = peopleOrPersons.indexOf(peopleOrPerson);
        return (
          <div className="form-row" key={`peopleOrPerson_${index}`}>
            <div className="form-group col-xs-9">
              <label htmlFor={`peopleOrPerson_${index}`}>
                People/Person #{index + 1}
              </label>
              <input
                type="text"
                className="form-control"
                id={`peopleOrPerson_${index}`}
                value={peopleOrPersons[index].peopleOrPerson}
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
                      removePeopleOrPersons(e, "peopleOrPerson", index);
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
                    addPeopleOrPersons(e, "peopleOrPerson");
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

class CovertSurveillanceOrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      affDivision: null,
      surveillanceProperties: [{ propertyDescription: null }],
      peopleOrPersons: [{ peopleOrPerson: null }],
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
    if (id.includes("propertyDescription")) {
      this.setState(prevState => ({
        surveillanceProperties: prevState.surveillanceProperties.map(
          property => {
            if (prevState.surveillanceProperties.indexOf(property) == index) {
              return Object.assign(property, { [field]: value });
            } else {
              return property;
            }
          }
        )
      }));
    } else if (id.includes("peopleOrPerson")) {
      this.setState(prevState => ({
        peopleOrPersons: prevState.peopleOrPersons.map(peopleOrPerson => {
          if (prevState.peopleOrPersons.indexOf(peopleOrPerson) == index) {
            return Object.assign(peopleOrPerson, { [field]: value });
          } else {
            return peopleOrPerson;
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
    if (type === "surveillanceProperty") {
      let newProperty = { propertyDescription: null };
      let { surveillanceProperties } = this.state;
      surveillanceProperties.push(newProperty);
      this.setState({ surveillanceProperties });
    } else if (type === "peopleOrPerson") {
      let newPeopleOrPerson = { peopleOrPerson: null };
      let { peopleOrPersons } = this.state;
      peopleOrPersons.push(newPeopleOrPerson);
      this.setState({ peopleOrPersons });
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
    if (type === "surveillanceProperty") {
      let { surveillanceProperties } = this.state;
      surveillanceProperties.splice(index, 1);
      this.setState([surveillanceProperties]);
    } else if (type === "peopleOrPerson") {
      let { peopleOrPersons } = this.state;
      peopleOrPersons.splice(index, 1);
      this.setState([peopleOrPersons]);
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
    updateLocalStorage("covert_surveillance_order_form", nextState);
    return true;
  }

  componentDidMount() {
    let curState = this.state;
    if (retrieveLocalStorage("covert_surveillance_order_form") != null) {
      curState = retrieveLocalStorage("covert_surveillance_order_form");
      this.setState(curState);
    }
  }

  render() {
    const {
      surveillanceProperties,
      peopleOrPersons,
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
                  <label htmlFor="affRank">Dept. Division</label>
                  <input
                    type="text"
                    className="form-control"
                    id="affDivision"
                    placeholder="RHD/GND/DSVD"
                    onChange={e => {
                      this.handleFormInput(e);
                    }}
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
              <h4>Surveillance Properties</h4>
              <SurveillanceProperties
                properties={surveillanceProperties}
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
              <h4>People Or Persons</h4>
              <PeopleOrPersons
                peopleOrPersons={peopleOrPersons}
                addPeopleOrPersons={(e, type) => {
                  this.addInputBox(e, type);
                }}
                removePeopleOrPersons={(e, type, index) => {
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
                generateTitleFunction={generateCovertSurveillanceOrderTitle}
                generateBodyFunction={generateCovertSurveillanceOrder}
                forumPostLinks={ForumPostLinks}
              />
            </form>
          );
        }}
      </UserContextConsumer>
    );
  }
}

export default CovertSurveillanceOrderForm;
