import {Order} from "./order";
import {Goods} from "./goods";

export interface OrderLine {
  id: number;
  order: Order;
  goods: Goods;
  count: number;
}
