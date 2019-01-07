import React from "react";

export const AdditionalItems = ({
  additionalItems,
  addAdditionalItem,
  removeAdditionalItem,
  handleFormInput
}) => {
  return additionalItems.map(additionalItem => {
    const index = additionalItems.indexOf(additionalItem);

    return (
      <div className="form-row" key={`additionalItem_${index}`}>
        <label className="form-group col-xs-9">
          Additional Item #{index + 1}
        </label>
        <div className="form-group col-xs-3">
          <div className="input-group plus_minus_wrapper">
            {index != 0 && (
              <button
                className="btn"
                type="button"
                onClick={e => {
                  removeAdditionalItem(e, "additionalItem", index);
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
                addAdditionalItem(e, "additionalItem");
              }}
            >
              <i className="fas fa-plus-square" />
            </button>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-xs-12">
            <textarea
              className="form-control"
              id={`additionalItem-description_${index}`}
              value={additionalItems[index].description}
              placeholder="(Any follow-up investigations, additional information, persons contacted, arrests made, etc.)"
              onChange={e => handleFormInput(e)}
            />
          </div>
        </div>
      </div>
    );
  });
};
