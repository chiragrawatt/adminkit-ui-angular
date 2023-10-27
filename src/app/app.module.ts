import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarNavComponent } from './sidebar/sidebar-nav/sidebar-nav.component';
import { CtaComponent } from './sidebar/cta/cta.component';
import { DashboardComponent } from './main-content/dashboard/dashboard.component';
import { StatCardComponent } from './main-content/dashboard/stat-card/stat-card.component';
import { ProfileComponent } from './main-content/profile/profile.component';
import { BlankComponent } from './main-content/blank/blank.component';
import { ButtonsComponent } from './main-content/buttons/buttons.component';
import { FormsComponent } from './main-content/forms/forms.component';
import { CardsComponent } from './main-content/cards/cards.component';
import { TypographyComponent } from './main-content/typography/typography.component';
import { IconsComponent } from './main-content/icons/icons.component';
import { ChartsComponent } from './main-content/charts/charts.component';
import { MapsComponent } from './main-content/maps/maps.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MainContentComponent,
    FooterComponent,
    SidebarNavComponent,
    CtaComponent,
    DashboardComponent,
    StatCardComponent,
    ProfileComponent,
    BlankComponent,
    ButtonsComponent,
    FormsComponent,
    CardsComponent,
    TypographyComponent,
    IconsComponent,
    ChartsComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
