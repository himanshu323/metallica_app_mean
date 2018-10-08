import { NgModule, OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { SocketService } from "../socket.service";
import { TradeService } from "../trade.service";
import { Router } from "@angular/router";
import { MarketPrice } from "src/app/market-price.model";
import { MarketStatusService } from "src/app/market-status.service";

@Component({
    selector:'app-trade',
    templateUrl: './trade.component.html',
    styleUrls:['./trade.component.css']
})
export class TradeComponent implements OnInit{

    marketStatus: MarketPrice[];
    marketStatusToPlot: MarketPrice[];

    set MarketStatus(status: MarketPrice[]) {
        this.marketStatus = status;
        this.marketStatusToPlot = this.marketStatus.slice(0, 20);
    }
        
    
    constructor(private socketService: SocketService, private marketStatusSvc: MarketStatusService){
}
ngOnInit(): void {


    this.socketService.initializeSocket();
    this.marketStatusSvc.getInitialMarketStatus()
        .subscribe(prices => {
            this.MarketStatus = prices;

            let marketUpdateObservable = this.marketStatusSvc.getUpdates().subscribe((latestStatus: MarketPrice) => {  // 2
                this.MarketStatus = [latestStatus].concat(this.marketStatus);  // 3
            });  
        });


    
}

    
}