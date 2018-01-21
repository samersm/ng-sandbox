import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {
  birthday = new Date(1981, 1, 15);
  total = 500;
  fee = 0.5;

  constructor() {
  }

  ngOnInit() {
  }

}
