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

  hours: number = 2;
  minutes: number = 0;
  seconds: number = 0;

  ngOnInit(): void {

    this.counter = setInterval(() => {

      this.showMessage = false;

      if (this.seconds > 0) {
        console.log('segundos é maior do que zero')
        this.seconds = this.seconds - 1;
      } else {
        this.seconds = 2;

        if (this.minutes > 0) {
          console.log('minutos é maior do que zero')
          this.minutes = this.minutes - 1;
        } else {
          this.minutes = 2;
        }

        
      }
      
      if(this.minutes === 0 && this.seconds === 0){
        console.log('segundos e minutos são iguais a zero')
        this.hours = this.hours - 1;
      }
      

      if (this.hours === 0 && this.minutes === 0 && this.seconds === 0) {
        console.log('contador chegou ao fim!')
          this.stopCounter()

          setTimeout(()=> {
            this.showMessage = true;
          },300)
        }

    }, 1000);
  }

  stopCounter() {
    clearInterval(this.counter);
  }
}
