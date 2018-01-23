import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-method-b',
  templateUrl: './method-b.component.html',
  styleUrls: ['./method-b.component.css']
})
export class MethodBComponent implements OnInit {
  people = ['Rick', 'Daryl', 'Carl', 'Glen'];

  people2 = [
      {
          firstName:'Rick',
          lastName: 'Grimes'
      },
      {
          firstName:'Daryl',
          lastName: 'Dixon'
      },
      {
          firstName:'Carl',
          lastName: 'Grimes'
      },
      {
          firstName:'Glen',
          lastName: 'Rhee'
      },
  ];

  constructor() {
    this.people[2] = 'Carol';
   }

  ngOnInit() {
  }

}
