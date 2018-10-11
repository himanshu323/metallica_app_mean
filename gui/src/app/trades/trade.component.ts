import { NgModule, OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { SocketService } from "../socket.service";
import { TradeService } from "../trade.service";
import { Router } from "@angular/router";
import { MarketPrice } from "src/app/market-price.model";
import { MarketDataService } from "src/app/market-data.service";
import { ActivatedRouteSnapshot } from "@angular/router";
import { Data } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector:'app-trade',
    templateUrl: './trade.component.html',
    styleUrls:['./trade.component.css']
})
export class TradeComponent implements OnInit{

   
    constructor(private socketService: SocketService,private marketDataService:MarketDataService){
}
ngOnInit(): void {


    this.socketService.initializeSocket();

    this.marketDataService.initializeMarketDataSocket()

  

    
}

    
}