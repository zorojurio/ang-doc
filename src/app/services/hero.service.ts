import { Injectable } from '@angular/core';
import { Hero } from '../heros/hero';
import { HEROES } from '../heros/mock-heroes';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
