import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../controller/service/product.service";
import {HttpClient} from "@angular/common/http";
import {Product} from "../../../controller/model/product.model";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{


  ngOnInit(): void {
    this.findAll();
  }
  constructor(private productService : ProductService,private httpClient:HttpClient ) {
  }

  get product(): Product {
    return this.productService.product;
  }

  get list_products(): Array<Product> {
    return this.productService.list_products;
  }

  set product(value: Product) {
    this.productService.product = value;
  }
  set list_products(value: Array<Product>) {
    this.productService.list_products = value;
  }


  sendProduct() {
    console.log(this.product);
  }

  public findAll(): void{
    console.log("ok")
    this.productService.findAllProduct()
      .subscribe(data=>
        this.list_products=data);
  }



}
