import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators'
import { Goods } from './goods'


@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private httpClient: HttpClient) { }

  private goodsUrl = 'http://localhost:8080/goods';

  httpOption = {
    headers: new HttpHeaders({'Conten-Type': 'application/json'})
  };

  getGoods(id: number): Observable<Goods> {
    const url = `${this.goodsUrl}/${id}`
    return this.httpClient.get<Goods>(this.goodsUrl)
      .pipe(
        tap(goods => console.log(goods))
      )
  }

  getAllGoods(): Observable<Goods[]> {
    return this.httpClient.get<Goods[]>(this.goodsUrl)
      .pipe(
        tap(goods => console.log(goods))
      )
  }

  setGoods(goods: Goods) {
    this.httpClient.post(this.goodsUrl, goods, this.httpOption)
      .subscribe(data => console.log(data))
  }

  deleteGoods(id: number) {
    const url = `${this.goodsUrl}/${id}`
    this.httpClient.delete(url)
      .subscribe(data => console.log(data))
  }

  updateGoods(id: number, goods: Goods) {
    const url = `${this.goodsUrl}/${id}`
    this.httpClient.put(url, goods, this.httpOption)
      .subscribe(data => console.log(data))
  }

}
