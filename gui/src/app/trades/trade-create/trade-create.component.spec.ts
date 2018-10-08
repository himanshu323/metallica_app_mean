import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeCreateComponent } from './trade-create.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NgForm, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TradeService } from 'src/app/trade.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from 'src/app/auth/auth.service';
import { SocketService } from 'src/app/socket.service';
import { Subject, of } from 'rxjs';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it("should call addTrade method when trade is created",()=>{
//     fixture.detectChanges();

//     let service=TestBed.get(TradeService);
//     component.mode="create";

//     let spy=spyOn(service,"addTrade");
    
//     let de=fixture.debugElement.query(By.css(".tradeDate"));

   

//    expect(de).not.toBeNull();

//    de.triggerEventHandler("submit",null);

//    expect(spy).toHaveBeenCalled();

// let del= fixture.debugElement.query(By.css("#createForm"));

//    expect(del).not.toBeNull();

//     let service = TestBed.get(TradeService);
//     let spy = spyOn(service, "addTrade")

//     fixture.detectChanges();

//    del.triggerEventHandler("submit",null);


   
    
//    expect(spy).toHaveBeenCalled()




  })

  it("should set tradeCreate to true and route to trades when Trade Create is called",()=>{


    let router=TestBed.get(Router);

    let spy=spyOn(router,"navigate");
    

    

    component.onTradeCreate();

    


    expect(spy).toHaveBeenCalledWith(['/trades']);

    expect(component.tradeCreateFlag).toBeTruthy();

    


  })

  it("should set the trade create and edit flag to false when clicked on Trade Cancel",()=>{

        
    let router=TestBed.get(Router);

    let spy=spyOn(router,"navigate");
    

    

    component.onTradeCancel();

    


    expect(spy).toHaveBeenCalledWith(['/trades']);

    expect(component.tradeCreateFlag).toBeFalsy();
    expect(component.tradeEditFlag).toBeFalsy();
    expect(component.tradeCreateButton).toBeTruthy();


  })


});
