import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { BienDetailsComponent } from './components/views/bien-details/bien-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'biens/:id', component: BienDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
