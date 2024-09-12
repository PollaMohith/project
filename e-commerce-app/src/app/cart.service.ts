import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = JSON.parse(localStorage.getItem('cart') || '[]');

  getCart() {
    return this.cart;
}

addToCart(product: any) {
  const existing = this.cart.find((item: any) => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    this.cart.push({ ...product, quantity: 1 });
  }
  this.saveCart();
}

updateQuantity(productId: number, quantity: number) {
  const item = this.cart.find((item: any) => item.id === productId);
  if (item) {
    item.quantity = quantity;
    if (item.quantity <= 0) {
      this.cart = this.cart.filter((item: any) => item.id !== productId);
    }
    this.saveCart();
  }
}
  

clearCart() {
  this.cart = [];
  this.saveCart();
}

private saveCart() {
  localStorage.setItem('cart', JSON.stringify(this.cart));
}
}