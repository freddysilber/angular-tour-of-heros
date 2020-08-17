import { Component, OnInit } from '@angular/core'

import { Hero } from '../hero'
import { HeroService } from '../hero.service'
import { MessageService } from '../message.service'

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {
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
    this.heroService.getHeros()
      .subscribe(heros => this.heros = heros)
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero
    this.messageService.add(`HerosComponent: Selected hero id=${hero.id}`)
  }
}