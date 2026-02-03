import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent {

  @Output()twoHours = new EventEmitter<any>();
  @Output()daily5aM = new EventEmitter<any>();

  twoHoursDaily(){
    this.twoHours.emit()
  }

  dailyAt5Am(){
    this.daily5aM.emit()
  }

}
