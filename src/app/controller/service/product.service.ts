import { Injectable } from '@angular/core';
import {Product} from "../model/product.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _product:Product;
  private _list_products:Array<Product>;
  private _url=environment.baseUrl+'product/';
  private _list_products_markets:Array<Product>;


  constructor(private httpClient:HttpClient) {
    this._list_products=new Array<Product>();
    this._list_products_markets=new Array<Product>();
    this._product=new Product();
  }



// getters and setters
  get product(): Product {
    if (this._product==null)
      this._product=new Product();
    return this._product;
  }

  set product(value: Product) {
    this._product = value;
  }

  get list_products(): Array<Product> {
    if (this._list_products==null)
      this._list_products=new Array<Product>();
    return this._list_products;
  }
  get list_products_markets(): Array<Product> {
    if (this._list_products_markets==null)
      this._list_products_markets=new Array<Product>();
    return this._list_products_markets;
  }

  set list_products_markets(value: Array<Product>) {
    this._list_products_markets = value;
  }
  set list_products(value: Array<Product>) {
    this._list_products = value;
  }

  //services
  public save(): Observable<Product>{
    return this.httpClient.post<Product>("http://localhost:8036/market-project/product/",this.product);
  }

  public findByMarket(codeMarket: string): Observable<Array<Product>>{
    return this.httpClient.get<Array<Product>>("http://localhost:8036/market-project/product/marketOwnerCode/"+codeMarket);
  }


  public findAllProduct(): Observable<Array<Product>>{
    return this.httpClient.get<Array<Product>>("http://localhost:8036/market-project/product/");
  }
}
