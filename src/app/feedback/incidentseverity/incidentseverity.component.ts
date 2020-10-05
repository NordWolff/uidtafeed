/* tslint:disable:no-angle-bracket-type-assertion */
import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-incidentseverity',
  templateUrl: './incidentseverity.component.html',
  styleUrls: ['./incidentseverity.component.css']
})
export class IncidentseverityComponent implements OnInit {
incidentForm: FormGroup;
genders = [
  'männlich',
  'weiblich'
];

  constructor() {}

  onSubmit(): void{
    console.log(this.incidentForm);
  }

  onAddInput(): void {
    ( <FormArray> this.incidentForm.get('list')).push(new FormControl('', Validators.required));
  }

  getList(): any {
    return (this.incidentForm.get('list') as FormArray).controls;
  }

  ngOnInit(): void {
    this.incidentForm = new FormGroup({
      formData: new FormGroup({
        input: new FormControl(null, [Validators.required]),
        id: new FormControl('1', [Validators.required , Validators.minLength(1)]),
        gender: new FormControl('männlich'),
      }),
      /* fügt eine Array hinzu */
      list: new FormArray([
        new FormControl('Cooking', Validators.required)
      ])
    });
  }

}
