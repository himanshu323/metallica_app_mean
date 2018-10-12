const request=require("supertest");

const expect=require("expect")
let {app}=require("../server")
const market = require('../market');


describe("Test the Market Data GET API",()=>{


        it("should be able to retrieve the market data on get api/market ",(done)=>{

            
            request(app).get("/api/market")
           
            .expect(200)
            .expect(resp=>{
                expect(resp.body).toEqual(market.marketPositions)

              
            })
            .end(done)

    })

   
           
})