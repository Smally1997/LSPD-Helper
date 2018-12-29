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

const FormLink = ({ text, id, changeActiveForm }) => {
  return (
    <button
      type="button"
      className="btn btn-default"
      onClick={e => {
        changeActiveForm(e, id);
        highlightFormLink(e);
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
