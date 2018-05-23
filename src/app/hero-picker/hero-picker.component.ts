import { ActivatedRoute, Params } from '@angular/router';
import { Component, Input, OnInit}  from '@angular/core';
import { Location } from '@angular/common';

import { HeroesService } from '../heroes-service.service';


@Component(
{
    selector:'hero-picker',
    templateUrl: './hero-picker.component.html',
	styleUrls: ['./hero-picker.component.css'], 
})

export class HeroPickerComponent implements OnInit
{
    skins: {}; 
	errorMessage: string;

	//CONSTRUCTOR ========================================================
    constructor (
        private heroService: HeroesService,
        private route: ActivatedRoute,
        private location: Location
     )
     {}

	//WHEN WE INITIALIZE IT ==================================================
    ngOnInit(): void
    {
    }

	//ALLOW TO GO BACK ================================================================
    goBack(): void
    {
        this.location.back();
    }
}