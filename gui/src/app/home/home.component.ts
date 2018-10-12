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
  private authUserRegisteredSub: Subscription;
  userIsAuthenticated = false;
  userIsRegistered = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.userIsAuthenticated = this.authService.getIsAuthenticated();
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    })
    this.userIsRegistered = this.authService.getIsRegistered();
    this.authService.getAuthUserRegisteredListener().subscribe(isReg => {

      this.userIsRegistered = isReg;
    })

  }


  ngOnDestroy(): void {
    this.authStatusSub.unsubscribe();
  }

}
