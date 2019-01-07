import React from "react";

export const Photographs = ({
  photographs,
  addPhotograph,
  removePhotograph,
  handleFormInput
}) => {
  return photographs.map(photo => {
    const index = photographs.indexOf(photo);
    return (
      <div className="form-row" key={`photograph_${index}`}>
        <label className="form-group col-xs-9">Photo #{index + 1}</label>
        <div className="form-group col-xs-3">
          <div className="input-group plus_minus_wrapper">
            {index != 0 && (
              <button
                className="btn"
                type="button"
                onClick={e => {
                  removePhotograph(e, "photograph", index);
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
                addPhotograph(e, "photograph");
              }}
            >
              <i className="fas fa-plus-square" />
            </button>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-xs-12">
            <input
              type="text"
              className="form-control"
              id={`photograph-description_${index}`}
              value={photographs[index].description}
              placeholder="Description of photo"
              onChange={e => handleFormInput(e)}
            />
          </div>
        </div>
      </div>
    );
  });
};
