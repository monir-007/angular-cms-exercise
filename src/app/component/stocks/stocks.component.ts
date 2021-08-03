import {Component, OnInit} from '@angular/core';
import {STOCKS} from "../../mock-stock-data";

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  stocks = STOCKS;

  constructor() {
  }

  ngOnInit(): void {
  }

}
