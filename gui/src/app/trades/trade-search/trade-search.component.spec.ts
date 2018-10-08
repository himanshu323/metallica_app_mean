import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeSearchComponent } from './trade-search.component';
import { CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NgForm, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TradeService } from 'src/app/trade.service';
import { Router } from '@angular/router';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('TradeSearchComponent', () => {
  let component: TradeSearchComponent;
  let fixture: ComponentFixture<TradeSearchComponent>;

  class RouterStub {

    navigate(params) {

    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeSearchComponent ],
      imports:[FormsModule,HttpClientModule,AngularMaterialModule,BrowserAnimationsModule],
      providers:[TradeService,{provide:Router,useClass:RouterStub}],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should call seachTrade when user clicks Search",()=>{

   let del= fixture.debugElement.query(By.css("#searchForm"));

   expect(del).not.toBeNull();

    let service = TestBed.get(TradeService);
    let spy = spyOn(service, "searchTrade")

    fixture.detectChanges();

   del.triggerEventHandler("submit",null);


   
    
   expect(spy).toHaveBeenCalled()
  })

 
});
