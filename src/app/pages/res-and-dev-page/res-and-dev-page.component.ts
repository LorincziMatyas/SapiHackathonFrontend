import { Component } from '@angular/core';

interface Factory {
  name: string;
  products: Product[];
}

interface Product {
  name: string;
  cost: number;
  quantity: number;
  rAndDPrice: number;
}

@Component({
  selector: 'app-res-and-dev-page',
  templateUrl: './res-and-dev-page.component.html',
  styleUrls: ['./res-and-dev-page.component.scss'],
})
export class ResAndDevPageComponent {
  factories: Factory[] = [
    {
      name: 'Apple Ching Chong Factory',
      products: [
        { name: 'Er Podz', cost: 100, quantity: 10, rAndDPrice: 50 },
        { name: 'myPhone', cost: 150, quantity: 15, rAndDPrice: 75 },
      ],
    },
    {
      name: 'Tommies Chockolate Factory',
      products: [
        {
          name: 'Chockolate with caramel',
          cost: 200,
          quantity: 20,
          rAndDPrice: 100,
        },
        {
          name: 'White chocolate with caramel',
          cost: 250,
          quantity: 25,
          rAndDPrice: 125,
        },
      ],
    },
  ];

  selectedFactory: Factory | null = null;
  selectedProduct: Product | null = null;

  balance: number = 1000; // Initial balance

  constructor() {}

  selectFactory(factory: Factory): void {
    this.selectedFactory = factory;
    this.selectedProduct = null; // Reset selected product when factory changes
  }

  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }

  performResearchAndDevelopment(): void {
    if (
      this.selectedProduct &&
      this.balance >= this.selectedProduct.rAndDPrice
    ) {
      this.balance -= this.selectedProduct.rAndDPrice;
      // Simulate R&D effects: decrease cost and increase quantity
      this.selectedProduct.cost -= 10; // Decrease cost
      this.selectedProduct.quantity += 5; // Increase quantity
    }
  }
}
