import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
  NavbarComponent,
  HomeComponent
} from '../app/components/index';

const routes: Routes = [
	{path: 'index', component: HomeComponent},
	{path: 'navbar', component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
