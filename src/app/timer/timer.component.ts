import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  startTimer: number = 10;
  

  ngOnInit(): void {

   setInterval(()=> {
    this.startTimer = this.startTimer -1;

    if(this.startTimer === 0){
      console.log('chegou no zero')

    }
    return this.startTimer
   },1000)

}


}
