import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {
  data:any[] = [];

  constructor(public dataService:DataService) {
    this.dataService.getData().subscribe(data => {
        // console.log(data);
        this.data.push(data);
    });
  }

  ngOnInit() {
  }

}
