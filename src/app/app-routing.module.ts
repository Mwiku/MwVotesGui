import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
  NavbarComponent,
  HomeComponent,
  ParliamentaryVoteComponent,
  PresidentialVoteComponent,
  OverviewComponent,
  ContactUsComponent
} from '../app/components/index';

const routes: Routes = [
	  {path: 'index', component: HomeComponent},
    {path: 'navbar', component: NavbarComponent},
    {path: 'parliamentary-vote', component: ParliamentaryVoteComponent},
    {path: 'presidential-vote', component: PresidentialVoteComponent},
    {path: 'overview', component: OverviewComponent},
    {path: 'contact-us', component: ContactUsComponent},
    {path: '', redirectTo:'/index', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
