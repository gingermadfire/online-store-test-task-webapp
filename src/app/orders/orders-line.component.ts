import {Component, OnInit} from '@angular/core';
import {OrderLineService} from "../order-line.service";
import {OrderLine} from "../order-line";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {OrderLineEditModalComponent} from "../order-edit-modal/order-line-edit-modal.component";

@Component({
  selector: 'app-orders',
  templateUrl: './orders-line.component.html',
  styleUrls: ['./orders-line.component.css']
})
export class OrdersLineComponent implements OnInit {

  orderLines: OrderLine[] = [];

  constructor(
    private orderLineService: OrderLineService,
    private ngbModal: NgbModal
  ) {}

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.orderLineService.getOrderLines()
      .subscribe(orderLines => this.orderLines = orderLines);
  }

  editOrder(orderLine: OrderLine) {
    const ngbModalRef = this.ngbModal.open(OrderLineEditModalComponent);
    ngbModalRef.componentInstance.setOrderLine(orderLine);
  }

  deleteOrder(id: number) {
    this.orderLines = this.orderLines.filter(g => g.id !== id);
    this.orderLineService.deleteOrderLine(id);
  }
}
