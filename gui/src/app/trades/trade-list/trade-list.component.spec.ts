import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeListComponent } from './trade-list.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NgForm, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Router, ActivatedRoute } from '@angular/router';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from 'src/app/auth/auth.service';
import { SocketService } from 'src/app/socket.service';
import { of, Subject } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { TradeService } from '../trade.service';

describe('TradeListComponent', () => {
  let component: TradeListComponent;
  let fixture: ComponentFixture<TradeListComponent>;

  class RouterStub {

    navigate(params) {

    }
  }


  class ActivatedRouteStub {
    private subject = new Subject();

    push(value) {
      this.subject.next(value);
    }

    get data() {
      return this.subject.asObservable();
    }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TradeListComponent],
      imports: [FormsModule, HttpClientModule, AngularMaterialModule, BrowserAnimationsModule],
      providers: [TradeService, AuthService, SocketService, { provide: Router, useClass: RouterStub }, { provide: ActivatedRoute, useClass: ActivatedRouteStub }],
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

  it("should set auth prop to true and set the user id for the curret user", () => {

    let service = TestBed.get(AuthService);

    spyOn(service, "getAuthStatusListener").and.returnValue(of(true));


  })
});
