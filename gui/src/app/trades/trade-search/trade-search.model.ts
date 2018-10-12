export interface TradeSearch{


    tradeFromDate:Date;
    tradeToDate:Date;
    commodity:String;
    side:{buy:boolean,sell:boolean};
    counterparty:String;
    location:String
}