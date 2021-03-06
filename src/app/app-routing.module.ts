import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServerErrorComponent } from './components/server-error/server-error.component';
import { MainComponent } from './components/main/main.component';

import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"home", component: HomeComponent},
  { path: 'server-error', component: ServerErrorComponent},
  { path: 'not-found', component: NotFoundComponent},
  {path:"", component: MainComponent},
  {path: '**', redirectTo:'not-found',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
