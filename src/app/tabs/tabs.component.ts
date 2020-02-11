import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [
    {
      name: 'Luke',
      side: 'light'
    },
    {
      name: 'Darth',
      side: 'dark'
    }
  ];
  chosenList = 'all';
  sides = ['all', 'dark', 'light'];

  constructor() { }

  ngOnInit(): void {
  }

  onChoose(side) {
    this.chosenList = side;
  }

  getCharacters() {
    if (this.chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter(character =>
      character.side === this.chosenList
    );
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    })
    this.characters[pos].side = charInfo.side;
  }
}
