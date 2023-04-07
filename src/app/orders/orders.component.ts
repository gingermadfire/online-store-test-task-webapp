import {Component, OnInit} from '@angular/core';
import {OrderLineService} from "../order-line.service";
import {OrderLine} from "../order-line";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{

  orderLines: OrderLine[] = [];

  constructor(private orderLineService: OrderLineService) {
  }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.orderLineService.getOrderLines()
      .subscribe(orderLines => this.orderLines = orderLines);
  }

  editOrder(id: number) {

  }

  deleteOrder(id: number) {

  }
}
