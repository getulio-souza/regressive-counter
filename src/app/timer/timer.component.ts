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
  seconds: number = 0;

  ngOnInit(): void {

    this.counter = setInterval(() => {

      if (this.seconds > 0) {
        this.seconds = this.seconds - 1;
      } else {
        this.seconds = 59;

        if (this.minutes > 0) {
          this.minutes = this.minutes - 1;
        } else {
          this.minutes = 59;
        }

        if (this.minutes === 0 && this.seconds === 0) {
          this.hours = this.hours - 1;
        } else {
          this.stopCounter()
        }

      }
    }, 1000);
  }

  stopCounter() {
    clearInterval(this.counter);
  }
}
