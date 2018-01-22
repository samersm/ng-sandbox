import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {
  users:any[];

  constructor(public dataService:DataService) {
    this.dataService.getUsers().subscribe(users => {
        //console.log(users);
        this.users = users;
    });
  }

  ngOnInit() {
  }

}
