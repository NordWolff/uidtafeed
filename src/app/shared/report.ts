import {DoneStatus} from './done-status.enum';

export interface Report {
  id: number;
  lineId: string;
  freeText?: string;
  incidentSeverity: string;
  resolvedCi: string;
  incidentType: string;
  attr: string;
  knownError: string;
  published: Date;
  edit?: Date;
  status?: DoneStatus;
  thumbnails?: Thumbnail[];
  author: string;
  rating: number;
  username?: string;
}


export interface Thumbnail {
  id: number;
  url: string;
  title?: string;
}
