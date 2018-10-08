
import { MarketPrice } from './market-price.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as socketio from 'socket.io-client';
import { Subject, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketStatusService {

  private baseUrl = 'http://localhost:3004';
  constructor(private httpClient: HttpClient) { }

  getInitialMarketStatus() {
    return this.httpClient.get<MarketPrice[]>(`${this.baseUrl}/api/market`);
  }

  getUpdates() {
    let socket = socketio(this.baseUrl);
    let marketSub = new Subject<MarketPrice>();
    let marketSubObservable = marketSub.asObservable();

    socket.on('market', (marketStatus: MarketPrice) => {
      marketSub.next(marketStatus);
    });

    return marketSubObservable;
  }
}