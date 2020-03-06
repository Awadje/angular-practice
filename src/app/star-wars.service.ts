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

