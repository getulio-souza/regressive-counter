import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  counter: any;
  timer: any;
  showMessage: boolean = false;
  showTimer: boolean = true;

  hours: number = 24;
  minutes: number = 0;
  seconds: number = 59;

  ngOnInit(): void {
    this.counter = setInterval(() => {

      if (this.seconds > 0 && this.seconds < 60) {
        this.seconds = this.seconds - 1;
      }

      if (this.seconds === 0) {
        this.minutes = this.minutes - 1;
      }

      if (this.seconds === 0 && this.minutes === 0) {
        this.hours = this.hours - 1;
      }

    }, 1000);
  }

  stopCounter() {
    clearInterval(this.counter);
  }
}

//  this.counter = setInterval(()=> {

//   this.timer = this.timer -1;

//   if(this.timer <= 0){
//     this.stopCounter()

//     this.showMessage = true;
//     this.showTimer = false;
//   }
//  },1000)
