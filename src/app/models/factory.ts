import { Product } from './product';

export interface Factory {
  name: string;
  description: string;
  profit: number;
  products: Product[];
}
