import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../controller/service/product.service";
import {HttpClient} from "@angular/common/http";
import {Product} from "../../../controller/model/product.model";
import {MarketOwner} from "../../../controller/model/market-owner.model";

@Component({
  selector: 'app-market-list-product',
  templateUrl: './market-list-product.component.html',
  styleUrls: ['./market-list-product.component.scss']
})
export class MarketListProductComponent implements OnInit{


  ngOnInit(): void {

    console.log(this.productService.list_products_markets);

  }
  constructor(private productService : ProductService,private httpClient:HttpClient ) {
  }


  get list_products_markets(): Array<Product> {
    return this.productService.list_products_markets;
  }


}
