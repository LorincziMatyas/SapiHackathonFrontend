import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboardpage',
  templateUrl: './leaderboardpage.component.html',
  styleUrls: ['./leaderboardpage.component.scss'],
})
export class LeaderboardpageComponent implements OnInit {
  players: any[] = [
    { name: 'Gedeon', score: 100 },
    { name: 'Cecilia', score: 80 },
    { name: 'Peter', score: 110 },
    { name: 'Eszter', score: 90 },
    { name: 'Daniel', score: 0 },
    { name: 'Berni', score: 120 },
    { name: 'Tamas', score: 130 },
    { name: 'Julia', score: 40 },
  ];

  constructor() {}
  ngOnInit(): void {
    this.players.sort((a, b) => b.score - a.score);
  }
}
