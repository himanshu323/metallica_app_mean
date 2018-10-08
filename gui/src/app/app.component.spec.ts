import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { AngularMaterialModule } from './angular-material.module';
import {RouterTestingModule} from "@angular/router/testing"
import { SidenavListComponent } from 'src/app/navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from 'src/app/navigation/header/header.component';
import { CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {

  let component:AppComponent;
  let fixture:ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers:[AuthService],
      schemas:[ NO_ERRORS_SCHEMA],
      imports:[RouterTestingModule.withRoutes([]),HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(()=>{

    fixture=TestBed.createComponent(AppComponent);

    component=fixture.componentInstance;

  })
  it('should create the app', async(() => {
   
    expect(component).toBeTruthy();
  }));
  it(`should have as title 'MetallicaApp'`, async(() => {
    
    expect(component.title).toEqual('MetallicaApp');
  }));


  it('should contain the router outlet for Routes', ()=>{

    let del=fixture.debugElement.query(By.directive(RouterOutlet));

    expect(del).not.toBeNull();



  })

  it("should call Auto LoginUser on Component Initialization if token is not expired",()=>{

    let service=TestBed.get(AuthService);

    let spy=spyOn(service,"autoAuthUser");

    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  })


});
