import { NgModule } from "@angular/core";
import {Routes} from "@angular/router"
import { RouterModule } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { HomeComponent } from "./home/home.component";
import { PreloadAllModules } from "@angular/router";

const routes:Routes=[
    {

        path:"",component:HomeComponent
    },
{
        path:'trades',loadChildren:'./trades/trade-module#TradeModule'
    },

{
    path:'auth',loadChildren:'./auth/auth-module#AuthModule'
}

]
@NgModule({
    imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
    providers:[AuthGuard],
    exports:[RouterModule]
})
export class AppRoutingModule{

}