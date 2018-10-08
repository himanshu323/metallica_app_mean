import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ViewChild } from '@angular/core';
import { TradeService } from '../../trade.service';
import { Trade } from '../../trade.model';
import { TradeSearch } from '../../trade-search.model';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';
import { SocketService } from '../../socket.service';


@Component({
  selector: 'app-trade-list',
  templateUrl: './trade-list.component.html',
  styleUrls: ['./trade-list.component.css']
})
export class TradeListComponent implements OnInit {

  trades:Trade[];

  selectedRowIndex: number = -1;

  userIsAuthenticated:boolean;

  private authStatusSub:Subscription;

  userId:string;

  commodityFilter;

  locationFilter;

  displayedColumns: string[] = ['tradeDate','tradeId', 'commodity', 'side', 'qty','price','counterparty','location','actions'];

  dataSource;

  pageSizeOptions=[1,5, 10, 20];
  
  @ViewChild(MatSort) sort:MatSort;

  @ViewChild(MatPaginator) paginator:MatPaginator;

  constructor(private traderService:TradeService,private router:Router,private authService:AuthService,
    private socketService:SocketService) { 




  }

  ngOnInit() {

    

    this.userIsAuthenticated=this.authService.getIsAuthenticated();
    this.userId=this.authService.getUserId();
   this.authStatusSub= this.authService.getAuthStatusListener().subscribe(isAuthenticated=>{
        this.userIsAuthenticated=isAuthenticated;
        this.userId=this.authService.getUserId();
    })

    this.traderService.getAllTrades();

    this.traderService.getTradeListener().subscribe(data=>{

      console.log("Trade")
      console.log(data.trades);
      this.trades=data.trades;
      this.dataSource=new MatTableDataSource(this.trades);
      this.dataSource.filterPredicate=(data:Trade,filterValue:TradeSearch)=>{


        return this.traderService.filterSearchCriteria(data,filterValue);
    
    }

      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;

      this.traderService.getSearchTradeListener().subscribe(tradeSearch=>{
        console.log("Helloooooooooo")
          this.dataSource.filter=tradeSearch;

      })
    })


  this.socketService.getSocketInstance().on("notifyTrade",()=>{


    this.router.navigate(['/trades']);

    this.traderService.getAllTrades();

    

})
  
  }

  onDelete(tradeId){


    this.traderService.deleteTrade(tradeId).subscribe(resp=>{

      console.log(resp);

      this.router.navigate(["/trades"]);

      
      this.traderService.getAllTrades();


        this.socketService.sendNotification("changeTrade");

    })
  }

  ngOnDestroy(): void {
    
    this.authStatusSub.unsubscribe();
}

highlight(row){
  this.selectedRowIndex = row.id;
}


}
