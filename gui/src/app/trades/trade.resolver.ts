import { Trade } from "src/app/trade.model";
import { Resolve, RouterStateSnapshot } from "@angular/router";
import { ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { TradeService } from "src/app/trade.service";

@Injectable({providedIn:"root"})
export class TradeResolver implements Resolve<{ message: string, trades: any }>{

    trades;
    constructor(private tradeService:TradeService){



    }

    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): { message: string, trades: any } | 
         Observable<{ message: string, trades: any }> | Promise<{ message: string, trades: any }> {
      
        

         return this.tradeService.getTradesValues() ;  

    }

    
}