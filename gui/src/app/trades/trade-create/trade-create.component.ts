import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';

import { ActivatedRoute, Router } from '@angular/router';
import { Trade } from '../trade.model';
import { TradeService } from '../trade.service';

@Component({
  selector: 'app-trade-create',
  templateUrl: './trade-create.component.html',
  styleUrls: ['./trade-create.component.css']
})
export class TradeCreateComponent implements OnInit {

  tradeCreateFlag: boolean;

  tradeCreateButton: boolean = true;

  tradeEditFlag: boolean;

  mode = "create";
  tradeId;

  trade: Trade = {

    quantity: 0,

    tradeDate: null,


    commodity: null,

    price: 0,

    counterparty: null,

    location: null,

    side: null,

    id: null,

    tradeId: null,

    creator: null


  };
  ngOnInit() {



    this.route.paramMap.subscribe(params => {

      if (params.has("id")) {


        this.mode = "edit";

        this.tradeEditFlag = true;
        this.tradeCreateButton = false;
        this.tradeId = params.get("id")



        this.tradeService.getTrade(this.tradeId).subscribe(trade => {

          this.trade = {


            quantity: trade.quantity,

            tradeDate: trade.tradeDate,


            commodity: trade.commodity,

            price: trade.price,

            counterparty: trade.counterparty,

            location: trade.location,

            side: trade.side,

            id: trade._id,

            tradeId: trade.tradeId,

            creator: trade.creator


          };
        })
      }



    })



  }

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


  counterparties = [
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

  constructor(private tradeService: TradeService, private route: ActivatedRoute, private router: Router) { }


  onTradeCreate() {


    this.tradeCreateFlag = true;

    this.router.navigate(['/trades']);
  }

  onTradeCancel() {

    this.tradeCreateFlag = false;

    this.tradeCreateButton = true;

    this.tradeEditFlag = false;

    this.router.navigate(['/trades']);

  }

  onTrade(form: NgForm) {

    if (form.invalid) {
      return
    }

    if (this.mode == "create") {

      let trade: Trade = {


        quantity: form.value.quantity,

        tradeDate: form.value.tradeDate,

        id: null,

        commodity: form.value.commodity,

        price: form.value.price,

        counterparty: form.value.counterparty,

        location: form.value.location,

        side: form.value.side,

        tradeId: null,

        creator: null

      }



      this.tradeService.addTrade(trade);
    }

    else if (this.mode == "edit") {



      let trade = {
        quantity: form.value.quantity,

        tradeDate: form.value.tradeDate,

        id: this.tradeId,

        commodity: form.value.commodity,

        price: form.value.price,

        counterparty: form.value.counterparty,

        location: form.value.location,

        side: form.value.side,

        tradeId: form.value.tradeId,

        creator: this.trade.creator


      }

      this.tradeService.updateTrade(this.tradeId, trade);


    }

    form.onReset();
  }
}
