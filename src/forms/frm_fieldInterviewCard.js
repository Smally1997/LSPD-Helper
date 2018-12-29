import React from "react";
export const generateFieldInterviewCard = params => {
  let frmString = `[img]${params.imgUrl}[/img]
[b]NAME[/b] ${params.firstName} ${params.lastName}
[b]ALIAS/MONIKER[/b] ${params.alias}
[b]ADDR[/b] ${params.address}
[b]CITY[/b] ${params.city}
[b]SEX[/b] ${params.sex}
[b]AGE[/b] ${params.age}
[b]RACE[/b] ${params.race}
[b]DESC[/b] ${params.desc}
[b]PHONE[/b] ${params.phone}

[b]VEH[/b] ${params.veh}
[b]COLOR[/b] ${params.vehColor}
[b]LIC. NO.[/b] ${params.vehLicenseNo}

[b]GANG[/b] ${params.gang}
[b]SUBSET[/b] ${params.subset}
[b]TYPE[/b] ${params.type} `;
  return frmString;
};

export const generateFieldInterviewCardTitle = params => {
  return `${params.firstName} ${params.lastName}`;
};
