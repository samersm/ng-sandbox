import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {
    users:string[];

  constructor(public dataService:DataService) {
    this.users = this.dataService.getUsers();
  }

  ngOnInit() {
  }

}
