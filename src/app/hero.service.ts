import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Hero } from './hero'
import { HEROES } from './mock-heros'
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  getHeroes(): Observable<Hero[]> {
    this.log(`fetched heros`)
    return of(HEROES)
  }

  getHero(id: number): Observable<Hero> {
    this.log(`fetched hero id=${id}`)
    return of(HEROES.find(hero => hero.id === id))
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`)
  }
}