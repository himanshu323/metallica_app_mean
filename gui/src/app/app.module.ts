import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { TradeCreateComponent } from 'src/app/trades/trade-create/trade-create.component';
import { FormsModule } from '@angular/forms';
import { TradeListComponent } from './trades/trade-list/trade-list.component';


import {FlexLayoutModule} from "@angular/flex-layout"
import { TradeSearchComponent } from 'src/app/trades/trade-search/trade-search.component';
import { TradeComponent } from 'src/app/trades/trade.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './navigation/header/header.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AngularMaterialModule } from './angular-material.module';
import { ErrorInterceptor } from './auth/error-interceptor';
import { AuthInterceptor } from './auth/auth-interceptor';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { TradeService } from './trade.service';
import { MarketChartComponent } from './market-chart/market-chart.component';


@NgModule({
  declarations: [
    AppComponent,HeaderComponent,TradeCreateComponent, TradeListComponent, 
    TradeSearchComponent,TradeComponent, SidenavListComponent,ErrorComponent, HomeComponent, MarketChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
   AppRoutingModule,
   HttpClientModule,
  
    
    





  
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true}],
  bootstrap: [AppComponent],
  entryComponents:[ErrorComponent]
})
export class AppModule { }
