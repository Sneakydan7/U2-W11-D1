import { Component, OnInit } from '@angular/core';
import { Products, ProductResponse } from 'src/app/models/products';
import { ProductsService } from 'src/app/service/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.scss'],
})
export class FirstpageComponent implements OnInit {
  sub!: Subscription;
  products!: ProductResponse;
  list: Products[] = [];
  cartlist: Products[] = [];

  constructor(private srv: ProductsService) {}

  ngOnInit(): void {
    this.showProducts();
    console.log(this.products);
  }

  showProducts() {
    this.sub = this.srv.getProducts().subscribe((res) => {
      this.products = res;
      this.list = res.products;
      console.log(this.list);
    });
  }

  showOnCart(product: Products) {
    this.cartlist.push(product);
    console.log(this.cartlist);
  }

  showOnFaves(product: Products) {}
}
