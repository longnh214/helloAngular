import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[];
  selectedCustomer: Customer;

  constructor(private dataService: DataService) {}
 
  getCustomers() {//getCustomers의 리턴 값은 Promise이므로 then을 쓸 수 있다.
     this.dataService.getCustomers().then(customers => this.customers = customers);
  }
  
  //생성자가 불리고 난 다음에 불리는 부분
  ngOnInit(): void {
     this.getCustomers();
  }

  //customer가 선택되면
  onSelect(cust: Customer): void {
    this.selectedCustomer = cust;
  }

}
