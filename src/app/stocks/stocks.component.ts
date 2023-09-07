import { Component, OnInit } from '@angular/core';
import { Piece } from '../piece';
import { StocksService } from '../stocks.service';
@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stocksList?:Piece[];
  constructor( private stocks:StocksService) { }

  ngOnInit(): void {
    this.stocksList=this.stocks.stockList.splice(0,15);
  }

}
