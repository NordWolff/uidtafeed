import {IncidentseverityModel} from './incidentseverity/incidentseverity-model';

export class FeedbackModel {
  constructor(
    public LINE_ID: string ,
    public FREE_TEXT: string,
    public INCIDENT_SEVERITY: IncidentseverityModel[],
    public RESOLVED_CI: string,
    public INCIDENT_TYPE: string,
    public ATTR: string,
    public KNOWN_ERROR: string


  ) {
  }
}
