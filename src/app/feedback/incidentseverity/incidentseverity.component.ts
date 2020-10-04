import { Component, OnInit } from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';


@Component({
  selector: 'app-incidentseverity',
  templateUrl: './incidentseverity.component.html',
  styleUrls: ['./incidentseverity.component.css']
})
export class IncidentseverityComponent implements OnInit {
  incident = '';
  genders = [
    'männlich',
    'weiblich'
  ];

  constructor() {}

  onSubmit(result: NgForm): void{
    console.log(result);
  }

  ngOnInit(): void {
  }

}
