import {Component, Input, OnInit} from '@angular/core';
import { Game } from '../../interfaces/game.interface';

@Component({
  selector: 'app-games-item',
  templateUrl: './games-item.component.html',
  styleUrls: ['./games-item.component.scss']
})
export class GamesItemComponent implements OnInit {
  @Input('game') public game: Game | undefined; // TODO Change any to the specific type


  ngOnInit(): void {
  }

}
