import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component';
import { MembersComponent } from './members/members.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'members', component: MembersComponent},
  {path: 'dashboard', component: DashboardComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
