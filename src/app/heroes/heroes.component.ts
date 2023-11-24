import { Component } from '@angular/core';
import { Hero } from '../hero';
import {FormsModule} from "@angular/forms";
import {NgFor, NgIf, UpperCasePipe} from "@angular/common";
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  standalone: true,
  templateUrl: './heroes.component.html',
  imports: [
    FormsModule,
    UpperCasePipe,
    NgFor,
    NgIf
  ],
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes = HEROES;

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
