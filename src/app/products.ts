export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Agricola',
    price: 799,
    description: 'A Masterpiece by Uwe Rosenberg'
  },
  {
    id: 2,
    name: 'Calico',
    price: 699,
    description: 'Great game about cats and quilts'
  },
  {
    id: 3,
    name: 'Indian Summer',
    price: 299,
    description: 'Best Polyomino board game'
  },
  {
    id: 4,
    name: 'Wingspan',
    price: 299,
    description: 'The most popular game of all time'
  },
  {
    id: 5,
    name: 'Merlin',
    price: 299
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/