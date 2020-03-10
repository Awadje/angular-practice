import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
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
  http: HttpClient

  charactersChanged = new Subject<void>()

  constructor(http: HttpClient) {
    this.http = http
  }

  fetchCharacters() {
    this.http.get('https://swapi.co/api/people')
    .map((response: Response) => {
      const data = response
      const extractedChars = data.results
      const chars = extractedChars.map((char) => {
        return{ name: char.name, side: ''}
      })
      return chars
    })
    .subscribe(
      (data) => {
        console.log(data)
        this.characters = data
        this.charactersChanged.next()
      }
    )
  }

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

