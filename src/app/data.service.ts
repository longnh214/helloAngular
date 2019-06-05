import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
 
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'api/customers';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});
 
  constructor(private http: Http) {}
 
  // Get all customers
  getCustomers(): Promise<Customer[]> {

    return this.http.get(this.baseUrl)
      .toPromise() //promise 가 리턴된다.
      .then(response => response.json() as Customer[])//파싱해서 Customer에 저장.
      .catch(this.handleError);
  }
 
  getCustomersByLastName(lastName: string): Promise<Customer[]> {
    const url= `${this.baseUrl}/${lastName}`;//` : back tick 문자열을 표현할 수 있는 방법

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Customer[])
      .catch(this.handleError);
  }
  
  //사용자 생성 post
  create(customer: Customer): Promise<Customer> {
   
    return this.http//객체 -> JSON으로 바꾸는 Serialization을 해주는 stringify메소드
      .post(this.baseUrl, JSON.stringify(customer), {headers : this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
 
  delete(id: number): Promise<void> {
   const url= `${this.baseUrl}/${id}`;

    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
 
  //Promise 에러 처리
  private handleError(error: any): Promise<any> {
    console.error('Error:', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}