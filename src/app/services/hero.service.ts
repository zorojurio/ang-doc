import { Injectable } from '@angular/core';
import { Hero } from '../heros/hero';
import { HEROES } from '../heros/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
