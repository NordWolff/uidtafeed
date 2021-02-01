import {DoneStatus} from './done-status.enum';
import {ReportRaw} from './report-raw';
import {Report} from './report';

export class ReportFactory {

  static empty(): Report{
    return {
      id: 0,
      attr: '',
      author: 'assia@service.de',
      published: new Date(),
      incidentSeverity: '',
      incidentType: '',
      knownError: '',
      lineId: '',
      resolvedCi: '',
      edit: new Date(),
      status: DoneStatus.POSTEINGANG,
      rating: 0,
      thumbnails: [{id: 0, url: '', title: ''}],
      freeText: '',
      username: ''

    };
  }

  static fromRaw(b: ReportRaw): Report {
    return {
      id: b.id,
      attr: b.attr,
      author: b.author,
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
      username: b.username
    };
  }
}
