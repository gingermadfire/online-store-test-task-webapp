import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { GoodsComponent } from './goods/goods.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { RouterLink, RouterOutlet } from "@angular/router";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {GoodsAddingModalComponent} from "./goods-adding-modal/goods-adding-modal.component";
import { GoodsEditModalComponent } from './goods-edit-modal/goods-edit-modal.component';
import { GoodsOrderModalComponent } from './goods-order-modal/goods-order-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    GoodsComponent,
    GoodsAddingModalComponent,
    GoodsEditModalComponent,
    GoodsOrderModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLink,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    GoodsEditModalComponent,
    NgbActiveModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
