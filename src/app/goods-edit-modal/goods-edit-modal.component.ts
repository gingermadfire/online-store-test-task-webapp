import {Component, OnInit} from '@angular/core';
import {Goods} from "../goods";
import {GoodsService} from "../goods.service";
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-goods-edit-modal',
  templateUrl: './goods-edit-modal.component.html',
  styleUrls: ['./goods-edit-modal.component.css']
})
export class GoodsEditModalComponent implements OnInit {

  private id?: number;

  goodsEditingForm = new FormGroup({
    name: new FormControl(),
    price: new FormControl()
  });

  constructor(
    public ngbActiveModal: NgbActiveModal,
    private goodsService: GoodsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.goodsEditingForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]]
    });
  }

  updateGoods(): void {
    const goods = {
      id: this.id,
      name: this.goodsEditingForm.value.name,
      price: this.goodsEditingForm.value.price
    } as Goods;
    this.goodsService.updateGoods(goods);
  }

  setId(id:number): void {
    this.id = id;
  }
}
