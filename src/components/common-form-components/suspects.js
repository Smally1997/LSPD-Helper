import React from "react";
export const Suspects = ({
  suspects,
  handleFormInput,
  addSuspect,
  removeSuspect
}) => {
  return suspects.map(suspect => {
    const index = suspects.indexOf(suspect);
    return (
      <div className="form-row" key={`suspect_${index}`}>
        <label className="form-group col-xs-9">S-{index + 1}</label>
        <div className="form-group col-xs-3">
          <div className="input-group plus_minus_wrapper">
            {index != 0 && (
              <button
                className="btn"
                type="button"
                onClick={e => {
                  removeSuspect(e, "suspect", index);
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
                addSuspect(e, "suspect");
              }}
            >
              <i className="fas fa-plus-square" />
            </button>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-xs-12 col-sm-3">
            <label htmlFor={`suspect-firstName_${index}`}>First Name</label>
            <input
              type="text"
              className="form-control"
              id={`suspect-firstName_${index}`}
              value={suspects[index].firstName}
              onChange={e => handleFormInput(e)}
            />
          </div>
          <div className="form-group col-xs-12 col-sm-3">
            <label htmlFor={`suspect-lastName_${index}`}>Last Name</label>
            <input
              type="text"
              className="form-control"
              id={`suspect-lastName_${index}`}
              value={suspects[index].lastName}
              onChange={e => handleFormInput(e)}
            />
          </div>
          <div className="form-group col-xs-12 col-sm-3">
            <label htmlFor={`suspect-sex_${index}`}>Sex</label>
            <input
              type="text"
              className="form-control"
              id={`suspect-sex_${index}`}
              value={suspects[index].sex}
              placeholder="M/F"
              onChange={e => handleFormInput(e)}
            />
          </div>
          <div className="form-group col-xs-12 col-sm-3">
            <label htmlFor={`suspect-age_${index}`}>Age</label>
            <input
              type="text"
              className="form-control"
              id={`suspect-age_${index}`}
              value={suspects[index].age}
              placeholder="00"
              onChange={e => handleFormInput(e)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-xs-12 col-sm-4">
            <label htmlFor={`suspect-race_${index}`}>Race</label>
            <input
              type="text"
              className="form-control"
              id={`suspect-race_${index}`}
              value={suspects[index].race}
              placeholder="W/B/H/A/O"
              onChange={e => handleFormInput(e)}
            />
          </div>
          <div className="form-group col-xs-12 col-sm-4">
            <label htmlFor={`suspect-description_${index}`}>Description</label>
            <input
              type="text"
              className="form-control"
              id={`suspect-description_${index}`}
              value={suspects[index].description}
              placeholder="Distinguishing Features (e.g. Glasses, Heavyset, Tall...)"
              onChange={e => handleFormInput(e)}
            />
          </div>
          <div className="form-group col-xs-12 col-sm-4">
            <label htmlFor={`suspect-clothing_${index}`}>Clothing</label>
            <input
              type="text"
              className="form-control"
              id={`suspect-clothing_${index}`}
              value={suspects[index].clothing}
              placeholder="Description of Clothing"
              onChange={e => handleFormInput(e)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-xs-12 col-sm-4">
            <label htmlFor={`suspect-weapon_${index}`}>Weapon</label>
            <input
              type="text"
              className="form-control"
              id={`suspect-weapon_${index}`}
              value={suspects[index].weapon}
              placeholder="Bodily Force/Gun/Knife/etc"
              onChange={e => handleFormInput(e)}
            />
          </div>
          <div className="form-group col-xs-12 col-sm-4">
            <label htmlFor={`suspect-known_info_${index}`}>Known Info</label>
            <input
              type="text"
              className="form-control"
              id={`suspect-known_info_${index}`}
              value={suspects[index].knownInfo}
              placeholder="Verbal Threats/Bodily Force/Simulated Gun/Gun/Knife/etc"
              onChange={e => handleFormInput(e)}
            />
          </div>
          <div className="form-group col-xs-12 col-sm-4">
            <label htmlFor={`suspect-infoSource_${index}`}>
              Source Of Info
            </label>
            <input
              type="text"
              className="form-control"
              id={`suspect-infoSource_${index}`}
              value={suspects[index].infoSource}
              placeholder="W/CCTV/O"
              onChange={e => handleFormInput(e)}
            />
          </div>
        </div>
      </div>
    );
  });
};
