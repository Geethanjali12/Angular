import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit { 

  name = 'Geetha';
  day = new Date();
  number = 1234.56;
  percentage = 56;
  obj = { name:'geetha', age: '24'};
  array = [1,2,3,4];

  constructor() {}

  ngOnInit(): void {
  }

}
