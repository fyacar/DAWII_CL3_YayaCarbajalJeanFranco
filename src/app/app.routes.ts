import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Pregunta2Component } from './home/pregunta2/pregunta2.component';

export const routes: Routes = [
    {path:"home", component: HomeComponent,
        children:[ {path:"pregunta2", component: Pregunta2Component}]
    },
    
   
    {path:"", redirectTo: "home", pathMatch: "full"},
    {path:"**", component: PageNotFoundComponent}
];
