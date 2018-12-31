import React, { Component } from "react";
import BBCode from "../../bbCode/bbCode.js";
import {
  generateFieldInterviewCard,
  generateFieldInterviewCardTitle
} from "../../../forms/frm_fieldInterviewCard.js";
const {
  updateLocalStorage,
  retrieveLocalStorage
} = require("../../../scripts/localStorageForms.js");

class FieldInterviewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: null,
      firstName: null,
      lastName: null,
      alias: null,
      sex: null,
      age: null,
      race: null,
      desc: null,
      address: null,
      city: null,
      phone: null,
      veh: null,
      vehColor: null,
      vehLicenseNo: null,
      gang: null,
      subset: null,
      type: null
    };
    this.handleFormInput = this.handleFormInput.bind(this);
  }

  handleFormInput(e) {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  shouldComponentUpdate(nextProps, nextState) {
    updateLocalStorage("field_interview_card_form", nextState);
    return true;
  }

  componentDidMount() {
    let curState = this.state;
    if (retrieveLocalStorage("field_interview_card_form") != null) {
      curState = retrieveLocalStorage("field_interview_card_form");
      this.setState(curState);
    }
  }
  render() {
    return (
      <form>
        <h4>Subject Description</h4>
        <div className="form-row">
          <div className="form-group col-xs-12 col-sm-3">
            <label htmlFor="imgUrl">Image (150x150)</label>
            <input
              type="text"
              className="form-control"
              id="imgUrl"
              value={this.state.imgUrl}
              onChange={e => this.handleFormInput(e)}
            />
          </div>
          <div className="form-group col-xs-12 col-sm-3">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Jane"
              value={this.state.firstName}
              onChange={e => this.handleFormInput(e)}
            />
          </div>
          <div className="form-group col-xs-12 col-sm-3">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Smith"
              value={this.state.lastName}
              onChange={e => this.handleFormInput(e)}
            />
          </div>
          <div className="form-group col-xs-12 col-sm-3">
            <label htmlFor="alias">Alias</label>
            <input
              type="text"
              className="form-control"
              id="alias"
              placeholder="Nickname"
              value={this.state.alias}
              onChange={e => this.handleFormInput(e)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-xs-12 col-sm-2">
            <label htmlFor="sex">Sex</label>
            <input
              type="text"
              className="form-control"
              id="sex"
              placeholder="Male"
              value={this.state.sex}
              onChange={e => this.handleFormInput(e)}
            />
          </div>
          <div className="form-group col-xs-12 col-sm-2">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              className="form-control"
              id="age"
              placeholder="21"
              value={this.state.age}
              onChange={e => this.handleFormInput(e)}
            />
          </div>
          <div className="form-group col-xs-12 col-sm-2">
            <label htmlFor="race">Race</label>
            <input
              type="text"
              className="form-control"
              id="race"
              placeholder="White"
              value={this.state.race}
              onChange={e => this.handleFormInput(e)}
            />
          </div>
          <div className="form-group col-xs-12 col-sm-6">
            <label htmlFor="desc">Description</label>
            <input
              type="text"
              className="form-control"
              id="desc"
              placeholder="Tattoos covering neck and arms, large build"
              value={this.state.desc}
              onChange={e => this.handleFormInput(e)}
            />
          </div>
        </div>
        <h4>Subject Details</h4>
        <div className="form-row">
          <div className="form-group col-xs-12 col-sm-4">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="124 Winona Ave"
              value={this.state.address}
              onChange={e => this.handleFormInput(e)}
            />
          </div>
          <div className="form-group col-xs-12 col-sm-4">
            <label htmlFor="city">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              placeholder="Idlewood"
              value={this.state.city}
              onChange={e => this.handleFormInput(e)}
            />
          </div>
          <div className="form-group col-xs-12 col-sm-4">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="123-4568"
              value={this.state.phone}
              onChange={e => this.handleFormInput(e)}
            />
          </div>
        </div>
        <h4>Subject Vehicle</h4>

        <div className="form-row">
          <div className="form-group col-xs-12 col-sm-4">
            <label htmlFor="veh">Vehicle</label>
            <input
              type="text"
              className="form-control"
              id="veh"
              placeholder="Premier"
              value={this.state.veh}
              onChange={e => this.handleFormInput(e)}
            />
          </div>
          <div className="form-group col-xs-12 col-sm-4">
            <label htmlFor="vehColor">Vehicle Color</label>
            <input
              type="text"
              className="form-control"
              id="vehColor"
              placeholder="Blue"
              value={this.state.vehColor}
              onChange={e => this.handleFormInput(e)}
            />
          </div>
          <div className="form-group col-xs-12 col-sm-4">
            <label htmlFor="vehLicenseNo">Vehicle License Plate</label>
            <input
              type="text"
              className="form-control"
              id="vehLicenseNo"
              placeholder="1ABC234"
              value={this.state.vehLicenseNo}
              onChange={e => this.handleFormInput(e)}
            />
          </div>
        </div>
        <h4>Gang Information</h4>
        <div className="form-row">
          <div className="form-group col-xs-12 col-sm-4">
            <label htmlFor="gang">Gang</label>
            <input
              type="text"
              className="form-control"
              id="gang"
              placeholder="Crips"
              value={this.state.gang}
              onChange={e => this.handleFormInput(e)}
            />
          </div>
          <div className="form-group col-xs-12 col-sm-4">
            <label htmlFor="subset">Subset</label>
            <input
              type="text"
              className="form-control"
              id="subset"
              placeholder="Gang Subset"
              value={this.state.subset}
              onChange={e => this.handleFormInput(e)}
            />
          </div>
          <div className="form-group col-xs-12 col-sm-4">
            <label htmlFor="alias">Type</label>
            <input
              type="text"
              className="form-control"
              id="type"
              placeholder="Gang Type"
              value={this.state.type}
              onChange={e => this.handleFormInput(e)}
            />
          </div>
        </div>
        <BBCode
          state={this.state}
          generateTitleFunction={generateFieldInterviewCardTitle}
          generateBodyFunction={generateFieldInterviewCard}
        />
      </form>
    );
  }
}

export default FieldInterviewCard;
