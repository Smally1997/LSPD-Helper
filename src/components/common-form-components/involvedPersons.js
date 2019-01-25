import React from "react";

export const InvolvedPersons = ({
  involvedPersons,
  addInvolvedPerson,
  removeInvolvedPerson,
  handleFormInput
}) => {
  return involvedPersons.map(involvedPerson => {
    const index = involvedPersons.indexOf(involvedPerson);
    return (
      <div className="form-row" key={`involvedPerson_${index}`}>
        <div className="form-row">
          <label className="form-group col-xs-9">IP-{index + 1}</label>
          <div className="form-group col-xs-3">
            <div className="input-group plus_minus_wrapper">
              {index != 0 && (
                <button
                  className="btn"
                  type="button"
                  onClick={e => {
                    removeInvolvedPerson(e, "involvedPerson", index);
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
                  addInvolvedPerson(e, "involvedPerson");
                }}
              >
                <i className="fas fa-plus-square" />
              </button>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-xs-12 col-sm-4">
            <label htmlFor={`involvedPerson-type_${index}`}>Type</label>
            <input
              type="text"
              className="form-control"
              id={`involvedPerson-type_${index}`}
              value={involvedPersons[index].type}
              placeholder="W/PR"
              onChange={e => handleFormInput(e)}
            />
          </div>
          <div className="form-group col-xs-12 col-sm-4">
            <label htmlFor={`involvedPerson-firstName_${index}`}>
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id={`involvedPerson-firstName_${index}`}
              value={involvedPersons[index].firstName}
              onChange={e => handleFormInput(e)}
            />
          </div>
          <div className="form-group col-xs-12 col-sm-4">
            <label htmlFor={`involvedPerson-lastName_${index}`}>
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id={`involvedPerson-lastName_${index}`}
              value={involvedPersons[index].lastName}
              onChange={e => handleFormInput(e)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-xs-12 col-sm-4">
            <label htmlFor={`involvedPerson-sex_${index}`}>Sex</label>
            <input
              type="text"
              className="form-control"
              id={`involvedPerson-sex_${index}`}
              value={involvedPersons[index].sex}
              onChange={e => handleFormInput(e)}
            />
          </div>
          <div className="form-group col-xs-12 col-sm-4">
            <label htmlFor={`involvedPerson-race_${index}`}>Race</label>
            <input
              type="text"
              className="form-control"
              id={`involvedPerson-race_${index}`}
              value={involvedPersons[index].race}
              onChange={e => handleFormInput(e)}
            />
          </div>
          <div className="form-group col-xs-12 col-sm-4">
            <label htmlFor={`involvedPerson-phone_${index}`}>Phone</label>
            <input
              type="text"
              className="form-control"
              id={`involvedPerson-phone_${index}`}
              value={involvedPersons[index].phone}
              onChange={e => handleFormInput(e)}
            />
          </div>
        </div>
      </div>
    );
  });
};
