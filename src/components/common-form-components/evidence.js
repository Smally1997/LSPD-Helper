import React from "react";
export const Evidence = ({
  evidence,
  handleFormInput,
  addEvidence,
  removeEvidence
}) => {
  return (
    <div>
      {evidence.map(evidenceItem => {
        const index = evidence.indexOf(evidenceItem);
        return (
          <div className="form-row" key={`evidence_${index}`}>
            <div className="form-group col-xs-9">
              <label htmlFor={`evidenceDescription_${index}`}>
                Exhibit #{index + 1}
              </label>
              <input
                type="text"
                className="form-control"
                id={`evidenceDescription_${index}`}
                value={evidence[index].description}
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
                      removeEvidence(e, "evidence", index);
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
                    addEvidence(e, "evidence");
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
