import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {OrderService} from "../order.service";
import {OrderRequestDto} from "../order-request-dto";

@Component({
  selector: 'app-goods-order-modal',
  templateUrl: './goods-order-modal.component.html',
  styleUrls: ['./goods-order-modal.component.css']
})
export class GoodsOrderModalComponent implements OnInit {

  private id: number;
  name: string;
  price: number;

  goodsOrderingForm = new FormGroup({
    count: new FormControl(),
    client: new FormControl(),
    address: new FormControl()
  });

  constructor(
    public ngbActiveModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.goodsOrderingForm = this.formBuilder.group({
      count: ['', [Validators.required]],
      client: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });
  }

  setGoods(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getSummaryPrice(price: number, count: number): number {
    return price * count;
  }

  orderGoods() {
    const requestDto = {
      goodsId: this.id,
      client: this.goodsOrderingForm.value.client,
      address: this.goodsOrderingForm.value.address,
      count: this.goodsOrderingForm.value.count
    } as OrderRequestDto;

    this.orderService.setOrder(requestDto);

  }

}
