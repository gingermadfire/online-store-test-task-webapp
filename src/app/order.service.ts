import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, tap} from "rxjs";
import {Order} from './order'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  private orderUrl = "localhost:8080/api/v1/order"

  httpOption = {
    headers: new HttpHeaders({'Conten-Type': 'application/json'})
  }

  getOrder(id: number): Observable<Order> {
    const url = `${this.orderUrl}/${id}`
    return this.http.get<Order>(this.orderUrl)
      .pipe(
        tap(order => console.log(order))
      )
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderUrl)
      .pipe(
        tap(order => console.log(order))
      )
  }

  setOrder(order: Order) {
    this.http.post(this.orderUrl, order, this.httpOption)
      .subscribe(data => console.log(data))
  }

  deleteOrder(id: number) {
    const url = `${this.orderUrl}/${id}`
    this.http.delete(url)
      .subscribe(data => console.log(data))
  }

  updateOrder(id: number, order: Order) {
    const url = `${this.orderUrl}/${id}`
    this.http.put(url, order, this.httpOption)
      .subscribe(data => console.log(data))
  }

}
