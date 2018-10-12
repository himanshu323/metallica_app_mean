import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout"
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
import { TradeResolver } from 'src/app/trades/trade.resolver';




@NgModule({
  declarations: [
    AppComponent, HeaderComponent, SidenavListComponent, ErrorComponent, HomeComponent
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
  providers: [TradeResolver, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule { }
