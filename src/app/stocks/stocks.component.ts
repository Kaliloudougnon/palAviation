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
  constructor( private stocks:StocksService,private fb:FormBuilder) {

  }

  ngOnInit(): void {
    this.searchForm=this.fb.group(
      {
        keyWord:this.fb.control("")
      }
    );
    for (let i=0;i<15;i++)
    this.stocksList.push(this.stocks.stockList[i]);
  }

  search() {
    this.stocksList=[];
    this.stocks.stockList.forEach((c: Piece)=>{
      if (c.partNumber.includes(this.searchForm.value.keyWord.trim())){
        this.stocksList.push(c);
        this.stocksList=this.stocksList.splice(0,15);
      }
    })
  }
}
