import {Component, OnInit, VERSION} from '@angular/core';
import {version} from 'punycode';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  angular_version = 'Angular v' + VERSION.major;

  constructor() { }

  ngOnInit(): void {
  }

}
