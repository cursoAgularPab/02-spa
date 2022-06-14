import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private _heroesService:HeroesService,
              private router:Router) { 
    console.log("HeroesComponent Constructor")
  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(id:number){
    console.log(id);
    this.router.navigate(['/heroe', id]);
  }

}
