import React from "react";
import { SearchPenalCode } from "../../scripts/searchPenalCode.js";

export const Charges = ({
  charges,
  addCharge,
  removeCharge,
  handleFormInput
}) => {
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
