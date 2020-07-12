import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BioComponent } from './bio/bio.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full" },
  {path: "home", component: HomeComponent},
  {path: "contact", component: ContactComponent},
  {path: "bio", component: BioComponent},
  {path: "services", component: ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
