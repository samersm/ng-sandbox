import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-method-l',
  templateUrl: './method-l.component.html',
  styleUrls: ['./method-l.component.css']
})
export class MethodLComponent implements OnInit {
  name:string = '';
  users:string[] = ['John Doe', 'Mary Swanson', 'Kevin Smith'];

  constructor() { }

  ngOnInit() {
  }


  onSubmit(){
      this.users.push(this.name);
      this.name = '';
  }
}
