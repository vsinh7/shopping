import { ItemName } from '../src/models/Item';
import { BasketService } from '../src/services/BasketService';

describe('BasketService', () => {
  const basket = new BasketService();

  it('calculates total without offers', () => {
    expect(basket.calculateTotal(['Apple', 'Banana'])).toBe(55); // 35 + 20
  });

  it('calculates BOGOF offer for Melons', () => {
    expect(basket.calculateTotal(['Melon', 'Melon'])).toBe(50); // 1 paid, 1 free
  });

  it('calculates THREE_FOR_TWO for Limes', () => {
    expect(basket.calculateTotal(['Lime', 'Lime', 'Lime'])).toBe(30); // 2 paid
  });

it('calculates mixed basket', () => {
    const basketItems: ItemName[] = ['Apple', 'Apple', 'Melon', 'Melon', 'Melon', 'Lime', 'Lime', 'Lime', 'Lime'];
    expect(basket.calculateTotal(basketItems)).toBe(180);
  });
});
