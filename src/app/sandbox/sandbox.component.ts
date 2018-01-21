import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {
  imageUrl:string = 'http://lorempixel.com/400/200/';
  isUnchanged:boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

}
