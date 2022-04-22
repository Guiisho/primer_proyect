import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { NotPageFoundComponent } from './pages/not-page-found/not-page-found.component';
import { ServicesComponent } from './pages/services/services.component';
import { TeamComponent } from './pages/team/team.component';
import { DorsalComponent } from './pages/dorsal/dorsal.component';
import { BicepsComponent } from './pages/biceps/biceps.component';
import { TricepsComponent } from './pages/triceps/triceps.component';
import { CuadricepsComponent } from './pages/cuadriceps/cuadriceps.component';
import { IsquiotibialesComponent } from './pages/isquiotibiales/isquiotibiales.component';
import { GluteosComponent } from './pages/gluteos/gluteos.component';
import { GemelosComponent } from './pages/gemelos/gemelos.component';
import { PectoralComponent } from './pages/pectoral/pectoral.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'not-page-found', component: NotPageFoundComponent},
  {path:'',component: HomeComponent},
  {path:'pectoral',component: PectoralComponent},
  {path:'about', component: AboutComponent},
  {path:'team', component: TeamComponent},
  {path:'services', component: ServicesComponent},
  {path:'contact', component: ContactComponent},
  {path:'dorsal', component: DorsalComponent},
  {path:'biceps', component: BicepsComponent},
  {path:'triceps', component: TricepsComponent},
  {path:'cuadriceps', component: CuadricepsComponent},
  {path:'isquiotibiales', component: IsquiotibialesComponent},
  {path:'gluteos', component:GluteosComponent},
  {path:'gemelos', component: GemelosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
