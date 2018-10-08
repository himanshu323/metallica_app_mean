import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeCreateComponent } from './trade-create.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { NgForm, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TradeService } from 'src/app/trade.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from 'src/app/auth/auth.service';
import { SocketService } from 'src/app/socket.service';
import { Subject, of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('TradeCreateComponent', () => {
  let component: TradeCreateComponent;
  let fixture: ComponentFixture<TradeCreateComponent>;

  class RouterStub {

    navigate(params) {

    }
  }

  class ActivatedRouteStub{
    private subject=new Subject();

    push(value){
      this.subject.next(value);
    }

    get paramMap(){
      return this.subject.asObservable();
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TradeCreateComponent],
      imports: [ AngularMaterialModule, BrowserAnimationsModule,FormsModule,HttpClientModule],
      providers: [ TradeService,{ provide: Router, useClass: RouterStub },{ provide: ActivatedRoute, useClass: ActivatedRouteStub }],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeCreateComponent);
   
    component = fixture.componentInstance;
   // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("check the component is in edit mode when Id is passed through the route",()=>{

    let route=TestBed.get(ActivatedRoute);
    let id="5765675765657"
    

     let service=TestBed.get(TradeService);

    spyOn(service,"getTrade").and.returnValues(of())

    fixture.detectChanges();

    route.push({has:(key)=>true,get:(key)=>id});

    expect(component.mode).toBe("edit");

    expect(component.tradeEditFlag).toBeTruthy();

    expect(component.tradeCreateFlag).toBeFalsy();





  })


  it("should call getTrade by Id when the Trade is in edit compoenent ",()=>{

    let route=TestBed.get(ActivatedRoute);
    let id="5765675765657"
    

    let service=TestBed.get(TradeService);

    let spy=spyOn(service,"getTrade").and.returnValues(of())

    fixture.detectChanges();

    route.push({has:(key)=>true,get:(key)=>id});

    expect(spy).toHaveBeenCalledWith(id);


  })

  it("should set the component trade property to the tradeId fetched",()=>{

    let route=TestBed.get(ActivatedRoute);
    let id="5765675765657"
    

    let service=TestBed.get(TradeService);

    let trade={


      quantity: "99",

      tradeDate: "23/07/2018",


      commodity: "AL",

      price: 355,

      counterparty: "Loreum",

      location: "IND:",

      side: "Buy",

      _id: "80980890",

      tradeId:"999999",

      creator:"8888888"


    };



    let expectedTrade={


      quantity: "99",

      tradeDate: "23/07/2018",


      commodity: "AL",

      price: 355,

      counterparty: "Loreum",

      location: "IND:",

      side: "Buy",

      id: "80980890",

      tradeId:"999999",

      creator:"8888888"


    };


    let spy=spyOn(service,"getTrade").and.returnValues(of(trade))

    fixture.detectChanges();

    route.push({has:(key)=>true,get:(key)=>id});

    //expect(component.trade).toEqual(expectedTrade);


    
  })

  it("should set tradeCreate to true and route to trades when Trade Create is called",()=>{


    let router=TestBed.get(Router);

    let spy=spyOn(router,"navigate").and.returnValues();
    

    

    component.onTradeCreate();

    


    expect(spy).toHaveBeenCalledWith(['/trades']);

    expect(component.tradeCreateFlag).toBeTruthy();

    


  })


});
