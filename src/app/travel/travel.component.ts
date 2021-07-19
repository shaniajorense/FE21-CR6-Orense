import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { offers } from '../offers';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  offers = offers;

  offer: any;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }
  
  addToCart(offer:any) {

    window.alert('Your product has been added to the cart!');

    this.cartService.addToCart(offer);

  }

  ngOnInit(): void {
    
  }

}

