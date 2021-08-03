import {Component, OnInit} from '@angular/core';
import {PRODUCTS} from "../../mock-products";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories = PRODUCTS;

  constructor() {
  }

  ngOnInit(): void {
  }

}
