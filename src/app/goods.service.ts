import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
import { Goods } from './goods';


@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private httpClient: HttpClient) { }

  private goodsUrl = 'http://localhost:8080/api/v1/goods';

  httpOption = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getGoods(id: number): Observable<Goods> {
    const url = `${this.goodsUrl}/${id}`;
    return this.httpClient.get<Goods>(url)
      .pipe(
        tap(goods => console.log(goods))
      );
  }

  getAllGoods(): Observable<Goods[]> {
    return this.httpClient.get<Goods[]>(this.goodsUrl)
      .pipe(
        tap(goods => console.log(goods))
      );
  }

  setGoods(goods: Goods): Observable<Goods> {
    return this.httpClient.post<Goods>(this.goodsUrl, goods, this.httpOption);
  }

  deleteGoods(id: number) {
    const url = `${this.goodsUrl}/${id}`;
    this.httpClient.delete(url)
      .subscribe(data => console.log(data));
  }

  updateGoods(goods: Goods) {
    const url = `${this.goodsUrl}/${goods.id}`;
    this.httpClient.put(url, goods, this.httpOption)
      .subscribe(() => this.reloadCurrentPage());
  }

  reloadCurrentPage() {
    window.location.reload();
  }

}
