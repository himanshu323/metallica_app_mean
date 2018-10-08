import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeListComponent } from './trade-list.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NgForm, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TradeService } from 'src/app/trade.service';
import { Router } from '@angular/router';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from 'src/app/auth/auth.service';
import { SocketService } from 'src/app/socket.service';
import { of } from 'rxjs';

describe('TradeListComponent', () => {
  let component: TradeListComponent;
  let fixture: ComponentFixture<TradeListComponent>;

  class RouterStub {

    navigate(params) {

    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TradeListComponent],
      imports: [FormsModule, HttpClientModule, AngularMaterialModule, BrowserAnimationsModule],
      providers: [TradeService,AuthService,SocketService, { provide: Router, useClass: RouterStub }],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeListComponent);
    component = fixture.componentInstance;
   // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should set auth prop to true and set the user id for the curret user",()=>{

    let service=TestBed.get(AuthService);

    spyOn(service,"getAuthStatusListener").and.returnValue(of(true));

    // spyOn(service,"getUserId").and.returnValue("321");

    // spyOn(service,"getAllTrades");

    //fixture.detectChanges();

    //expect(component.userIsAuthenticated).toBeTruthy();

   // expect(component.userId).toBe("321");
   })
});
