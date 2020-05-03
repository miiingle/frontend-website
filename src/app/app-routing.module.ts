import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {PrivacyPageComponent} from './privacy-page/privacy-page.component';
import {TermsPageComponent} from './terms-page/terms-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'privacy', component: PrivacyPageComponent},
  {path: 'terms', component: TermsPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
