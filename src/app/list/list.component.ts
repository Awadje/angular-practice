import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../star-wars.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  characters = []
  activatedRoute: ActivatedRoute
  swService: StarWarsService
  loadedSide = 'all'
  subcription: Subscription

  constructor(activatedRoute: ActivatedRoute, swService: StarWarsService) {
    this.activatedRoute = activatedRoute
    this.swService = swService
   }

  ngOnInit() {
    this.swService.fetchCharacters()
    this.activatedRoute.params.subscribe(
      (params) => {
        this.characters = this.swService.getCharacters(params.side)
        this.loadedSide = params.side;
      }
    )
    this.subcription = this.swService.charactersChanged.subscribe(
      () => {
        this.characters = this.swService.getCharacters(this.loadedSide)
      }
    )
  }

  ngOnDestroy() {
    this.subcription.unsubscribe()
  }
}
