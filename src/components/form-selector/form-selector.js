import React, { Component } from "react";
import "./form-selector.css";

function highlightFormLink(e) {
  let currentActiveFormLink = document.querySelector(".activeFormLink");
  if (currentActiveFormLink != null) {
    currentActiveFormLink.classList.remove("activeFormLink");
  }
  e.target.classList.toggle("activeFormLink");
}
const FormBox = ({ form }) => {
  return <div className="form-box" />;
};

const FormLink = ({ text, id, changeActiveForm, disabled }) => {
  return (
    <button
      type="button"
      className={disabled ? "btn btn-default disabled" : "btn btn-default"}
      onClick={
        disabled
          ? null
          : e => {
              changeActiveForm(e, id);
              highlightFormLink(e);
            }
      }
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
            disabled={form.disabled}
          />
        );
      })}
      <FormBox />
    </div>
  );
};

export default FormSelector;
