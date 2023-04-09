import {Order} from "./order";

export interface OrderLineRequest {
  id: number;
  goodsId: number;
  order: Order;
  count: number;
}
