import React from "react";
export const Vehicles = ({
  vehicles,
  handleFormInput,
  addVehicle,
  removeVehicle
}) => {
  return vehicles.map(vehicle => {
    const index = vehicles.indexOf(vehicle);
    return (
      <div className="form-row" key={`vehicle_${index}`}>
        <label className="form-group col-xs-9">SV-{index + 1}</label>
        <div className="form-group col-xs-3">
          <div className="input-group plus_minus_wrapper">
            {index != 0 && (
              <button
                className="btn"
                type="button"
                onClick={e => {
                  removeVehicle(e, "vehicle", index);
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
                addVehicle(e, "vehicle");
              }}
            >
              <i className="fas fa-plus-square" />
            </button>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-xs-12 col-sm-4">
            <label htmlFor={`vehicle-makeAndModel_${index}`}>
              Make and Model
            </label>
            <input
              type="text"
              className="form-control"
              id={`vehicle-makeAndModel_${index}`}
              value={vehicles[index].makeAndModel}
              placeholder="Type of Vehicle"
              onChange={e => handleFormInput(e)}
            />
          </div>
          <div className="form-group col-xs-12 col-sm-4">
            <label htmlFor={`vehicle-type_${index}`}>Type</label>
            <input
              type="text"
              className="form-control"
              id={`vehicle-type_${index}`}
              value={vehicles[index].type}
              placeholder="4-Door/2-Door/Sports Car/Van/etc."
              onChange={e => handleFormInput(e)}
            />
          </div>
          <div className="form-group col-xs-12 col-sm-4">
            <label htmlFor={`vehicle-colors_${index}`}>Colors</label>
            <input
              type="text"
              className="form-control"
              id={`vehicle-colors_${index}`}
              value={vehicles[index].colors}
              placeholder="Vehicle Color(s)"
              onChange={e => handleFormInput(e)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-xs-12 col-sm-4">
            <label htmlFor={`vehicle-index_${index}`}>Lic. No</label>
            <input
              type="text"
              className="form-control"
              id={`vehicle-index_${index}`}
              value={vehicles[index].index}
              placeholder="0ABC123"
              onChange={e => handleFormInput(e)}
            />
          </div>
          <div className="form-group col-xs-12 col-sm-8">
            <label htmlFor={`vehicle-description_${index}`}>Description</label>
            <input
              type="text"
              className="form-control"
              id={`vehicle-description_${index}`}
              value={vehicles[index].description}
              placeholder="Distinguishing Features (e.g. damage to front left bumper, gold wheels, spoiler, decals on back window)"
              onChange={e => handleFormInput(e)}
            />
          </div>
        </div>
      </div>
    );
  });
};
