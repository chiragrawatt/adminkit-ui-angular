import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './main-content/dashboard/dashboard.component';
import { ProfileComponent } from './main-content/profile/profile.component';
import { BlankComponent } from './main-content/blank/blank.component';
import { ButtonsComponent } from './main-content/buttons/buttons.component';
import { FormsComponent } from './main-content/forms/forms.component';
import { CardsComponent } from './main-content/cards/cards.component';
import { TypographyComponent } from './main-content/typography/typography.component';

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "blank",
    component: BlankComponent
  },
  {
    path: "buttons",
    component: ButtonsComponent
  },
  {
    path: "forms",
    component: FormsComponent
  },
  {
    path: "cards",
    component: CardsComponent
  },
  {
    path: "typography",
    component: TypographyComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  { 
    path: '', 
    redirectTo: '/dashboard', 
    pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
