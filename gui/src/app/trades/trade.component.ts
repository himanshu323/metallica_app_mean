import { NgModule, OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { SocketService } from "../socket.service";
import { Router } from "@angular/router";
import { ActivatedRouteSnapshot } from "@angular/router";
import { Data } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { MarketDataService } from "./market-data/market-data.service";

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