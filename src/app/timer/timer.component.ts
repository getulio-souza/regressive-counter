import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  counter: any;
  timer: number = 10;
  showMessage: boolean = false;
  showTimer: boolean = true;

  ngOnInit(): void {

   this.counter = setInterval(()=> {

    this.timer = this.timer -1;

    if(this.timer <= 0){
      this.stopCounter()

      this.showMessage = true;
      this.showTimer = false;
    }
   },1000)

}

  stopCounter(){
    clearInterval(this.counter)
  }
}
