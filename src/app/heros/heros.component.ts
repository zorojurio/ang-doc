import {Component, OnInit} from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';
import {HeroService} from './../services/hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heroes: Hero[] | undefined;
  selectedHero: Hero | undefined;
  constructor(private heroService: HeroService) {
  
  }

  ngOnInit(): void {
    this.getHeros();
  }
  getHeros(): void{
    this.heroes = this.heroService.getHeroes()
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


}
