import { Monitor } from './Monitor';
import { Cpu } from './CPU';
import { Keyboard } from './Keyboard';

export class Computer {

  public monitor: Monitor;
  public cpu: Cpu;
  public keyboard: Keyboard;

  constructor() {
    this.monitor = new Monitor();
    this.cpu = new Cpu();
    this.keyboard = new Keyboard();
  }
  public description = 'This Matrix computer';
  complete() {
    return `${this.description} has ` +
      `${this.monitor.monitorNo} monitors, ${this.cpu.cpuNo} cpus and, ${this.keyboard.keyboardNo} keyboard.`;
  }
}
