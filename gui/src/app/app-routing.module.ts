import { NgModule } from "@angular/core";
import {Routes} from "@angular/router"
import { RouterModule } from "@angular/router";
import { TradeComponent } from "src/app/trades/trade.component";
import { TradeCreateComponent } from "src/app/trades/trade-create/trade-create.component";
import { AuthGuard } from "./auth/auth.guard";
import { HomeComponent } from "./home/home.component";

const routes:Routes=[
    {

        path:"",component:HomeComponent
    },
    
    {
    path:"trades",component:TradeComponent,children:[
        {
            path: ":id", component: TradeCreateComponent
        },

        {
            path: "", component: TradeCreateComponent
        }

       

    ],canActivate:[AuthGuard]
    
},

{
    path:'auth',loadChildren:'./auth/auth-module#AuthModule'
}

]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers:[AuthGuard],
    exports:[RouterModule]
})
export class AppRoutingModule{

}