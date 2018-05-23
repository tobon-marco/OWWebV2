import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Hero } from './Hero';
import { Observable } from 'rxjs';

@Injectable()
export class HeroesService
{
    configUrl = 'http://192.168.0.7:50342/heroes/';
    constructor(private http: HttpClient) 
    { 
    }

    // GET ALL HEROES IN OUR SYSTEM
    // 
    getHeroes (): Observable<Hero[]>
    {
        return this.http.get<Hero[]>(this.configUrl);
    }
    
    // GET A SPECIFIC HERO
    //
    getHero (name: String): Observable<Hero> 
    {
        console.log(this.configUrl + name);
        return this.http.get<Hero>(this.configUrl + name);
    }

    //GET SKINS FOR A SPECIFIC HERO
    //
    getSkins ()
    {

    }

    //GET ABILITIES
    //
    getAbilities ()
    {

    }

}
