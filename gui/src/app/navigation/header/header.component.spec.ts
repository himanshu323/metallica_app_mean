import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { AuthService } from '../../auth/auth.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports:[FormsModule,AngularMaterialModule,BrowserAnimationsModule,HttpClientModule,RouterTestingModule.withRoutes([])],
      providers:[AuthService],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should contain router link with signup",()=>{

    let des= fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
 
    let index=des.findIndex(de=>de.properties['href']=="/auth/signUp");
 
    expect(index).toBeGreaterThan(-1);
 
 
   })

   it("should contain router link with login",()=>{

    let des= fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
 
    let index=des.findIndex(de=>de.properties['href']=="/auth/login");
 
    expect(index).toBeGreaterThan(-1);
 
 
   })


   it("should contain router link with trades",()=>{

    let des= fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
 
    let index=des.findIndex(de=>de.properties['href']=="/trades");
 
    expect(index).toBeGreaterThan(-1);
 
 
   })
});
