import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ReportFactory} from '../shared/report-factory';
import {Report} from '../shared/report';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {

  /** erst einmal ein leeres Object initialisieren */
  report = ReportFactory.empty();

  @Output() submitReport = new EventEmitter<Report>();
  @ViewChild('reportForm') reportForm: NgForm;

  constructor() { }

  submitForm(): any{
    this.submitReport.emit(this.report);

    this.report = ReportFactory.empty();
    this.reportForm.reset();
  }

  ngOnInit(): void {
  }

}
