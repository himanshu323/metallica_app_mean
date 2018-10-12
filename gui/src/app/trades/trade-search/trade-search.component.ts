import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subject } from 'rxjs';
import { TradeService } from '../trade.service';
import { TradeSearch } from './trade-search.model';


@Component({
  selector: 'app-trade-search',
  templateUrl: './trade-search.component.html',
  styleUrls: ['./trade-search.component.css']
})
export class TradeSearchComponent implements OnInit {

  clearFlag:boolean;

  commodities = [
    { value: 'aluminium', viewValue: 'Aluminium' },
    { value: 'iron', viewValue: 'Iron' },
    { value: 'copper', viewValue: 'Copper' },
    { value: 'zinc', viewValue: 'Zinc' },
    { value: 'gold', viewValue: 'Gold' },
    { value: 'silver', viewValue: 'Silver' }
  ];

  sides = [
    { value: 'buy', viewValue: 'Buy' },
    { value: 'sell', viewValue: 'Sell' }
  ];


  counterParties = [
    { value: 'Loreum', viewValue: 'Loreum' },
    { value: 'Ipsum', viewValue: 'Ipsum' },
    { value: 'Dolor', viewValue: 'Dolor' },
    { value: 'Amet', viewValue: 'Amet' }
  ];

  locations = [
    { value: 'London', viewValue: 'London' },
    { value: 'New York', viewValue: 'New York' },
    { value: 'Singapore', viewValue: 'Singapore' },
    { value: 'Denver', viewValue: 'Denver' }
  ];
  constructor(private tradeService:TradeService) { }

  ngOnInit() {
  }


  onSearch(form:NgForm){

    if (this.clearFlag) {

      console.log("inside")
      form.onReset();
       this.clearFlag=false;
      return this.tradeService.getAllTrades();
    }

    if (form.invalid) {
      console.log("Invalid");
      return;
    }

    

    
    
    
    console.log(form);


    let tradeSearch:TradeSearch={

    tradeFromDate:form.value.fromDate,
    tradeToDate:form.value.toDate,
    commodity:form.value.commodity,
    side:{buy:form.value.buy,sell:form.value.sell},
    counterparty:form.value.counterparty,
    location:form.value.location
    }

    this.tradeService.searchTrade(tradeSearch);

   

    form.onReset();
  }


}
