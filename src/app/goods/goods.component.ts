import {Component, OnInit} from '@angular/core';
import {GoodsService} from '../goods.service'
import {Goods} from '../goods'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
  allGoods: Goods[] = [];

  constructor(private goodsService: GoodsService) {
  }

  ngOnInit(): void {
    this.getAllGoods();
  }

  getAllGoods(): void {
    this.goodsService.getAllGoods()
      .subscribe(allGoods => this.allGoods = allGoods);
  }

  getGoods(id: number): Observable<Goods> {
    return this.goodsService.getGoods(id);
  }

  setGoods(goods: Goods): void {
    this.goodsService.setGoods(goods);
  }

  deleteGoods(id: number): void {
    this.allGoods = this.allGoods.filter(g => g.id !== id);
    this.goodsService.deleteGoods(id);
  }

  updateGoods(id: number, goods: Goods): void {
    this.goodsService.updateGoods(id, goods);
  }
}
