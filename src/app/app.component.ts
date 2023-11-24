import { Component } from '@angular/core';
import {HeroesComponent} from "./heroes/heroes.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeroesComponent
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
