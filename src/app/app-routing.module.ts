import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TosComponent } from './tos/tos.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormComponent } from './form/form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TypodemoComponent} from './typodemo/typodemo.component';
import { ButtondemoComponent } from './buttondemo/buttondemo.component';
import { IcondemoComponent } from './icondemo/icondemo.component';
import { BadgedemoComponent } from './badgedemo/badgedemo.component';
import {ToolbardemoComponent} from './toolbardemo/toolbardemo.component';
import {ListdemoComponent} from './listdemo/listdemo.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'list', component: ListdemoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'nav', component: NavigationComponent },
  { path: 'form', component: FormComponent },
  { path: 'terms', component: TosComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'button', component: ButtondemoComponent },
  { path: 'badge', component: BadgedemoComponent },
  { path: 'icon', component: IcondemoComponent },
  { path: 'toolbar', component: ToolbardemoComponent },
  { path: 'typo', component: TypodemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
