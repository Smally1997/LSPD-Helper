import React from "react";
import "./bbCode.css";
const ForumPostLink = ({ link, linkText }) => {
  return (
    <a
      type="button"
      className="btn btn-default form-control"
      href={link}
      target="_blank"
    >
      {linkText}
    </a>
  );
};
export const ForumPostLinkButtons = ({ forumPostLinks }) => {
  return (
    <div className="forum-post-link-buttons form-group">
      {forumPostLinks.map(linkItem => {
        return (
          <div
            key={linkItem.linkText}
            className="forum-post-link-button-wrapper"
          >
            <ForumPostLink link={linkItem.link} linkText={linkItem.linkText} />
          </div>
        );
      })}
    </div>
  );
};
