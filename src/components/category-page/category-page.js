import React, { Component } from "react";
import FormSelector from "../form-selector/form-selector";
import "./category-page.css";
class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageForms: null
    };
  }

  render() {
    const { pageTitle, pageForms, changeActiveForm } = this.props;
    return (
      <div id="page">
        <h1 className="header">{pageTitle}</h1>
        {pageForms != null && changeActiveForm != null && (
          <FormSelector
            pageForms={pageForms}
            changeActiveForm={changeActiveForm}
          />
        )}
      </div>
    );
  }
}

export default CategoryPage;
