import { Component } from '@angular/core';
import {Computer} from './computer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public computer: Computer;
  constructor(){
    this.computer = new Computer();
  }

  makeComputer(){
    return this.computer.complete();
  }

}
