import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentseverityComponent } from './incidentseverity.component';

describe('IncidentseverityComponent', () => {
  let component: IncidentseverityComponent;
  let fixture: ComponentFixture<IncidentseverityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentseverityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentseverityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
