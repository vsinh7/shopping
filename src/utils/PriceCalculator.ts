import { Item, OfferType } from '../models/Item';

export class PriceCalculator {
  static calculatePrice(quantity: number, item: Item): number {
    switch (item.offer) {
      case 'BOGOF':
        return item.price * Math.ceil(quantity / 2);
      case 'THREE_FOR_TWO':
        return item.price * (quantity - Math.floor(quantity / 3));
      case 'NONE':
      default:
        return item.price * quantity;
    }
  }
}
