import React, { Component } from "react";
import { UserContextConsumer } from "../../UserContext.js";
class User extends Component {
  constructor(props) {
    super(props);

    this.updateUserContext = this.updateUserContext.bind(this);
  }

  updateUserContext(e) {
    const user = this.context;
    user.updateUser(e.target.id, e.target.value);
  }

  render() {
    return (
      <UserContextConsumer>
        {({ user }) => {
          this.context = user;
          return (
            <div id="page">
              <h1 className="header">
                {user.rank} {user.firstName} {user.lastName}
                {user.serial != null &&
                  user.serial != "" &&
                  `(#${user.serial})`}
              </h1>
              <p className="small sub-header">All changes auto save.</p>
              <form>
                <div className="form-row">
                  <div className="form-group col-xs-12 col-sm-6">
                    <label for="firstName">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="John"
                      value={user.firstName}
                      onChange={e => this.updateUserContext(e)}
                    />
                  </div>
                  <div className="form-group col-xs-12 col-sm-6">
                    <label for="lastName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Doe"
                      value={user.lastName}
                      onChange={e => this.updateUserContext(e)}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-xs-12 col-sm-6">
                    <label for="rank">Department Rank</label>
                    <input
                      type="text"
                      className="form-control"
                      id="rank"
                      placeholder="Chief Of Police"
                      value={user.rank}
                      onChange={e => this.updateUserContext(e)}
                    />
                  </div>
                  <div className="form-group col-xs-12 col-sm-6">
                    <label for="serial">Serial Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="serial"
                      placeholder="71969"
                      value={user.serial}
                      onChange={e => this.updateUserContext(e)}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-xs-12 col-sm-6">
                    <label for="division">Division</label>
                    <input
                      type="text"
                      className="form-control"
                      id="division"
                      placeholder="Robbery-Homicide"
                      value={user.division}
                      onChange={e => this.updateUserContext(e)}
                    />
                  </div>
                  <div className="form-group col-xs-12 col-sm-6">
                    <label for="divisionAbbreviation">
                      Division Abbreviation
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="divisionAbbreviation"
                      placeholder="RHD"
                      value={user.divisionAbbreviation}
                      onChange={e => this.updateUserContext(e)}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-xs-12">
                    <label for="signatureType">Signature Type</label>
                    <div className="btn-group input-group">
                      <button
                        type="button"
                        className={
                          user.signatureType == "text"
                            ? "btn btn-primary"
                            : "btn btn-default"
                        }
                        id="signatureType"
                        value="text"
                        onClick={e => this.updateUserContext(e)}
                      >
                        Text
                      </button>
                      <button
                        type="button"
                        className={
                          user.signatureType == "image"
                            ? "btn btn-primary"
                            : "btn btn-default"
                        }
                        id="signatureType"
                        value="image"
                        onClick={e => this.updateUserContext(e)}
                      >
                        Image
                      </button>
                    </div>
                  </div>
                  {user.signatureType == "text" && (
                    <div className="form-group col-xs-12">
                      <label for="signature">Signature</label>
                      <input
                        type="text"
                        className="form-control"
                        id="signature"
                        value={user.signature}
                        onChange={e => this.updateUserContext(e)}
                      />
                    </div>
                  )}
                  {user.signatureType == "image" && (
                    <div className="form-group col-xs-12">
                      <label for="signature">Signature Image Link</label>
                      <input
                        type="text"
                        className="form-control"
                        id="signature"
                        value={user.signature}
                        onChange={e => this.updateUserContext(e)}
                      />
                      <img className="input-group" src={user.signature} />
                    </div>
                  )}
                </div>
              </form>
            </div>
          );
        }}
      </UserContextConsumer>
    );
  }
}

export default User;
