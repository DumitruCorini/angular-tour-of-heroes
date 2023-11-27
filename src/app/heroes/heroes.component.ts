import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import {NgFor, NgIf, UpperCasePipe} from "@angular/common";
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  standalone: true,
  imports: [
    FormsModule,
    UpperCasePipe,
    NgFor,
    NgIf,
    HeroDetailComponent,
    RouterLink
  ],
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
