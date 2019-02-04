import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { WelcomeComponent } from './welcome/welcome.component';


const appRoutes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'content', component: ContentComponent},
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
