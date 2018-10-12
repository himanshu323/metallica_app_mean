import { Component, OnInit } from '@angular/core';
import { MarketDataService } from './market-data.service';


@Component({
  selector: 'app-market-data',
  templateUrl: './market-data.component.html',
  styleUrls: ['./market-data.component.css']
})
export class MarketDataComponent implements OnInit {

  marketStatus;

  constructor(private marketDataService: MarketDataService) { }

  ngOnInit() {

    this.marketDataService.getInitialMarketStatus().subscribe((marketStatus) => {
      this.marketStatus = marketStatus;
    });

    this.marketDataService.getUpdates().subscribe((marketStatus) => {

      this.marketStatus = marketStatus;

    })
  }

}
