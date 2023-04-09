import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {GoodsService} from "../goods.service";
import {OrderLineService} from "../order-line.service";
import {OrderLine} from "../order-line";
import {Goods} from "../goods";
import {OrderLineRequest} from "../order-line-request";
import {Order} from "../order";

@Component({
  selector: 'app-order-edit-modal',
  templateUrl: './order-line-edit-modal.component.html',
  styleUrls: ['./order-line-edit-modal.component.css']
})
export class OrderLineEditModalComponent implements OnInit {

  orderLine: OrderLine;
  allGoods: Goods[] = [];
  goodsId: number;

  orderLineEditingForm = new FormGroup({
    goodsName: new FormControl(),
    price: new FormControl(),
    count: new FormControl(),
    client: new FormControl(),
    address: new FormControl()
  });

  constructor(
    public ngbActiveModal: NgbActiveModal,
    private goodsService: GoodsService,
    private formBuilder: FormBuilder,
    private orderLineService: OrderLineService
  ) {
    this.getAllGoods();
  }

  ngOnInit() {
    this.orderLineEditingForm = this.formBuilder.group({
      goodsName: ['', [Validators.required]],
      price: ['', [Validators.required]],
      count: ['', [Validators.required]],
      client: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });
    this.goodsId = this.orderLine.goods.id;
  }

  updateOrderLine(): void {

    const order = {
      id: this.orderLine.order.id,
      client: this.orderLineEditingForm.value.client,
      address: this.orderLineEditingForm.value.address
    } as Order;

    const orderLineRequest = {
      id: this.orderLine.id,
      goodsId: this.goodsId,
      order: order,
      count: this.orderLineEditingForm.value.count
    } as OrderLineRequest;
    this.orderLineService.updateOrderLine(orderLineRequest);
  }

  setOrderLine(orderLine: OrderLine): void {
    this.orderLine = orderLine;
  }

  getAllGoods() {
    this.goodsService.getAllGoods().subscribe(goods => this.allGoods = goods);
  }

  setGoodsId(id: number) {
    if (id != null) {
      this.goodsId = id;
    }
  }

  getPrice(): number{
    for (let i = 0; i < this.allGoods.length; i++) {
      if (this.allGoods[i].id == this.goodsId) {
        return this.allGoods[i].id;
      }
    }
    return -1;
  }

}
