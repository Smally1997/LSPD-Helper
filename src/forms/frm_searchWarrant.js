import React from "react";
var moment = require("moment");

export const generateSearchWarrant = (params, userContext) => {
  const searchPropertyString = searchProperties => {
    let str = ``;
    searchProperties.forEach(property => {
      if (property.searchPropertyDescription != null)
        str += `[*]${property.searchPropertyDescription}`;
    });
    return str;
  };
  const concealedPropertyString = concealedProperties => {
    let str = ``;
    concealedProperties.forEach(property => {
      if (property.concealedPropertyDescription != null)
        str += `[*]${property.concealedPropertyDescription}`;
    });
    return str;
  };
  const chargeString = charges => {
    let str = ``;
    charges.forEach(charge => {
      if (charge.chargeName != null)
        str += `[*][b]${charge.counts}x ${charge.chargeName}[/b]`;
    });
    return str;
  };
  const factString = facts => {
    let str = ``;
    facts.forEach(statement => {
      if (statement.fact != null) str += `[*]${statement.fact}`;
    });
    return str;
  };
  let frmString = `[divbox=white][color=white][SPACER][/color]


[center][img]http://i.imgur.com/owS29PR.png[/img]
[color=#000000][b][u][size=150] APPLICATION & AFFIDAVIT IN SUPPORT OF A SEARCH WARRANT.[/size]
THE STATE OF SAN ANDREAS[/u][/b][/color]

[i]The below details are sworn testimony in support of an application for a search warrant and should any affiant sign an affidavit that later transpires to be untruthful then that person will be guilty of committing the offence of Perjury.[/i][/center]


[list]I, ${userContext.firstName} ${
    userContext.lastName
  } , being duly sworn, say that I am a Police ${
    userContext.rank
  } and that I have probable cause to suspect that on the properties or premises at:

[list]${searchPropertyString(params.searchProperties)}[/list]

In the City of Los Santos, San Andreas, there is now concealed a certain property or properties:
[list]
${concealedPropertyString(params.concealedProperties)}
[/list]

which is, EVIDENCE, CONTRABAND, FRUITS, AND INSTRUMENTALITIES concerning a violation of San Andreas Penal Code title(s):
[list]
${chargeString(params.charges)}
[/list]

The statement of facts to support a finding of probable cause are as follows:

[list]
${factString(params.facts)}
[/list][/list]

[hr][/hr]

[list]Sworn on ${moment(params.date)
    .format("DD/MMM/YYYY")
    .toUpperCase()} by the undersigned at Los Santos Police Department, Pershing Square, San Andreas.[/list]

[aligntable=left,0,78,0,0,0,#FFFFFF][center][b][u]Name of Affiant[/u][/b]
${userContext.firstName} ${
    userContext.lastName
  }[/center][/aligntable][aligntable=right,0,0,50,0,0,#FFFFFF][center][b][u]Signature of Affiant:[/u][/b]
${
    userContext.signatureType == "text"
      ? userContext.signature
      : `[img]${userContext.signature}[/img]`
  }[/center][/aligntable]

[color=white][SPACER][/color]
[color=white][SPACER][/color]
[color=white][SPACER][/color][/divbox]`;
  return frmString;
};

export const generateSearchWarrantTitle = (params, userContext) => {
  return `[${userContext.divisionAbbreviation || ""}] [${moment(params.date)
    .format("DD/MMM/YYYY")
    .toUpperCase()}] [${[
    userContext.firstName.substring(0, 1)
  ]}${userContext.lastName.substring(0, 1)}] Warrant`;
};
