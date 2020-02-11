import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
    @Input() character;
    @Output() chosenSide = new EventEmitter<{name: string, side: string}>();
    swService: StarWarsService;

    constructor(swService: StarWarsService) {
      this.swService = swService;
    }

    ngOnInit(): void {
    }

    consoleLogTest() {
      return true;
    }

    side(side: string) {
      this.swService.onSideChosen({name: this.character.name, side});
  }
}
