import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  constructor() {
    const test$ = new Observable(subscriber =>{
      console.log('test');

      subscriber.next('1');
      subscriber.next('2');
      subscriber.next('3');
      subscriber.next('4');
      setTimeout(() => {
        subscriber.next('5');
      }, 1000);

    });
    console.log('Start');
    test$.subscribe(x => {
      console.log('1st', x);
    });
    console.log('End');
  }



  ngOnInit(): void {
  }

}
