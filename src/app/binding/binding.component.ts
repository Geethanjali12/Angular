import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  className = 'Angular';
  classesName = 'Angular';

  print(event){
  console.log(event);
  this.className = event.target.value;
    }


  constructor() { }
 
  ngOnInit(): void {
  }

}
