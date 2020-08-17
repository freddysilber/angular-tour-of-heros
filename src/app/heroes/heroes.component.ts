import { Component, OnInit } from '@angular/core'

import { Hero } from '../hero'
import { HeroService } from '../hero.service'
import { MessageService } from '../message.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heros: Hero[]
  selectedHero: Hero

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getHeros()
  }

  getHeros(): void {
    this.heroService.getHeroes()
      .subscribe(heros => this.heros = heros)
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero
    this.messageService.add(`HerosComponent: Selected hero id=${hero.id}`)
  }
}