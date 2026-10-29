import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { SubirComponent } from './components/subir-component/subir-component';

const routes: Routes = [
    {path:"", component : HomeComponent},
    {path:"subirfoto", component : SubirComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
