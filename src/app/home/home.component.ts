import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faCoffee, fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faCoffee = faCoffee;
  constructor(library:FaIconLibrary) {
    library.addIconPacks(fas,far)
  }

  ngOnInit(): void {
  }

}
