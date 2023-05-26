import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MarketOwner} from "../model/market-owner.model";

@Injectable({
  providedIn: 'root'
})
export class MarketOwnerServiceService {


  private _marketOwner:MarketOwner;
  private _list_marketOwners:Array<MarketOwner>;
  private _url=environment.baseUrl+'marketOwner/';


  constructor(private httpClient:HttpClient) {
    this._list_marketOwners=new Array<MarketOwner>();
    this._marketOwner=new MarketOwner();
  }

// getters and setters
  get marketOwner(): MarketOwner {
    if (this._marketOwner==null)
      this._marketOwner=new MarketOwner();
    return this._marketOwner;
  }

  set marketOwner(value: MarketOwner) {
    this._marketOwner = value;
  }

  get list_marketOwners(): Array<MarketOwner> {
    if (this._list_marketOwners==null)
      this._list_marketOwners=new Array<MarketOwner>();
    return this._list_marketOwners;
  }

  set list_marketOwners(value: Array<MarketOwner>) {
    this._list_marketOwners = value;
  }

  //services
  public save(): Observable<MarketOwner>{
    return this.httpClient.post<MarketOwner>("http://localhost:8036/market-project/marketOwner/",this.marketOwner);
  }
  public deleteByCodeMarket(codeMarket : string): Observable<number>{
    return this.httpClient.delete<number>("http://localhost:8036/market-project/marketOwner/codeMarket"+codeMarket);
  }

  public findAllmarketOwner(): Observable<Array<MarketOwner>>{
    return this.httpClient.get<Array<MarketOwner>>("http://localhost:8036/market-project/marketOwner/");
  }

}
