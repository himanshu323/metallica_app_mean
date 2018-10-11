import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TradeComponent } from "./trade.component";
import { TradeCreateComponent } from "./trade-create/trade-create.component";
import { AuthGuard } from "../auth/auth.guard";
import { TradeResolver } from "src/app/trades/trade.resolver";



const routes:Routes=[  

    {
        path:"",component:TradeComponent,children:[
            {
                path: ":id", component: TradeCreateComponent
            },
    
            {
                path: "", component: TradeCreateComponent
            }
    
           
    
        ],canActivate:[AuthGuard], resolve:{server:TradeResolver}
        
    }
 ]
@NgModule({

    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
    
})
export class TradeRoutingModule{

}