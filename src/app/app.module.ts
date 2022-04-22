import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TeamComponent } from './pages/team/team.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { NotPageFoundComponent } from './pages/not-page-found/not-page-found.component';
import { PectoralComponent } from './pages/pectoral/pectoral.component';
import { DorsalComponent } from './pages/dorsal/dorsal.component';
import { BicepsComponent } from './pages/biceps/biceps.component';
import { TricepsComponent } from './pages/triceps/triceps.component';
import { CuadricepsComponent } from './pages/cuadriceps/cuadriceps.component';
import { IsquiotibialesComponent } from './pages/isquiotibiales/isquiotibiales.component';
import { GluteosComponent } from './pages/gluteos/gluteos.component';
import { GemelosComponent } from './pages/gemelos/gemelos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    TeamComponent,
    ServicesComponent,
    AboutComponent,
    NotPageFoundComponent,
    PectoralComponent,
    DorsalComponent,
    BicepsComponent,
    TricepsComponent,
    CuadricepsComponent,
    IsquiotibialesComponent,
    GluteosComponent,
    GemelosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
