import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {
  customer: Customer;
  customers: Customer[];

  constructor() {
    this.customer = {
        id:1,
        name:'John Doe',
        email:'john@gmail.com'
    }

    this.customers = [
        {
            id:1,
            name:'John Doe',
            email:'john@gmail.com'
        },
        {
            id:2,
            name:'Brad Traversy',
            email:'brad@gmail.com'
        },
        {
            id:3,
            name:'Steve Smith',
            email:'ssmith@gmail.com'
        }
    ];
  }

  ngOnInit() {
  }

}
