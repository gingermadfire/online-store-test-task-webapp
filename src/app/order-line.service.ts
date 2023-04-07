import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, tap} from "rxjs";
import { OrderLine } from './order-line';
import {OrderLineRequestDto} from "./order-line-request-dto";

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
      );
  }

  getOrderLines(): Observable<OrderLine[]> {
    return this.http.get<OrderLine[]>(this.orderLineUrl)
      .pipe(
        tap(orderLines => console.log(orderLines))
      );
  }

  setOrderLine(orderRequestDto: OrderLineRequestDto): Observable<OrderLineRequestDto> {
    return this.http.post<OrderLineRequestDto>(this.orderLineUrl, orderRequestDto, this.httpOptions);
  }

  deleteOrderLine(id: number) {
    const url = `${this.orderLineUrl}/${id}`;
    this.http.delete(url)
      .subscribe(data => console.log(data));
  }

  updateOrderLine(orderLine: OrderLine) {
    const url = `${this.orderLineUrl}/${orderLine.id}`;
    this.http.put(url, orderLine, this.httpOptions)
      .subscribe(this.reloadCurrentPage);
  }

  reloadCurrentPage() {
    window.location.reload();
  }
}
