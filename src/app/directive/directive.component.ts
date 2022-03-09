import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  users = [
  { name: 'abc', age: '20', gender: 'f'},
  { name: 'def', age: '21', gender: 'm'},
  { name: 'ghi', age: '22', gender: 'f'},
  { name: 'jkl', age: '23', gender: 'm'},
  { name: 'mno', age: '24', gender: 'f'},
  { name: 'pqr', age: '25', gender: 'm'},
  { name: 'stu', age: '26'}

];
  constructor() { }

  ngOnInit(): void {
  }

}
