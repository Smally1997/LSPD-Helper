import React from "react";
import { PenalCode } from "./penal_code.js";
import Autocomplete from "react-autocomplete";

export const SearchPenalCode = ({ id, value, handleFormInput }) => {
  return (
    <Autocomplete
      getItemValue={item => item.charge}
      items={PenalCode}
      inputProps={{
        id: [id],
        className: "form-control",
        type: "text",
        placeholder: "Evading A Peace Officer"
      }}
      wrapperStyle={{ display: "block" }}
      menuStyle={{
        position: "relative",
        borderRadius: "3px",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
        background: "rgba(255, 255, 255, 0.9)",
        // padding: "2px 0",
        fontSize: "90%",
        overflowX: "hidden",
        overflowY: "scroll",
        maxHeight: "9rem",
        top: "0",
        left: "0",
        width: "100%"
      }}
      selectOnBlur={true}
      shouldItemRender={(item, value) =>
        item.charge.toLowerCase().indexOf(value.toLowerCase()) > -1
      }
      renderItem={(item, isHighlighted) => (
        <div
          key={item.charge}
          style={{ background: isHighlighted ? "lightgray" : "white" }}
          className="autocomplete-item"
        >
          {item.charge}
        </div>
      )}
      value={value}
      onChange={e => handleFormInput(e)}
      onSelect={e => {
        let eObj = { target: {} };
        eObj.target.id = id;
        eObj.target.value = e;
        handleFormInput(eObj);
      }}
    />
  );
};
