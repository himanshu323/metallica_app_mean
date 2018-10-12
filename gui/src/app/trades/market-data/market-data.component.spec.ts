import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketDataComponent } from './market-data.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from '../../angular-material.module';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { MarketDataService } from './market-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MarketDataComponent', () => {
  let component: MarketDataComponent;
  let fixture: ComponentFixture<MarketDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketDataComponent ],
      imports:[HttpClientModule,AngularMaterialModule,BrowserAnimationsModule],
      providers:[MarketDataService],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketDataComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    //fixture.detectChanges();
    expect(component).toBeTruthy();

    
  });

  it('should call get Inital Market status and get Updates set the market status', () => {
    //fixture.detectChanges();

    let service=TestBed.get(MarketDataService);
    
    let marketStatus=[{
      account: "ABC",
      price: 534,
      diff: "+5"
    }]

    let spy=spyOn(service,"getInitialMarketStatus").and.returnValue(of(marketStatus));

    let spyUpdates= spyOn(service,"getUpdates").and.returnValue(of(marketStatus));
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    expect(spyUpdates).toHaveBeenCalled();


    expect(component.marketStatus).toBe(marketStatus);

    
  });
});
