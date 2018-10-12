
const moment = require('moment');
const marketPositions = 
    [  {
        account:"AlphabetInc.",
        price:6855,
        diff:0}
    
    ,
        {
            account: "DOW JONES",
            price: 745.5,
            diff: 0
        }
,
        {
            account: "S&P 500",
            price: 199.13,
            diff: 0
        }

        ,

        {
            account: "KOSPI",
            price: 19944.55,
            diff: 0
        }
,
        {
            account: "HSI",
            price: 22150.40,
            diff: 0
        
        }
,
        {
            account: "UKX",
            price: 123.45,
            diff: 0
            
        }
// ,
//         // {
//         //     account: "DAX",
//         //     price: 520.45,
//         //     diff: 0

//         // }


        , {
            account: "VZ",
            price: 300.33,
            diff: 0

        }


    
    
    
    ]



let counter = 0;

function updateMarket() {
    const diff = Math.floor(Math.random() * 1000) / 100;


let index=0;
    if (counter % 2 === 0) {

        marketPositions.forEach((market)=>{

            if (index % 2 === 0){
                const diff = Math.floor(Math.random() * 1000) / 100;
                market.price = parseFloat(market.price + diff).toFixed(2);
                market.diff=`+${diff}`;
                if (market.price < 0) {
                    market.price = "9876";
                }
            }

            else{
                const diff = Math.floor(Math.random() * 1000) / 100;
                market.price = parseFloat(market.price - diff).toFixed(2);
                market.diff = `-${diff}`
                if (market.price < 0) {
                    market.price = "9876";
                }
            }
            index ++;
        })
    }

    else{

        marketPositions.forEach((market) => {

            if (index % 2 === 0) {
                const diff = Math.floor(Math.random() * 1000) / 100;
                market.price = parseFloat(market.price - diff).toFixed(2);
                market.diff = `-${diff}`;

                if(market.price<0){
                    market.price="9876";
                }
            }

            else {
                const diff = Math.floor(Math.random() * 1000) / 100;
                market.price = parseFloat(market.price + diff).toFixed(2);
                market.diff = `+${diff}`

                if (market.price < 0) {
                    market.price = "9876";
                }
            }
            index++;
        })

    }
    
    counter++;
}

module.exports = {
    marketPositions
   ,updateMarket
};