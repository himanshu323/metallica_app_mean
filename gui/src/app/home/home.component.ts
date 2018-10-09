import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private authStatusSub: Subscription;
  userIsAuthenticated=false;
  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.userIsAuthenticated = this.authService.getIsAuthenticated();
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    })
  }

  
  ngOnDestroy(): void {
    this.authStatusSub.unsubscribe();
  }

}
