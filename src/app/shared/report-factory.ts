import {DoneStatus} from './done-status.enum';
import {ReportRaw} from './report-raw';
import {Report} from './report';

export class ReportFactory {

  static empty(): Report{
    return {
      attr: '',
      author: '',
      published: new Date(),
      incidentSeverity: '',
      incidentType: '',
      knownError: '',
      lineId: '',
      resolvedCi: '',
      edit: new Date(),
      status: DoneStatus.POSTEINGANG,
      rating: 0,
      thumbnails: {url: '', title: ''},
      id: 0,
      freeText: ''

    };
  }

  static fromRaw(b: ReportRaw): Report {
    return {
      attr: b.attr,
      author: b.author,
      id: b.id,
      incidentSeverity: b.incidentSeverity,
      incidentType: b.incidentType,
      knownError: b.knownError,
      lineId: b.lineId,
      resolvedCi: b.resolvedCi,
      published: new Date(b.published),
      edit: new Date(b.edit),
      status: DoneStatus.POSTEINGANG,
      rating: b.rating,
      thumbnails: b.thumbnails,
      freeText: b.freeText,
    };
  }
}
