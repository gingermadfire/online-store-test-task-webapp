import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {OrderLineRequest} from "../order-line-request";
import {OrderLineService} from "../order-line.service";
import {Goods} from "../goods";
import {Order} from "../order";

@Component({
  selector: 'app-goods-order-modal',
  templateUrl: './goods-order-modal.component.html',
  styleUrls: ['./goods-order-modal.component.css']
})
export class GoodsOrderModalComponent implements OnInit {

  goods: Goods;

  goodsOrderingForm = new FormGroup({
    count: new FormControl(),
    client: new FormControl(),
    address: new FormControl()
  });

  constructor(
    public ngbActiveModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private orderLineService: OrderLineService
  ) { }

  ngOnInit() {
    this.goodsOrderingForm = this.formBuilder.group({
      count: ['', [Validators.required]],
      client: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });
  }

  setGoods(goods: Goods) {
    this.goods = goods;
  }

  getSummaryPrice(price: number, count: number): number {
    return price * count;
  }

  orderGoods() {
    const order = {
      client: this.goodsOrderingForm.value.client,
      address: this.goodsOrderingForm.value.address
    } as Order;

    const request = {
      goodsId: this.goods.id,
      order: order,
      count: this.goodsOrderingForm.value.count
    } as OrderLineRequest;

    this.orderLineService.setOrderLine(request);

  }

}
