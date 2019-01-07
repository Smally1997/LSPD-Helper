import React from "react";
var moment = require("moment");
const crimeString = charges => {
  let str = ``;
  charges.forEach(charge => {
    if (charge.chargeName != null) {
      if (charges.indexOf(charge) + 1 == charges.length) {
        str += `${charge.counts}x ${charge.chargeName} `;
      } else {
        str += `${charge.counts}x ${charge.chargeName}, `;
      }
    }
  });
  return str;
};

const victimsString = victims => {
  let str = ``;
  victims.forEach(victim => {
    str += `[size=85][b]NAME (OR BUSINESS)[/b][/size] ${victim.firstName ||
      ""} ${victim.lastName || ""}
[size=85][b]ALIAS[/b][/size] ${victim.alias || ""}
[size=85][b]SEX[/b][/size] ${victim.sex || ""}
[size=85][b]RACE[/b][/size] ${victim.race || ""}
[size=85][b]AGE[/b][/size] ${victim.age || ""}
[size=85][b]HOME ADDRESS[/b][/size] ${victim.address || ""}
[size=85][b]MARITAL STATUS[/b][/size] ${victim.maritalStatus || ""} 

`;
  });
  return str;
};

const suspectVehiclesString = suspectVehicles => {
  let str = ``;
  suspectVehicles.forEach(vehicle => {
    str += `[size=85][b]MAKE & MODEL[/b][/size] ${vehicle.makeModel || ""}
[size=85][b]TYPE[/b][/size] ${vehicle.type || ""}
[size=85][b]COLOR(S)[/b][/size] ${vehicle.color || ""}
[size=85][b]LIC. NO.[/b][/size] ${vehicle.index || ""}
[size=85][b]DESC[/b][/size] ${vehicle.description || ""}

`;
  });
  return str;
};

const suspectsString = suspects => {
  let str = ``;
  suspects.forEach(suspect => {
    str += `[b]S-${suspects.indexOf(suspect) + 1}[/b]
[size=85][b]NAME[/b][/size] ${suspect.firstName || ""} ${suspect.lastName || ""}
[size=85][b]SEX[/b][/size] ${suspect.sex || ""}
[size=85][b]RACE[/b][/size] ${suspect.race || ""}
[size=85][b]AGE[/b][/size] ${suspect.age || ""}
[size=85][b]DESC[/b][/size] ${suspect.description || ""}
[size=85][b]CLOTHING[/b][/size] ${suspect.clothing || ""}
[size=85][b]WEAPON[/b][/size] ${suspect.weapon || ""}
[size=85][b]KNOWN INFO[/b][/size] ${suspect.knownInfo || ""}
[size=85][b]SOURCE OF INFORMATION[/b][/size] ${suspect.infoSource || ""}

`;
  });
  return str;
};

const involvedPersonsString = involvedPersons => {
  let str = ``;
  involvedPersons.forEach(person => {
    str += `[size=85][b]TYPE[/b][/size] ${person.type || ""}
[size=85][b]NAME[/b][/size] ${person.firstName || ""} ${person.lastName || ""}
[size=85][b]SEX[/b][/size] ${person.sex || ""}
[size=85][b]RACE[/b][/size] ${person.race || ""}
[size=85][b]PHONE[/b][/size] ${person.phone || ""}

`;
  });
  return str;
};

const photographsString = photographs => {
  let str = ``;
  photographs.forEach(photo => {
    if (photo.description)
      str += `${photographs.indexOf(photo) + 1}) ${photo.description}
    `;
  });
  return str;
};

const evidenceString = evidence => {
  let str = ``;
  evidence.forEach(exhibit => {
    if (exhibit.description != null)
      str += `[altspoiler=EXHIBIT #${evidence.indexOf(exhibit) + 1}]${
        exhibit.description
      }[/altspoiler]`;
  });
  return str;
};

const additionalsString = additionals => {
  let str = ``;
  additionals.forEach(additional => {
    if (additional.description != null) str += `[*]${additional.description}`;
  });
  return str;
};

export const generateInvestigativeReport = (params, userContext) => {
  return `[center][b][size=90]Los Santos Police Department[/size]
[size=110]INVESTIGATIVE REPORT[/size][/b][/center][size=85][b]REPORT OF[/b][/size] ${crimeString(
    params.charges
  )}
[size=85][b]IR #[/b][/size] Topic ID
[size=85][b]FIRST RESPONDER[/b][/size] ${userContext.lastName ||
    ""} (${userContext.serial || ""})
[size=85][b]INV. DIVISION[/b][/size]
[size=85][b]I/O[/b][/size]

[size=85][b]LOCATION OF OCCURRENCE[/b][/size] ${params.location || ""}
[size=85][b]TYPE OF PREMISES[/b][/size] ${params.premisesType || ""}
[size=85][b]DATE & TIME OF OCCURRENCE[/b][/size] ${moment(params.date).format(
    "MM-DD-YY"
  )} ${params.time || ""}
[size=85][b]PROPERTY STOLEN/DAMAGED[/b][/size] ${params.propertyStolenDamaged ||
    ""}
[size=85][b]EST. VALUE OF PROPERTY[/b][/size] ${params.estValueOfProperty || ""}

[u][b][size=90]REPORTING EMPLOYEE(S)[/size][/b]___________________________________________________________________[/u]
[size=85][b]LAST NAME[/b][/size] ${userContext.lastName || ""}
[size=85][b]SERIAL NO.[/b][/size] ${userContext.serial || ""}
[size=85][b]DIVISION[/b][/size] ${userContext.division || ""}
[size=85][b]UNIT[/b][/size] ${params.affUnit || ""}

[u][b][size=90]MO[/size][/b]_____________________________________________________________________________________[/u]
[size=85]DESCRIBE THE SUSPECT'S ACTIONS IN BRIEF PHRASES, INCLUDING WEAPON USED.[/size]

[list=none]${params.modusOperandi || ""}[/list]

[u][b][size=90]VICTIM[/size][/b]__________________________________________________________________________________[/u]
${victimsString(params.victims)}
[u][b][size=90]SUSPECT(S)[/size][/b]______________________________________________________________________________[/u]
${suspectVehiclesString(params.suspectVehicles)}
${suspectsString(params.suspects)}
[u][b][size=90]INVOLVED PERSON(S)[/size][/b]______________________________________________________________________[/u]
${involvedPersonsString(params.involvedPersons)}
[u][b][size=90]CASE SCREENING FACTOR(S)[/size][/b]________________________________________________________________[/u]
[size=85][b]WEAPONS FOUND[/b][/size] ${params.caseScrWeapons || ""}
[size=85][b]NARCOTICS FOUND[/b][/size] ${params.caseScrNarcotics || ""}

[u][b][size=90]NARRATIVE[/size][/b]______________________________________________________________________________[/u]
[size=85]USE THE FOLLOWING HEADINGS TO DOCUMENT ALL INFORMATION REGARDING THE INVESTIGATION. NOTE: ANY OF THESE HEADINGS MAY BE OMITTED IF NOT APPLICABLE. [/size]

[list=none][b][u]Source of Activity[/u][/b]
${params.narrative.sourceOfActivity || ""}

[b][u]Investigation[/u][/b]
${params.narrative.investigation || ""}

[b][u]Injuries/Medical Treatment[/u][/b]
${params.narrative.injuriesMedicalTreatment || ""}

[b][u]Photographs[/u][/b]
${photographsString(params.narrative.photographs)}

[b][u]Evidence[/u][/b]
${evidenceString(params.narrative.evidence)}

[b][u]Additional[/u][/b]
[list]
${additionalsString(params.narrative.additional)}
[/list]

[u][b][size=90]APPROVAL AND REVIEW[/size][/b]___________________________________________________________________[/u]

[b]DETECTIVE SUPERVISOR APPROVING SERIAL NO. DIVISION[/b]
[aligntable=right,0,0,0,0,0,transparent][b]DETECTIVE INSTRUCTOR APPROVING SERIAL NO. DIVISION[/b]

[table][tr][td]Full name of Det Instructor[/td]
[td]#[/td]
[td]Div[/td]
[/tr]
[/table][/aligntable]



[table][tr][td]Full name Name of Det Supervisor[/td]
[td]#[/td]
[td]Div[/td]
[/tr]
[/table]
[color=#FFFFFF][size=50].
.[/size][/color][/list]
  `;
};

export const generateInvestigativeReportTitle = params => {
  return `Investigative Report #`;
};
