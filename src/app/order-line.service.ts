import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, tap} from "rxjs";
import { OrderLine } from './order-line';

@Injectable({
  providedIn: 'root'
})
export class OrderLineService {

  constructor(private http: HttpClient) { }

  private orderLineUrl = 'http://localhost:8080/api/v1/order-line';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getOrderLine(id: number): Observable<OrderLine> {
    const url = `${this.orderLineUrl}/${id}`;
    return this.http.get<OrderLine>(url)
      .pipe(
        tap(orderLine => console.log(orderLine))
      )
  }

  getOrderLines(): Observable<OrderLine[]> {
    return this.http.get<OrderLine[]>(this.orderLineUrl)
      .pipe(
        tap(orderLines => console.log(orderLines))
      )
  }

  setOrderLine(orderLine: OrderLine) {
    this.http.post(this.orderLineUrl, orderLine, this.httpOptions)
      .subscribe(data => console.log(data))
  }

  deleteOrderLine(id: number) {
    const url = `${this.orderLineUrl}/${id}`
    this.http.delete(url)
      .subscribe(data => console.log(data))
  }
  
  updateOrderLine(id: number, orderLine: OrderLine) {
    const url = `${this.orderLineUrl}/${id}`
    this.http.put(url, orderLine, this.httpOptions)
      .subscribe(data => console.log(data))
  }
}
