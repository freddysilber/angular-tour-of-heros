import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

import { Hero } from './hero'
import { HEROES } from './mock-heros'
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heros')
    return of(HEROES)
  }
}