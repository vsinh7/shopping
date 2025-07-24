export type ItemName = 'Apple' | 'Banana' | 'Melon' | 'Lime';

export interface Item {
  name: ItemName;
  price: number;
  offer?: OfferType;
}

export type OfferType = 'BOGOF' | 'THREE_FOR_TWO' | 'NONE';

export const ItemCatalog: Record<ItemName, Item> = {
  Apple: { name: 'Apple', price: 35, offer: 'NONE' },
  Banana: { name: 'Banana', price: 20, offer: 'NONE' },
  Melon: { name: 'Melon', price: 50, offer: 'BOGOF' },
  Lime: { name: 'Lime', price: 15, offer: 'THREE_FOR_TWO' }
};
