import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {MarketOwnerServiceService} from "../../../controller/service/market-owner-service.service";
import {MarketOwner} from "../../../controller/model/market-owner.model";

@Component({
  selector: 'app-market-create',
  templateUrl: './market-create.component.html',
  styleUrls: ['./market-create.component.scss']
})
export class MarketCreateComponent implements OnInit{


  _url: string=environment.baseUrl+'marketOwner/';



  ngOnInit(): void {

  }

  public save(): void{
    this.marketOwnerService.save().subscribe(data =>{
      if(data != null){
        this.list_marketOwners.push({...this.marketOwner});
        alert("okey seccucc");
      }else
        alert('no');
    });
  }

  public is_ok(){
    console.log(this.marketOwner);
  }
  constructor(private marketOwnerService : MarketOwnerServiceService,private httpClient:HttpClient ) {
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


  sendMarketOwner() {
    console.log(this.marketOwner);
  }

}

