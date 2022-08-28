import { Component, OnInit } from '@angular/core';
import { SearchKeysEnum } from '../../enums/searchKeys.enum';
import { Game } from '../../interfaces/game.interface';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  
  public games: Game[] = [];
  public initialState: Game[] = [];
  public filtredGames: Game[] = [];
  public message: string = '';

  constructor(private readonly homeService: HomeService) { }


  ngOnInit(): void {
    this._getGames();
  }

  private _getGames(): void {
    this.homeService.getGames().subscribe((games: Game[]) => {
      this.games = this.initialState = this.filtredGames = games;
    });
  }

  public trackById(index: number, game: Game): number {
    return game.id;
  }

  public searchByString(key: string): void {
    if (key) {
      this.games = this.initialState.filter(game => game.name.toLocaleLowerCase().includes(key.toLocaleLowerCase()));
      if (!this.games.length) this.message = 'There is no games matchs the search string '; 
    } else {
      this.clearFilters();
    }
  }

  public searchByKey(key: SearchKeysEnum ): void {
        if (key === SearchKeysEnum.SCORE) this.games.sort((a,b) => b.rating - a.rating);
        else if (key === SearchKeysEnum.NAME) this.games.sort((a, b) => (a.name > b.name ? -1 : 1)).reverse();
        else this.games.sort((a,b) => a.first_release_date - b.first_release_date);
  }

  public searchByMinRating(rate: number): void {
    this.games = this.initialState.filter((game) => game.rating >= rate);
    if (this.games.length === 0) this.message = 'There is no games matching this rating ' + rate; 
  }

  public clearFilters(): void {
    this.games = this.initialState;
  }

}
