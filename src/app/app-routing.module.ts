import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HalfHourComponent } from './half-hour/half-hour.component';
import { OneHourComponent } from './one-hour/one-hour.component';
import { TwoHourComponent } from './two-hour/two-hour.component';
import { MoreTimeComponent } from './more-time/more-time.component';


const appRoutes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'content', component: ContentComponent},
  {path: 'halfhour', component: HalfHourComponent},
  {path: 'onehour', component: OneHourComponent},
  {path: 'twohour', component: TwoHourComponent},
  {path: 'moretime', component: MoreTimeComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
