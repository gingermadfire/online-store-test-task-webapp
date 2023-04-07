import {Component, OnInit} from '@angular/core';
import {GoodsService} from '../goods.service';
import {Goods} from '../goods';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {GoodsAddingModalComponent} from "../goods-adding-modal/goods-adding-modal.component";
import {GoodsEditModalComponent} from "../goods-edit-modal/goods-edit-modal.component";
import {GoodsOrderModalComponent} from "../goods-order-modal/goods-order-modal.component";

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

  openAddingModal() {
    this.ngbModal.open(GoodsAddingModalComponent);
  }

  editOrder(id: number) {
    const ngbModalRef = this.ngbModal.open(GoodsEditModalComponent);
    ngbModalRef.componentInstance.setId(id);
  }

  order(id: number, name: string, price: number) {
    const ngbModalRef = this.ngbModal.open(GoodsOrderModalComponent);
    ngbModalRef.componentInstance.setGoods(id, name, price);
  }
}
