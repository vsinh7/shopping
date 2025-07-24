import { ItemCatalog, ItemName } from '../models/Item';
import { PriceCalculator } from '../utils/PriceCalculator';

export class BasketService {
  calculateTotal(items: readonly ItemName[]): number {
    const itemCounts: Record<ItemName, number> = {
      Apple: 0,
      Banana: 0,
      Melon: 0,
      Lime: 0
    };

    for (const itemName of items) {
      if (ItemCatalog[itemName]) {
        itemCounts[itemName]++;
      }
    }

    let total = 0;

    for (const itemName of Object.keys(itemCounts) as ItemName[]) {
      const count = itemCounts[itemName];
      const item = ItemCatalog[itemName];
      total += PriceCalculator.calculatePrice(count, item);
    }

    return total;
  }
}
