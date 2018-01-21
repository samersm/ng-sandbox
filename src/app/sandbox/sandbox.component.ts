import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {
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
