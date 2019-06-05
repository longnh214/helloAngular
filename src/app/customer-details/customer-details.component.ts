import { Component, OnInit, Input } from '@angular/core';

import { Customer } from '../customer';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  //부모로 부터 받은 Component임을 의미한다.
  @Input() customer: Customer;
 
  constructor(private dataService: DataService) {}
 
  ngOnInit() {
  }

  //삭제시켜주는 method
  delete(): void {
    this.dataService.delete(this.customer.id).then(() => this.goBack());
  }
  
  //원래 페이지로 돌아간다.
  private goBack(): void {
    window.location.replace('');
  }

}