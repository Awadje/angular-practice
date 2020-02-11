import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() character
  @Output() chosenSide = new EventEmitter<{name: string, side: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  consoleLogTest() {
    return true;
  }

  side(side: string) {
    this.chosenSide.emit({name: this.character.name, side});
  }
}
