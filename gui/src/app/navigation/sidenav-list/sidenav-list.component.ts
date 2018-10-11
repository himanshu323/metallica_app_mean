import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  userIsAuthenticated=false;

  private authStatusSub:Subscription;
    ngOnDestroy(): void {
        this.authStatusSub.unsubscribe();
    }
  @Output() sideClose=new EventEmitter<void>();
  constructor(private authService:AuthService) { }

  ngOnInit() {

    this.userIsAuthenticated=this.authService.getIsAuthenticated();
    this.authStatusSub= this.authService.getAuthStatusListener().subscribe(isAuthenticated=>{
         this.userIsAuthenticated=isAuthenticated;
     })
  }


  onClose(){
this.sideClose.emit();
  }
}
