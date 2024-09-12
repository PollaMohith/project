import { Component,OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

interface Cart{
  name:String,
  price:number,
  quantity:number;
}
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
cart:Cart[]=[];
 total =0;
 constructor(private cartService: CartService, private router: Router) {}

 ngOnInit(): void {
   this.cart = this.cartService.getCart();
   this.total = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
 }

 placeOrder() {
  
   this.cartService.placeorder.subscribe(() => {
   this.router.navigate(['/order-conformation']);
  });
}
}