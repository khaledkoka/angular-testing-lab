import { Component } from '@angular/core';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent {
  isOn = false;

  switchStatus() {
    this.isOn = !this.isOn;
  }

  get message() {
    return `The machine is ${this.isOn ? 'On' : 'Off'}`;
  }
}
