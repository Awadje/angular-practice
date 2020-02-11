import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() characters;
  @Output() chosenSide = new EventEmitter<{name: string, side: string}>();

  constructor() { }

  ngOnInit(): void {
    console.log('characters', this.characters);
  }

  onChosenSide(event){
    this.chosenSide.emit(event);
  }


}
