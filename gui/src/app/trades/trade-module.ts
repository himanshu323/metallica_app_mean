import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";


import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AngularMaterialModule } from "../angular-material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { TradeCreateComponent } from "./trade-create/trade-create.component";
import { TradeListComponent } from "./trade-list/trade-list.component";
import { TradeSearchComponent } from "./trade-search/trade-search.component";
import { TradeComponent } from "./trade.component";
import { HttpClientModule } from "@angular/common/http";
import { TradeRoutingModule } from "./trade-routing.module";
import { MarketDataComponent } from "./market-data/market-data.component";
import { RouterModule } from "@angular/router";

@NgModule({

    declarations:[
   TradeCreateComponent, TradeListComponent, 
        TradeSearchComponent,TradeComponent,MarketDataComponent
    ],
    imports:[
        CommonModule,
        AngularMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        TradeRoutingModule,
        FlexLayoutModule,
        HttpClientModule,
        RouterModule
    ]
})
export class TradeModule{


}