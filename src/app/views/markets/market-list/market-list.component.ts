import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MarketOwnerServiceService} from "../../../controller/service/market-owner-service.service";
import {MarketOwner} from "../../../controller/model/market-owner.model";
import {ProductService} from "../../../controller/service/product.service";
import {mark} from "@angular/compiler-cli/src/ngtsc/perf/src/clock";
import {Product} from "../../../controller/model/product.model";

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.scss']
})
export class MarketListComponent implements OnInit{


  ngOnInit(): void {
    this.findAll();
  }
  constructor(private productService : ProductService,private marketOwnerService : MarketOwnerServiceService,private httpClient:HttpClient ) {
  }

  get marketOwner(): MarketOwner {
    return this.marketOwnerService.marketOwner;
  }

  get list_marketOwners(): Array<MarketOwner> {
    return this.marketOwnerService.list_marketOwners;
  }

  set marketOwner(value: MarketOwner) {
    this.marketOwnerService.marketOwner = value;
  }
  set list_marketOwners(value: Array<MarketOwner>) {
    this.marketOwnerService.list_marketOwners = value;
  }


  public deleteByCodeMarket(ma:MarketOwner,index :number): void {
    this.marketOwnerService.deleteByCodeMarket(ma.codeMarket).subscribe(data =>{
      if (data>0)
        this.list_marketOwners.slice(index,1);
      else
        alert('error');
    });
  }
  sendMarketOwner() {
    console.log(this.marketOwner);
  }

  public findAll(): void{
    this.marketOwnerService.findAllmarketOwner()
      .subscribe(data=>
        this.list_marketOwners=data);
  }

  set list_products_markets(value: MarketOwner) {
    this.marketOwnerService.marketOwner = value;
  }

  public findProductsMarket(marketOwner:MarketOwner):void{
    alert(marketOwner.codeMarket);
    this.productService.findByMarket(marketOwner.codeMarket).subscribe((data: Product[]) => {
      console.log(data);
      this.productService.list_products_markets = data;
      console.log('ok');
      console.log(this.productService.list_products_markets);
      console.log('ok');
    });

  }



}
