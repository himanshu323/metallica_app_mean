import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { SocketService } from './socket.service';
import { Router } from '@angular/router';
import { TradeService } from './trade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    
    this.authService.autoAuthUser();

  }
  title = 'MetallicaApp';

  constructor(private authService:AuthService){

  }

  onClose(){
    
  }
}
