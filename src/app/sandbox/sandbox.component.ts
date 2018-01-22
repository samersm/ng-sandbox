import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {
  name:string = '';
  users:string[] = ['John Doe', 'Mary Swanson', 'Kevin Smith'];

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(){
      this.users.push(this.name);
      this.name = '';
  }
}
