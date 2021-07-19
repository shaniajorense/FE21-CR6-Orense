import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any;
  checkoutForm: any;
  constructor(private cartService: CartService, private fromBuilder: FormBuilder) {
    this.checkoutForm = this.fromBuilder.group({
      name: "",
      address: "",
      email: ""
    })
    
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems()
  }
  onSubmit(customerData:any) {
  
    console.warn('Your order has been submitted', customerData);
  
  
    this.items = this.cartService.clearCart();
  
    this.checkoutForm.reset();
  
  }
  

}
