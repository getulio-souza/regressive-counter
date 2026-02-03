import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'enquete-daily';

  chooseTwoHours(){
    console.log('escolheu duas horas de daily')
  }

  chooseDaily5Am(){
    console.log('escolheu daily as 5 da manha')
  }
}
