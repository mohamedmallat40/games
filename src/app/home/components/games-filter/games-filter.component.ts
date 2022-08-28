import { Component, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { SearchKeysEnum } from '../../enums/searchKeys.enum';

@Component({
  selector: 'app-games-filter',
  templateUrl: './games-filter.component.html',
  styleUrls: ['./games-filter.component.scss']
})
export class GamesFilterComponent {

  @Output('searchByString') searchByString: EventEmitter<string> = new EventEmitter();
  @Output('minRating') minRating: EventEmitter<number> = new EventEmitter();
  @Output('releasedDate') searchByKey: EventEmitter<SearchKeysEnum> = new EventEmitter();
  @Output('clearFilters') clearFilters: EventEmitter<boolean> = new EventEmitter();
  public searchKeys = SearchKeysEnum;
  
  public searchString(event: any): void {
    this.searchByString.emit(event.target.value);
  }

  public searchByMinRating(event: any): void {
    this.minRating.emit(event.target.value);
  }

  public onChangeKey(event: any): void {
    this.searchByKey.emit(event?.target.value);
  }

  public onClear(): void {
    this.clearFilters.emit(true);
  }

}
