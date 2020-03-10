import { Subject } from 'rxjs';

export class StarWarsService {
  private characters = [
    {
      name: 'Luke',
      side: 'light'
    },
    {
      name: 'Darth',
      side: 'dark'
    }
  ];

  charactersChanged = new Subject<void>()

  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter(character =>
      character.side === chosenList
    );
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    })
    this.characters[pos].side = charInfo.side;
    this.charactersChanged.next()
  }

  addCharacter(name, side) {
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    })

    if(pos !== -1) {
      return
    }

    const newChar = {name, side}
    this.characters.push(newChar)
  }
}

