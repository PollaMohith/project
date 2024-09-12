import { Component,OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

interface Item{
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  items:Item[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.items= this.cartService.getCart();
  }

  updateQuantity(productId: number, quantity: number) {
    this.cartService.updateQuantity(productId, quantity);
    this.ngOnInit(); // Refresh cart
  }

  checkout() {
    this.router.navigate(['/checkout']);
  }

}
