import { TestBed, ComponentFixture } from "@angular/core/testing";
import { TradeComponent } from "src/app/trades/trade.component";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { RouterOutlet } from "@angular/router";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import { SocketService } from "src/app/socket.service";


describe("Test the Trade Component",()=>{

    let component:TradeComponent;

    let fixture:ComponentFixture<TradeComponent>;

    beforeEach(()=>{


        TestBed.configureTestingModule({
            declarations:[TradeComponent],
          
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports:[RouterTestingModule.withRoutes([])]
        })

      fixture=  TestBed.createComponent(TradeComponent);

      component=fixture.componentInstance;


    })


    it("Should contain router outlet for Test Create and Edit",()=>{

     let deb=   fixture.debugElement.query(By.directive(RouterOutlet));

     expect(deb).not.toBeNull();

    })

    it("should create a socket instance for Live Streaming of Trades",()=>{

       let service= TestBed.get(SocketService);

       let spy= spyOn(service,"initializeSocket");

       fixture.detectChanges();

       expect(spy).toHaveBeenCalled();
    })
})