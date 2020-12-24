import {DoneStatus} from './done-status.enum';
import {Thumbnail} from './report';

export interface ReportRaw {

  id: number;
  lineId: string;
  freeText?: string;
  incidentSeverity: string;
  resolvedCi: string;
  incidentType: string;
  attr: string;
  knownError: string;
  published: string;
  edit?: string;
  status?: string;
  thumbnails?: ThumbnailRaw;
  author: string;
  rating: number;
}

export interface ThumbnailRaw {
  url: string;
  title?: string;
}
