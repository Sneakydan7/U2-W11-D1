import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ProductResponse } from 'src/app/models/products';
import { ProductsService } from 'src/app/service/products.service';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  favourites!: Products[];

  constructor(private srv: ProductsService) {}

  ngOnInit(): void {
    this.favourites = this.srv.getPrefList();
  }
}
