import {Component, Input} from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'app-property-binding',
  template: `
    <p>
      {{ name }}
    </p>
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let l of heroes">{{l.name}}</li>
    </ul>

  `,
  styles: [
  ]
})
export class PropertyBindingComponent {
  @Input() name: string;
  @Input() heroes = [
   new Hero(1, 'Peter'),
   new Hero(2, 'Kerstin'),
   new Hero(3, 'Daniela'),
   new Hero(4, 'Julia')
 ];

}
