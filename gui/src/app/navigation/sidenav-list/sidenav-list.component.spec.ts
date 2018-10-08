import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavListComponent } from './sidenav-list.component';

import { AuthService } from '../../auth/auth.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('SidenavListComponent', () => {
  let component: SidenavListComponent;
  let fixture: ComponentFixture<SidenavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavListComponent ],
      imports:[FormsModule,AngularMaterialModule,BrowserAnimationsModule,HttpClientModule,RouterTestingModule.withRoutes([])],
      providers:[AuthService],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should contain router link with trades",()=>{

    let des= fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
 
    let index=des.findIndex(de=>de.properties['href']=="/trades");
 
    expect(index).toBeGreaterThan(-1);
 
 
   })

});
