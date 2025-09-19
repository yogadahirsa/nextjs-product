'use server';

import { ProductType } from '@/app/lib/definition';

export async function fetchProducts() {
    const response = await fetch('https://dummyjson.com/products');
    const data = response.json();

    return data;
}
export async function fetchCategories() {
    const response = await fetch('https://dummyjson.com/products/category-list');
    const data = response.json();

    return data;
}

export async function fetchProductsByCategory(category: string) {
    const uri = `https://dummyjson.com/products/category/${category}`;
    const response = await fetch(uri);
    const data = response.json();

    return data;
}

export async function fetchProductsSort() {
    const response = await fetch('https://dummyjson.com/products?sortBy=price&order=asc');
    const data = response.json();

    return data;
}

export async function sortData(sortBy: string, products: Producttype[]) {
    let sorted;
    if (sortBy == 'desc') {
        sorted = products.slice().sort((a, b) => b.price - a.price);
    } 
    else {
        sorted = products.slice().sort((a, b) => a.price - b.price);
    }
    return sorted;
}

