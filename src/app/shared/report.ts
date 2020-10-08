import {DoneStatus} from './done-status.enum';

export interface Report {
  line_id: string;
  free_text?: string;
  incident_severity: string;
  resolved_ci: string;
  incident_type: string;
  attr: string;
  known_error: string;
  published: Date;
  edit?: Date;
  status: DoneStatus;
  thumbnails?: Thumbnail[];
  author: string;
}


export interface Thumbnail {
  url: string;
  title?: string;
}
