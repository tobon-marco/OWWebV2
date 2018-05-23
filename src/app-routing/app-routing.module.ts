import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HeroPickerComponent } from  '../app/hero-picker/hero-picker.component';
import { HeroesComponent } from '../app/heroes/heroes.component';
import { HeroDetailComponent } from '../app/hero-detail/hero-detail.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';

const routes: Routes = 
[
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:name', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heropicker', component: HeroPickerComponent },
];

@NgModule 
({
    imports: [ RouterModule.forRoot(routes) ] ,
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
