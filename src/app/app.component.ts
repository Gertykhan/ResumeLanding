import { Component } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('animationTriggerName', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1.2s', style({ opacity: 1 })),
      ]),
      transition('* => void', [
        animate('0.4s', style({ opacity: 0 })),
      ]),
    ])
  ]
})
export class AppComponent {
  title = 'ResumeLanding';

  table1Color: string = "#FFFFFF";
  table2Color: string = "#FFFFFF";
  tester = false;
  topper: string = "-13px";

  switchColor() {
    this.table1Color = "#343434"
  }
  switchBack() {
    this.table1Color = "#FFFFFF"
  }
  switchColor2() {
    this.table2Color = "#343434"
  }
  switchBack2() {
    this.table2Color = "#FFFFFF"
  }
  press(){
    this.tester = !this.tester;
  }
  pressDecoration1(){
    this.topper = "-11px";
  }
  pressDecoration2(){
    this.topper = "-13px";
  }
  displayZero(){
    if (this.tester ===true){
      this.tester = false;
    }
  }
}
