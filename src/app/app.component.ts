import {Component, OnInit} from '@angular/core';
import {HeroesComponent} from "./heroes/heroes.component";
import {MessagesComponent} from "./messages/messages.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    HeroesComponent,
    MessagesComponent,
    RouterOutlet,
    RouterLink
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) { }

  title = 'Tour of Heroes';
}
