import { Component } from '@angular/core';

interface Product {
  name: string;
  price: number;
  quantity: number;
  img: string;
  amt: number;
}

@Component({
  selector: 'app-practical1',
  templateUrl: './practical1.component.html',
  styleUrls: ['./practical1.component.css']
})
export class Practical1Component {
  products: Product[] = [
    { name: 'Head Phone', price: 10, quantity: 0, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', amt: 0 },
    { name: 'Sun Glasses', price: 30, quantity: 0, img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', amt: 0 },
    { name: 'Camera', price: 430, quantity: 0, img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', amt: 0 },
    { name: 'Boys Shoes', price: 30, quantity: 0, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', amt: 0 },
    { name: 'Ladies Sandal', price: 330, quantity: 0, img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', amt: 0 }
  ];
  gstRate = 0.18; // 18% GST rate
  totalPrice = 0;
  gst = 0;
  totalAmount = 0;

  calculateTotal(product: any) {
    this.totalPrice = this.products.reduce((acc, p) => acc + (p.price * p.quantity), 0);
    this.gst = parseFloat((this.totalPrice * this.gstRate).toFixed(2));
    this.totalAmount = this.totalPrice + this.gst;
  }
}
