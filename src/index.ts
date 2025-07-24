import { BasketService } from './services/BasketService';

const basket = new BasketService();

const items = ['Apple', 'Apple', 'Banana', 'Melon', 'Melon', 'Lime', 'Lime', 'Lime'] as const;

const total = basket.calculateTotal(items);

console.log(`Total cost: £${(total / 100).toFixed(2)}`);
