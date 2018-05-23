
import { Component, Input, OnInit}  from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

//import 'rxjs/add/operator/switchMap';
import { HeroesService } from '../heroes-service.service';
import { Hero } from '../Hero';


@Component(
{
    selector:'hero-detail',
    templateUrl: './hero-detail.component.html',
	styleUrls: ['./hero-detail.component.css'], 
})

export class HeroDetailComponent implements OnInit
{
    hero: Hero;
    skins: {}; 
    name: String;
	errorMessage: string;

	//CONSTRUCTOR ========================================================
    constructor (
        private heroService: HeroesService,
        private route: ActivatedRoute,
        private location: Location
     )
     {}

	//WHEN WE INITIALIZE IT ==================================================
    ngOnInit()
    {
        // Get parameter from when routed in this case the name of the 
        //  hero we are looking for
        this.route.params.subscribe(
            params => 
                {
                this.name = params['name'];
                }
        );

        //Get hero from our REST service
        console.log(this.name + " here");
        this.heroService.getHero(this.name)
            .subscribe (
                data => {this.hero = data;
                }) ;
    }

	//ALLOW TO GO BACK ================================================================
    goBack(): void
    {
        this.location.back();
    }
}