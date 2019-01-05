import React from "react";
import { nextChar } from "../scripts/nextChar.js";
var moment = require("moment");

function getIncidentValue(incidents, searchID) {
  let result = null;
  if (searchID == "other") {
    incidents.forEach(incident => {
      if (incident.id == searchID) {
        result = incident.value;
      }
    });
    return result;
  } else {
    incidents.forEach(incident => {
      if (incident.id == searchID) {
        result = incident.value;
      }
    });
    if (result) {
      return "X";
    } else {
      return "-";
    }
  }
}

function getCheckboxValue(items, searchID) {
  let result = null;
  items.forEach(item => {
    if (item.id == searchID) {
      result = item.value;
    }
  });
  if (result) {
    return "X";
  } else {
    return "-";
  }
}

const reportsString = reports => {
  let returnString = ``;
  reports.forEach(report => {
    if (report.type != null)
      returnString += `[url=${report.link}]${report.type}[/url] `;
  });
  return returnString;
};

const generateActivities = activities => {
  let returnString = ``;
  activities.forEach(activity => {
    returnString += generateActivity(activity, activities.indexOf(activity));
  });
  return returnString;
};
const generateActivity = (activity, index) => {
  const { incidents, dispositions, reports, howReceived, narrative } = activity;

  return `[size=150][b]${nextChar(index)}[/b][/size]
[size=85][b]START TIME:[/b] ${activity.startTime || ""}
[b]END TIME:[/b] ${activity.endTime || ""}
[b]LOCATION:[/b] ${activity.location || ""}
[b]INCIDENT[/b][/size]
[table][tr][td][${getIncidentValue(incidents, "trespassing")}] Trespassing[/td]
[td][${getIncidentValue(incidents, "disturbance")}] Disturbance [/td]
[td][${getIncidentValue(incidents, "adw")}] ADW[/td]
[td][${getIncidentValue(incidents, "checkArea")}] Check Area[/td][/tr]
[tr][td][${getIncidentValue(incidents, "burglary")}] Burglary[/td]
[td][${getIncidentValue(incidents, "publicAssist")}] Public Assist[/td]
[td][${getIncidentValue(incidents, "civFlagDown")}] Civilian Flag-Down[/td]
[td][${getIncidentValue(
    incidents,
    "suspiciousActivity"
  )}] Suspicious Activity[/td][/tr]
[tr][td][${getIncidentValue(incidents, "fight")}] Fight[/td]
[td][${getIncidentValue(incidents, "trafficStop")}] Traffic Stop[/td]
[td][${getIncidentValue(incidents, "highRiskStop")}] High-Risk Stop[/td]
[td][${getIncidentValue(incidents, "vehicleAlarm")}] Vehicle Alarm[/td][/tr]
[tr][td][${getIncidentValue(incidents, "motoristAssist")}] Motorist Assist[/td]
[td][${getIncidentValue(
    incidents,
    "medCallPDRequested"
  )}] Medical Call PD requested[/td]
[td][${getIncidentValue(incidents, "mvaNonInjury")}] MVA Non-Injury[/td]
[td][${getIncidentValue(incidents, "mvaInjury")}] MVA With Injuries[/td][/tr]
[tr][td][${getIncidentValue(
    incidents,
    "openDoorPremisesCheck"
  )}] Open Door Premises Check[/td]
[td][${getIncidentValue(incidents, "escortTransport")}] Escort Transport[/td]
[td][${getIncidentValue(
    incidents,
    "unconscousFainting"
  )}] Unconscious/Fainting[/td]
[td][${getIncidentValue(incidents, "foundItem")}] Found Item[/td][/tr]
[tr][td][${getIncidentValue(incidents, "vehiclePursuit")}] Vehicle Pursuit[/td]
[td][${getIncidentValue(incidents, "footPursuit")}] Foot Pursuit[/td]
[td][${getIncidentValue(incidents, "injuredPerson")}] Injured Person[/td]
[td][${getIncidentValue(incidents, "mutualAid")}] Mutual Aid[/td][/tr]
[tr][td][${getIncidentValue(
    incidents,
    "recklessDriving"
  )}] Reckless Driving[/td]
[td][${getIncidentValue(incidents, "sickPerson")}] Sick Person[/td]
[td][${getIncidentValue(incidents, "footPatrol")}] Foot Patrol[/td]
[td][${getIncidentValue(
    incidents,
    "ninerNatureUnknown"
  )}] 911 Call Nature Unknown[/td][/tr]
[tr][td][${getIncidentValue(incidents, "followUp")}] Follow Up[/td]
[td][${getIncidentValue(incidents, "assault")}] Assault[/td]
[td][${getIncidentValue(incidents, "shotsHeard")}] Shots Heard[/td]
[td][${
    getIncidentValue(incidents, "other") != null &&
    getIncidentValue(incidents, "other") != ""
      ? "X"
      : "-"
  }] ${getIncidentValue(incidents, "other") ||
    "Other (Specify)"}[/td][/tr][/table]

[size=85][b]SUPERVISOR AT SCENE:[/b] ${activity.supervisorRank ||
    ""} ${activity.supervisorName || ""}
[b]DISPOSITION[/b][/size]
[table][tr][td][${getCheckboxValue(dispositions, "adv")}] ADV (Advised)[/td]
[td][${getCheckboxValue(dispositions, "arr")}] ARR (Arrest)[/td]
[td][${getCheckboxValue(dispositions, "cit")}] CIT (Citation)[/td][/tr]
[tr][td][${getCheckboxValue(dispositions, "goa")}] GOA (Gone on arrival)[/td]
[td][${getCheckboxValue(
    dispositions,
    "qnr"
  )}] QNR (Questioned and Released)[/td]
[td][${getCheckboxValue(dispositions, "wrn")}] WRN (Warned)[/td][/tr]
[tr][td][${getCheckboxValue(dispositions, "rpt")}] RPT (Report)[/td]
[td][${getCheckboxValue(dispositions, "inf")}] INF (Information)[/td]
[td][${getCheckboxValue(dispositions, "oth")}] OTH (Other)[/td][/tr][/table]

[size=85][b]HOW RECEIVED:[/b][/size]
[table][tr][td][${getCheckboxValue(howReceived, "dispatch")}] Dispatch[/td]
[td][${getCheckboxValue(howReceived, "callForService")}] Call for Service[/td]
[td][${getCheckboxValue(howReceived, "civWalkUp")}] Civilian Walk-Up[/td]
[td][${getCheckboxValue(howReceived, "radioCall")}] Radio Call[/td]
[td][${getCheckboxValue(
    howReceived,
    "personalObservation"
  )}] Personal Observation[/td][/tr][/table]

[size=85][b]REPORTS:[/b]
${reportsString(reports)}

[b]NARRATIVE:[/b][/size]
[list=none]${narrative || ""}[/list]

`;
};

export const generateDailyFieldActivitiesReport = (params, userContext) => {
  return `[divbox=white][color=#FFFFFF].[/color]
[center][img]http://i.imgur.com/I81A1Uo.png[/img]

[size=125]LOS SANTOS POLICE DEPARTMENT[/size]
[size=150][b]DAILY FIELD ACTIVITIES REPORT[/b][/size][/center]

[hr][/hr]
[list=none][u][b][size=90]REPORTING EMPLOYEE[/size][/b]_____________________________________________________________________________[/u]
[size=85][b]LAST NAME[/b] ${userContext.lastName}
[b]SERIAL NO.[/b] ${userContext.serial}
[b]DATE:[/b] ${moment(params.date)
    .format("DD/MMM/YYYY")
    .toUpperCase() || ""}
[b]ON DUTY:[/b] ${params.startTime || ""}
[b]OFF DUTY:[/b] ${params.endTime || ""}
[b]DIVISION:[/b] ${userContext.division}
[b]CALL SIGN:[/b] ${params.callSign || ""}[/size]

[u][b][size=90]ACTIVITIES[/size][/b]____________________________________________________________________________[/u]
${generateActivities(params.activities)}



[u][b][size=90]LOGS[/size][/b]________________________________________________________________________________[/u]
[size=85][b]TOTAL CALLS FOR SERVICE:[/b] ${params.callsForService || ""}
[b]TRAFFIC STOPS MADE:[/b] ${params.trafficStops || ""}
[b]CITATIONS ISSUED:[/b] ${params.citationsIssued || ""}
[b]WARNINGS ISSUED:[/b] ${params.warningsIssued || ""}
[b]FELONY ARRESTS MADE:[/b] ${params.felonyArrests || ""}
[b]MISDEMEANOR ARRESTS MADE:[/b] ${params.misdemeanorArrests || ""}
[/size]`;
};

export const generateDailyFieldActivitiesReportTitle = () => {
  return `Created by hand in topic's original post`;
};
