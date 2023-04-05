import {Component, OnInit} from '@angular/core';
import {Goods} from '../goods';
import {GoodsService} from '../goods.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-goods-adding-modal',
  templateUrl: './goods-adding-modal.component.html',
  styleUrls: ['./goods-adding-modal.component.css']
})
export class GoodsAddingModalComponent implements OnInit {

  goodsAddingForm = new FormGroup({
    name: new FormControl(),
    price: new FormControl()
  });

  constructor(
    public ngbActiveModal: NgbActiveModal,
    private goodsService: GoodsService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.goodsAddingForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]]
    });
  }

  setGoods(): void {
    const goods = {
      name: this.goodsAddingForm.value.name,
      price: this.goodsAddingForm.value.price
    } as Goods;
    this.goodsService.setGoods(goods)
      .subscribe(() => this.reloadCurrentPage());
  }

  reloadCurrentPage() {
    window.location.reload();
  }
}
