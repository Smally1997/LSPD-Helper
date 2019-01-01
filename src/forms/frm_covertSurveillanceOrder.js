import React from "react";
var moment = require("moment");

export const generateCovertSurveillanceOrder = (params, userContext) => {
  const surveillancePropertyString = surveillanceProperties => {
    let str = ``;
    surveillanceProperties.forEach(property => {
      str += `[*]${property.propertyDescription}`;
    });
    return str;
  };
  const peopleOrPersonString = peopleOrPersons => {
    let str = ``;
    peopleOrPersons.forEach(peopleOrPerson => {
      str += `[*]${peopleOrPerson.peopleOrPerson}`;
    });
    return str;
  };
  const chargeString = charges => {
    let str = ``;
    charges.forEach(charge => {
      str += `[*][b]${charge.counts}x ${charge.chargeName}[/b]`;
    });
    return str;
  };
  const factString = facts => {
    let str = ``;
    facts.forEach(statement => {
      str += `[*]${statement.fact}`;
    });
    return str;
  };
  let frmString = `[divbox=white][color=white][SPACER][/color]


[center][img]http://i.imgur.com/owS29PR.png[/img]
[color=#000000][b][u][size=150] APPLICATION & AFFIDAVIT IN SUPPORT OF A COVERT SURVEILLANCE ORDER[/size]
THE STATE OF SAN ANDREAS[/u][/b][/color]

[i]The below details are sworn testimony in support of an application for a covert surveillance order and should any affiant sign an affidavit that later transpires to be untruthful then that person will be guilty of committing the offence of Perjury.[/i][/center]


[list]I, ${userContext.firstName} ${
    userContext.lastName
  } , being duly sworn, say that I am a Police ${
    userContext.rank
  } and that I have probable cause to suspect that on the properties or premises at:

[list]
${surveillancePropertyString(params.surveillanceProperties)}
[/list]

In the City of Los Santos, San Andreas, there are people or persons:
[list]
${peopleOrPersonString(params.peopleOrPersons)}
[/list]

who are, engaging in discussions concerning a future, engaging in discussions concerning a past or conspiring to perform a, violation of San Andreas Penal Code title(s):
${chargeString(params.charges)}.

The statement of facts to support a finding of probable cause are as follows:

[list]
${factString(params.facts)}
[/list][/list]

[hr][/hr]

[list]Sworn on ${moment(params.date)
    .format("DD/MMM/YY")
    .toUpperCase()} by the undersigned at Los Santos Police Department, Pershing Square, San Andreas.[/list]

[aligntable=left,0,78,0,0,0,#FFFFFF][center][b][u]Name of Affiant[/u][/b]
${userContext.firstName} ${
    userContext.lastName
  }[/center][/aligntable][aligntable=right,0,0,50,0,0,#FFFFFF][center][b][u]Signature of Affiant:[/u][/b]
${userContext.signature}[/center][/aligntable]

[color=white][SPACER][/color]
[color=white][SPACER][/color]
[color=white][SPACER][/color][/divbox]`;
  return frmString;
};

export const generateCovertSurveillanceOrderTitle = (params, userContext) => {
  return `[${params.affDivision}] [${moment(params.date)
    .format("DD/MMM/YYYY")
    .toUpperCase()}] [${[
    userContext.firstName.substring(0, 1)
  ]}${userContext.lastName.substring(0, 1)}] CSO`;
};
