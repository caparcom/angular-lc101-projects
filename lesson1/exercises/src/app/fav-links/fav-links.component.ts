import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks =["https://www.nationalgeographic.com/animals/birds/facts/ostrich", "https://wonderopolis.org/wonder/do-ostriches-really-bury-their-heads-in-the-sand"]
  constructor() { }

  ngOnInit() {
  }

}
