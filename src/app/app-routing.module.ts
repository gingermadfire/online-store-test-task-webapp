import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { GoodsComponent } from './goods/goods.component';
import {GoodsAddingModalComponent} from "./goods-adding-modal/goods-adding-modal.component";
import {GoodsEditModalComponent} from "./goods-edit-modal/goods-edit-modal.component";
import {OrdersLineComponent} from "./orders/orders-line.component";

const routes: Routes = [
  { path: '', redirectTo: '/goods', pathMatch: 'full' },
  { path: 'goods', component: GoodsComponent },
  { path: 'add-goods', component: GoodsAddingModalComponent },
  { path: 'edit-goods', component: GoodsEditModalComponent },
  { path: 'orders', component: OrdersLineComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
