import React from "react";
export const Victims = ({
  victims,
  handleFormInput,
  addVictim,
  removeVictim
}) => {
  return victims.map(victim => {
    const index = victims.indexOf(victim);
    return (
      <div key={`victim_${index}`} className="form-row">
        <div className="form-row">
          <label className="form-group col-xs-9">V-{index + 1}</label>
          <div className="form-group col-xs-3">
            <div className="input-group plus_minus_wrapper">
              {index != 0 && (
                <button
                  className="btn"
                  type="button"
                  onClick={e => {
                    removeVictim(e, "victim", index);
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
                  addVictim(e, "victim");
                }}
              >
                <i className="fas fa-plus-square" />
              </button>
            </div>
          </div>
        </div>
        <div className="form-group col-xs-12 col-sm-4">
          <label htmlFor={`victimFirstName_${index}`}>First Name</label>
          <input
            type="text"
            className="form-control"
            id={`victim-firstName_${index}`}
            value={victims[index].firstName}
            onChange={e => handleFormInput(e)}
          />
        </div>
        <div className="form-group col-xs-12 col-sm-4">
          <label htmlFor={`victim-lastName_${index}`}>Last Name</label>
          <input
            type="text"
            className="form-control"
            id={`victim-lastName_${index}`}
            value={victims[index].lastName}
            onChange={e => handleFormInput(e)}
          />
        </div>
        <div className="form-group col-xs-12 col-sm-4">
          <label htmlFor={`victim-alias_${index}`}>Alias</label>
          <input
            type="text"
            className="form-control"
            id={`victimAlias_${index}`}
            value={victims[index].alias}
            onChange={e => handleFormInput(e)}
          />
        </div>
        <div className="form-group col-xs-12 col-sm-4">
          <label htmlFor={`victim-sex_${index}`}>Sex</label>
          <input
            type="text"
            className="form-control"
            id={`victim-sex_${index}`}
            value={victims[index].sex}
            placeholder="M/F"
            onChange={e => handleFormInput(e)}
          />
        </div>
        <div className="form-group col-xs-12 col-sm-4">
          <label htmlFor={`victim-race_${index}`}>Race</label>
          <input
            type="text"
            className="form-control"
            id={`victim-race_${index}`}
            value={victims[index].race}
            placeholder="W/B/H/A/O"
            onChange={e => handleFormInput(e)}
          />
        </div>
        <div className="form-group col-xs-12 col-sm-4">
          <label htmlFor={`victim-age_${index}`}>Age</label>
          <input
            type="text"
            className="form-control"
            id={`victim-age_${index}`}
            value={victims[index].age}
            placeholder="00"
            onChange={e => handleFormInput(e)}
          />
        </div>
        <div className="form-group col-xs-12 col-sm-6">
          <label htmlFor={`victim-address_${index}`}>Home Address</label>
          <input
            type="text"
            className="form-control"
            id={`victim-address_${index}`}
            value={victims[index].address}
            placeholder="000 Street St, Los Santos"
            onChange={e => handleFormInput(e)}
          />
        </div>
        <div className="form-group col-xs-12 col-sm-6">
          <label htmlFor={`victim-maritalStatus_${index}`}>
            Marital Status
          </label>
          <input
            type="text"
            className="form-control"
            id={`victim-maritalStatus_${index}`}
            value={victims[index].maritalStatus}
            placeholder="S/M/D/U (Single/Married/Divorced/Unknown -- leave blank if business)"
            onChange={e => handleFormInput(e)}
          />
        </div>
      </div>
    );
  });
};
