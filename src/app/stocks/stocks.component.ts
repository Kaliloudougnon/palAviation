import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Piece } from '../piece';
import { StocksService } from '../stocks.service';
@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stocksList:Piece[]=[];
  searchForm!:FormGroup;
  constructor( private stocks:StocksService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.searchForm=this.fb.group(
      {
        keyWord:this.fb.control("")
      }
    )
    this.stocksList=this.stocks.stockList.splice(0,15);
  }

  search() {
    this.stocksList=[];
    console.log(this.searchForm.value.keyWord)
    this.stocks.stockList.forEach((c: Piece)=>{
      console.log(c.partNumber)
      if (c.partNumber.includes(this.searchForm.value.keyWord)){
        this.stocksList.push(c);
        this.stocksList=this.stocksList.splice(0,15);
      }
    })
  }
}
