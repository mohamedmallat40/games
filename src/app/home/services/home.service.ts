import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Game } from '../interfaces/game.interface';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private readonly _httpClient: HttpClient) {}


  // games: Game[] = [
  //   {
  //     title: 'League of Legends',
  //     image: 'https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg',
  //     score: 9,
  //     releasedDate: '1255739462',
  //     description: "League of Legends, commonly referred to as League, is a 2009 multiplayer online battle arena video game developed and published by Riot Games. Inspired by Defense of the Ancients, a custom map for Warcraft III, Riot's founders sought to develop a stand-alone game in the same genre"
  //   },
  //   {
  //     title: 'Fortnite',
  //     image: 'https://m.media-amazon.com/images/M/MV5BNzU2YTY2OTgtZGZjZi00MTAyLThlYjUtMWM5ZmYzOGEyOWJhXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg',
  //     score: 8,
  //     releasedDate: '1255739462',
  //     description: "Fortnite is a free-to-play Battle Royale game with numerous game modes for every type of game player. Watch a concert, build an island or fight."
  //   },
  //   {
  //     title: 'Counter-Strike: Global Offensive',
  //     image: 'https://gametransfers.com/wp-content/uploads/2020/06/csgo-breaks-record-for-highest-player-count-all-time.jpg',
  //     score: 7,
  //     releasedDate: '1255739462',
  //     description: "Counter-Strike: Global Offensive is a 2012 multiplayer first-person shooter developed by Valve and Hidden Path Entertainment. It is the fourth game in the Counter-Strike series"
  //   },
  //   {
  //     title: 'Red Dead Redemption 2',
  //     image: 'https://lh3.googleusercontent.com/HCUkD69MAHEOj84Yi7Kb5vxHpCePTsmQI4g9vYuVPUo-87cWE6ZZIk0tiyYzaiS9zaAFMTXRNYJaaRczRN-yQYw',
  //     score: 8,
  //     releasedDate: '1255739462',
  //     description: "Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and a prequel to the 2010 game Red Dead Redemption"
  //   },
  //   {
  //     title: 'God of War',
  //     image: 'https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg',
  //     score: 7,
  //     releasedDate: '1255739462',
  //     description: "God of War is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment. It was released in April 2018 for the PlayStation 4"
  //   },
  //   {
  //     title: 'Minecraft',
  //     image: 'https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png',
  //     score: 5,
  //     releasedDate: '1255739462',
  //     description: "Minecraft is a sandbox video game developed by Mojang Studios. The game was created by Markus 'Notch' Persson in the Java programming language"
  //   },
  //   {
  //     title: 'Hades',
  //     image: 'https://lh3.googleusercontent.com/sLgvchryv-3IQ3IEX_4n3WlMnqxb5Rz7EhYmFhkig-x7H6m2RNmtlYB5MSqQp8CQ3hm1qttUATW-GbdBFnQxbYPExQ',
  //     score: 6,
  //     releasedDate: '1255739462',
  //     description: "Hades is a roguelike action dungeon crawler video game developed and published by Supergiant Games. It was released for Microsoft Windows, macOS"
  //   }
  // ]

  public getGames(): Observable<Game[]> {
    return this._httpClient.get<Game[]>(`${environment.BASE_URI}`).pipe(delay(2000));
  }
}
