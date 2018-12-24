export const generateArrestWarrant = (params, userContext) => {
  const chargeString = charges => {
    let str = ``;
    charges.forEach(charge => {
      str += `[*]${charge.counts}x ${charge.chargeName}`;
    });
    return str;
  };
  const evidenceString = evidence => {
    let str = ``;
    evidence.forEach(exhibit => {
      str += `[altspoiler=EXHIBIT #${evidence.indexOf(exhibit) + 1}]${
        exhibit.description
      }[/altspoiler]`;
    });
    return str;
  };
  let frmString = `[divbox=white]⠀
[center][img]http://i.imgur.com/I81A1Uo.png[/img] [img]https://i.imgur.com/fHcUHG4.png[/img]

[size=120][b]Los Santos Police Department[/b][/size]
[size=110][b]Affidavit for Warrant of Arrest[/b][/size]
[u]_____________________________________[/u][/center]

[u][b]Affiant Details[/b][/u]
[list=none][b]Full Name:[/b] ${userContext.firstName} ${userContext.lastName}
[b]Serial Number:[/b] #${userContext.serial}
[b]Department Rank:[/b] ${userContext.rank}
[/list]


[hr][/hr]
[u][b]Suspect Details[/b][/u]
[list=none][b]Full Name:[/b] ${params.susFirstName} ${params.susLastName}
[b]Gender:[/b] ${params.susGender}
[b]Phone Number:[/b] ${params.susPhone}
[/list]


[hr][/hr]
[u][b]Narrative[/b][/u]
[list=none][b]Date and Time:[/b] ${params.date} - ${params.time}
[b]Location:[/b] ${params.location}
[b]Details:[/b] [list=none][b]I, ${userContext.firstName} ${
    userContext.lastName
  }, being ﬁrst duly sworn, depose and state as follows:[/b]
${params.details}[/list]

[b]Charges:[/b][list]
${chargeString(params.charges)}
[/list]
[b]Evidence:[/b][list]
${evidenceString(params.evidence)}
[/list]

[b]Signature:[/b] ${userContext.signature}
[/divbox]`;
  return frmString;
};

export const generateArrestWarrantTitle = (params, userContext) => {
  return `[${params.warrantType}] ${params.susFirstName} ${
    params.susLastName
  } [AFFIDAVIT]`;
};
