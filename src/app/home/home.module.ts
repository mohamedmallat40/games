import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GamesItemComponent } from './components/games-item/games-item.component';
import { GamesFilterComponent } from './components/games-filter/games-filter.component';
import { LayoutModule } from '../layout/layout.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [
    HomeComponent,
    GamesListComponent,
    GamesItemComponent,
    GamesFilterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    NgxSkeletonLoaderModule
  ]
})
export class HomeModule { }
