import React from "react";
var moment = require("moment");

export const generatePatrolObservationReport = params => {
  return `[center][b][size=90]Los Santos Police Department[/size]
[size=110]PATROL OBSERVATION REPORT[/size][/b][/center]
[size=85][b]DATE OF PATROL:[/b][/size] ${moment(params.date)
    .format("DD/MMM/YYYY")
    .toUpperCase() || ""}
[size=85][b]PHASE:[/b][/size] ${params.phase || ""}

[aligntable=left,0,0,20,0,0,0][b]N/I[/b] - Needs Improvement[/aligntable][aligntable=left,0,0,20,0,0,0][b]C[/b] - Competent[/aligntable][aligntable=left,0,0,20,0,0,0][b]S[/b] - Superior[/aligntable][aligntable=left,0,0,20,0,0,0][b]N/O[/b] - Not Observed[/aligntable]



[b]BEHAVIOR[/b]

1. Acceptance of Feedback
[b]RATING:[/b] ${params.acceptanceOfFeedback_rating}
[b]TRN:[/b] ${params.acceptanceOfFeedback_TRN || ""}

2. Relationship with Citizens 
[b]RATING:[/b] ${params.relationshipWithCitizens_rating}
[b]TRN:[/b] ${params.relationshipWithCitizens_TRN || ""}

3. Appearance 
[b]RATING:[/b] ${params.generalAppearence_rating}
[b]TRN:[/b] ${params.generalAppearence_TRN || ""}

[color=transparent]________________________________________________________________________________[/color]
[b]PERFORMANCE[/b]

4. Driving Skill 
[b]RATING:[/b] ${params.drivingSkill_rating}
[b]TRN:[/b] ${params.drivingSkill_TRN || ""}

5. Field Performance
[b]RATING:[/b] ${params.fieldPerformance_rating}
[b]TRN:[/b] ${params.fieldPerformance_TRN || ""}

6. Investigative Skills
[b]RATING:[/b] ${params.investigativeSkills_rating}
[b]TRN:[/b] ${params.investigativeSkills_TRN || ""}

7. Interview Skills
[b]RATING:[/b] ${params.interviewSkills_rating}
[b]TRN:[/b] ${params.interviewSkills_TRN || ""}

8. Officer Safety
[b]RATING:[/b] ${params.officerSafety_rating}
[b]TRN:[/b] ${params.officerSafety_TRN || ""}

9. Self-Initiated Field Activity
[b]RATING:[/b] ${params.selfInitiatedFieldActivity_rating}
[b]TRN:[/b] ${params.selfInitiatedFieldActivity_TRN || ""}

10. Problem Solving
[b]RATING:[/b] ${params.decisionMakingProblemSolving_rating}
[b]TRN:[/b] ${params.decisionMakingProblemSolving_TRN || ""}

11. Vehicle/Pedestrian Stops
[b]RATING:[/b] ${params.vehiclePedestrianStops_rating}
[b]TRN:[/b] ${params.vehiclePedestrianStops_TRN || ""}

12. Radio Communication 
[b]RATING:[/b] ${params.radioCommunications_rating}
[b]TRN:[/b] ${params.radioCommunications_TRN || ""}
[color=transparent]________________________________________________________________________________[/color]
[b]KNOWLEDGE[/b]

13. Department Policy
[b]RATING:[/b] ${params.departmentPolicy_rating}
[b]TRN:[/b] ${params.departmentPolicy_TRN || ""}

14. Criminal Law
[b]RATING:[/b] ${params.criminalLaw_rating}
[b]TRN:[/b] ${params.criminalLaw_TRN || ""}

15. Criminal Procedure
[b]RATING:[/b] ${params.criminalProcedure_rating}
[b]TRN:[/b] ${params.criminalProcedure_TRN || ""}
[color=transparent]________________________________________________________________________________[/color]

[b]NOTEWORTHY INCIDENTS:[/b] (Check all boxes that apply. Leave blank if no boxes apply.)
[${params.vehicleStop ? "X" : "-"}] Vehicle Stop(s)
[${params.highRiskStop ? "X" : "-"}] High Risk Stop(s)
[${params.vehiclePursuit ? "X" : "-"}] Vehicle Pursuit(s)
[${params.footPursuit ? "X" : "-"}] Foot Pursuit(s)
[${
    params.largeScaleSituation ? "X" : "-"
  }] Large-scale Situation(s) (e.g barricaded suspects, hostage situation, etc.)

[b]COMMENTS:[/b]
${params.comments || ""}

[list][/list]`;
};

export const generatePatrolObservationReportTitle = params => {
  return `[${moment(params.date)
    .format("DD/MMM/YYYY")
    .toUpperCase()}] ${params.probFirstName || ""} ${params.probLastName ||
    ""} (${params.phase || ""})`;
};
