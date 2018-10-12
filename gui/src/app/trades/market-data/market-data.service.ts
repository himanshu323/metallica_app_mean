import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as socketio from 'socket.io-client';
import { Subject, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MarketData } from './market-data.model';

@Injectable({
  providedIn: 'root'
})
export class MarketDataService {


  private baseUrl = environment.marketDataService;
  private socket;
  constructor(private httpClient: HttpClient) { }


  initializeMarketDataSocket() {

    this.socket = socketio(this.baseUrl);


  }


  getSocketInstance() {
    return this.socket;
  }

  getInitialMarketStatus() {
    return this.httpClient.get<MarketData[]>(`${environment.apiUrl}api/market`);
  }

  getUpdates() {

    let marketSub = new Subject<MarketData[]>();
    let marketSubObservable = marketSub.asObservable();

    this.socket.on('market', (marketStatus: MarketData[]) => {
      marketSub.next(marketStatus);
    });

    return marketSubObservable;
  }
}