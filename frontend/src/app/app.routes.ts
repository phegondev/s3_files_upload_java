import { Routes } from '@angular/router';
import { AddfileComponent } from './addfile/addfile.component';
import { HomeComponent } from './home/home.component';



export const routes: Routes = [

    { path: 'add', component: AddfileComponent },
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect to HomeComponent for any unknown routes
    
];


