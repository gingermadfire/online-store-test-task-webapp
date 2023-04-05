import {Component, OnInit} from '@angular/core';
import {GoodsService} from '../goods.service';
import {Goods} from '../goods';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {GoodsAddingModalComponent} from "../goods-adding-modal/goods-adding-modal.component";
import {GoodsEditModalComponent} from "../goods-edit-modal/goods-edit-modal.component";

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
  allGoods: Goods[] = [];

  constructor (
    private goodsService: GoodsService,
    private ngbModal: NgbModal,
  ) {}

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

  open() {
    this.ngbModal.open(GoodsAddingModalComponent);
  }

  edit(id: number) {
    console.log("goods component id " + id);
    const ngbModalRef = this.ngbModal.open(GoodsEditModalComponent);
    ngbModalRef.componentInstance.setId(id);
  }
}
