import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, tap} from "rxjs";
import {Order} from './order';
import {OrderLineRequest} from "./order-line-request";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  private orderUrl = 'http://localhost:8080/api/v1/order';

  httpOption = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getOrder(id: number): Observable<Order> {
    const url = `${this.orderUrl}/${id}`;
    return this.http.get<Order>(url)
      .pipe(
        tap(order => console.log(order))
      );
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderUrl)
      .pipe(
        tap(order => console.log(order))
      );
  }

  setOrder(orderRequestDto: OrderLineRequest) {
    this.http.post(this.orderUrl, orderRequestDto, this.httpOption).subscribe();
  }

  deleteOrder(id: number) {
    const url = `${this.orderUrl}/${id}`;
    this.http.delete(url)
      .subscribe(data => console.log(data));
  }

  updateOrder(id: number, order: Order) {
    const url = `${this.orderUrl}/${id}`;
    this.http.put(url, order, this.httpOption)
      .subscribe(data => console.log(data));
  }

}

