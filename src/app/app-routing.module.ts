import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TosComponent} from './tos/tos.component';
import {PrivacyComponent} from './privacy/privacy.component';


const routes: Routes = [
  { path: 'terms', component: TosComponent },
  { path: 'privacy', component: PrivacyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
