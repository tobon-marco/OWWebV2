import { Component, OnInit } from '@angular/core';

// My created classes
import { Hero } from '../Hero';
import { Ability } from '../Ability';
import { HeroesService } from '../heroes-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
    heroes: Hero [];
    errorMessage: String;
    selectedHero: Hero;
    catHeroes: Hero[];

    mode = 'Observable';
    constructor(private heroSer: HeroesService, private router: Router) 
    {

    }

  ngOnInit() {
    this.heroSer.getHeroes()
      .subscribe 
        ( 
          data => 
          { 
            this.heroes = data;
            console.log(data);
          }
        );
  }

	onSelect(hero: Hero): void
	{
    console.log("Selected hero:" + hero.name);
		this.selectedHero = hero;
	}

	gotoDetail(): void 
	{
		this.router.navigate(['/detail', this.selectedHero.name]);
  }
  
  getHeroesByCategory(type: Number)
  {
    console.log("In heroes cat");
    this.catHeroes = new Array<Hero>();
    for (let elhero of this.heroes)
    {
      if (elhero.type == type)
      {
        this.catHeroes.push(elhero);
      }
    }
    console.log(this.catHeroes + "===============")
  }

}
