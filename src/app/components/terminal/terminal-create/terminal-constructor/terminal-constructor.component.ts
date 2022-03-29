import { Component, OnInit } from '@angular/core';
import 'fabric';

declare const fabric;

@Component({
  selector: 'terminal-constructor',
  templateUrl: './terminal-constructor.component.html',
  styleUrls: ['./terminal-constructor.component.scss']
})
export class TerminalConstructorComponent implements OnInit {

  private canvas;

  constructor() {

  }

  ngOnInit() {
    this.canvas = new fabric.Canvas('canvas');

    let rect = new fabric.Rect({
      width: 20,
      height: 20,
      top: 100,
      left: 100
    });
  }

}
