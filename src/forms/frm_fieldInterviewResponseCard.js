import React from "react";
var moment = require("moment");

export const generateFieldInterviewResponseCard = params => {
  let frmString = `[b]DATE[/b] ${moment(params.date).format("DD/MMM/YYYY")}
[b]TIME[/b] ${params.time}
[b]LOCATION[/b] ${params.location}

[b]NARRATIVE:[/b] ${params.narrative}`;
  return frmString;
};

export const generateFieldInterviewResponseCardTitle = params => {
  return "not needed";
};
