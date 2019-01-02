import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { UserContextConsumer } from "../../UserContext.js";
import { ForumPostLinkButtons } from "./forum_post_link_buttons";
import { copySuccessToast } from "../pop-ups/pop_ups";
import "./bbCode.css";
class BBCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copyText: null,
      copyTitle: null
    };
    this.getText = this.getText.bind(this);
  }

  getText(textType, generateFunction, state) {
    const user = this.context;
    let bbCodeText = generateFunction(state, user);
    this.setState({ [textType]: bbCodeText });
  }
  copyToClipboard(e, copyTarget) {
    const copyEl = document.getElementById(copyTarget);
    copyEl.select();
    document.execCommand("copy");
    copySuccessToast();
  }
  componentDidUpdate() {
    let allTextAreas = document.querySelectorAll("textarea");
    allTextAreas.forEach(textArea => {
      textArea.style.height = "5px";
      textArea.style.height = textArea.scrollHeight + "px";
    });
  }
  render() {
    const {
      generateTitleFunction,
      generateBodyFunction,
      state,
      forumPostLinks
    } = this.props;
    return (
      <UserContextConsumer>
        {({ user }) => {
          this.context = user;
          return (
            <div className="form-row">
              <button
                type="button"
                className="btn btn-default form-control"
                onClick={e => {
                  this.getText("copyTitle", generateTitleFunction, state);
                  this.getText("copyText", generateBodyFunction, state);
                }}
              >
                Generate BB Code
              </button>

              <div className="form-row">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="copyTitle"
                    readOnly={true}
                    value={this.state.copyTitle}
                  />
                  <div
                    className="input-group-addon clipboard-button"
                    onClick={e => this.copyToClipboard(e, "copyTitle")}
                  >
                    <i className="far fa-clipboard" />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="input-group form-group">
                  <textarea
                    className="form-control"
                    readOnly={true}
                    id="copyText"
                    value={this.state.copyText}
                  />
                  <div
                    className="input-group-addon clipboard-button"
                    onClick={e => this.copyToClipboard(e, "copyText")}
                  >
                    <i className="far fa-clipboard" />
                  </div>
                </div>
              </div>
              {forumPostLinks != null && (
                <ForumPostLinkButtons forumPostLinks={forumPostLinks} />
              )}
            </div>
          );
        }}
      </UserContextConsumer>
    );
  }
}

export default BBCode;
