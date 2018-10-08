import { Injectable } from "@angular/core";
import { Trade } from "./trade.model";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { TradeSearch } from "./trade-search.model";
import { map } from 'rxjs/operators'

import * as moment from 'moment';
import { Router } from "@angular/router";
import { SocketService } from "./socket.service";
import { environment } from "../environments/environment";


@Injectable({providedIn:'root'})
 //@Injectable()
export class TradeService{

    TRADES_API=environment.apiUrl+ "api/trades/"

    trades:Trade[];

    tradeSearch=new Subject<TradeSearch>();

    tradesUpdate=new Subject<{trades:Trade[]}>()



    constructor(private http:HttpClient,private router:Router,private socketService:SocketService){

    }

    addTrade(trade:Trade){


        console.log("Data");

        console.log(trade)

        this.http.post(this.TRADES_API,trade).subscribe(response=>{

        console.log(response);

        this.router.navigate(["/trades"]);

        this.getAllTrades();

        this.socketService.sendNotification("changeTrade");

        

        })

        
    }

    getTradeListener(){

        return this.tradesUpdate.asObservable();
    }


    searchTrade(tradeSearchValue){

        this.tradeSearch.next(tradeSearchValue);

    }


    getSearchTradeListener(){

        return this.tradeSearch.asObservable();
    }

    getAllTrades(){

        //let queryParam=`?pageSize=${tradesPerPage}&currentPage=${currentPage}`

        this.http.get<{message:string,trades:any}>(this.TRADES_API)
        .pipe(map(tradesData=>{

            return{ trades:tradesData.trades.map(trade=>{
                    return {
                        quantity: trade.quantity,

                        tradeDate: trade.tradeDate,

                        id:trade._id,
                        commodity: trade.commodity,

                        price: trade.price,

                        counterparty: trade.counterparty,

                        location: trade.location,

                        side: trade.side,

                        tradeId:trade.tradeId,

                        creator:trade.creator

                    }

                   
            }),
 message: tradesData.message
        }
        }))
        
        
        
        .subscribe(data=>{

        console.log(data)

        this.trades=data.trades;

        this.tradesUpdate.next({trades:this.trades});


        })


    }


    getTrade(tradeId){


       return  this.http.get<any>(this.TRADES_API+tradeId) ; 
    
    }


    updateTrade(tradeId,trade:Trade){

        console.log(trade);

        console.log(tradeId);


        this.http.put(this.TRADES_API + tradeId,trade).subscribe(resp=>{

        console.log(resp);

            this.router.navigate(["/trades"]);

            this.getAllTrades();


        this.socketService.sendNotification("changeTrade");
        })
    }

    deleteTrade(tradeId){


      return  this.http.delete(this.TRADES_API + tradeId);
    
    }
    filterSearchCriteria(data:Trade,filterValue:TradeSearch){



      
            let dateFlag;
            let startDate=moment(filterValue.tradeFromDate)
            let endDate =moment(filterValue.tradeToDate);

            let testDate = moment(data.tradeDate);

            console.log("Start Date",startDate);

            console.log("End Date", endDate);

            if((testDate.isAfter(startDate) && testDate.isBefore(endDate)) || testDate.isSame(startDate)
                || testDate.isSame(endDate)){
                    dateFlag=true;
                    console.log("I'm in")
                }


             let sideFlag;
             
            if (filterValue.side.buy && filterValue.side.sell) {
                sideFlag= data.side.toLowerCase() === "buy" || data.side.toLowerCase() === "sell";
            }
           


        
       else if (filterValue.side.buy) {
            sideFlag= data.side.toLowerCase() === "buy";
        }
        else if (filterValue.side.sell) {
                sideFlag =  data.side.toLowerCase() === "sell";
        }


        let commodityFlag;

        commodityFlag=data.commodity.toLowerCase()===filterValue.commodity.toLowerCase();


        let counterpartyFlag;

        counterpartyFlag=data.counterparty.toLowerCase()===filterValue.counterparty.toLowerCase();

        let locationFlag;

        locationFlag=data.location.toLowerCase()===filterValue.location.toLowerCase();

        console.log(dateFlag,commodityFlag,sideFlag,counterpartyFlag,locationFlag);
        return dateFlag && commodityFlag && sideFlag && counterpartyFlag && locationFlag;
       

    

}


}