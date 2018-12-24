import React, { Component } from "react";
import "./form-selector.css";
const FormBox = ({ form }) => {
  return <div className="form-box" />;
};

const FormLink = ({ text, id, changeActiveForm }) => {
  return (
    <button
      type="button"
      className="btn btn-default"
      onClick={e => {
        changeActiveForm(e, id);
      }}
    >
      {text}
    </button>
  );
};

const FormSelector = ({ pageForms, changeActiveForm }) => {
  return (
    <div className="btn-group form-selector" role="group" aria-label="...">
      {pageForms.map(form => {
        return (
          <FormLink
            text={form.text}
            id={form.id}
            changeActiveForm={changeActiveForm}
            key={form.id}
          />
        );
      })}
      <FormBox />
    </div>
  );
};

export default FormSelector;
