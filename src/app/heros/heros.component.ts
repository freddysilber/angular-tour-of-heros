import { Component, OnInit } from '@angular/core'

import { Hero } from '../hero'
import { HEROES } from '../mock-heros'

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {
  heros: Hero[] = HEROES
  selectedHero: Hero

  constructor() { }

  ngOnInit(): void { }

  onSelect(hero: Hero) {
    this.selectedHero = hero
  }
}