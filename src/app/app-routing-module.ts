import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { SubirComponent } from './components/subir-component/subir-component';
import { PdfComponent } from './components/pdf-component/pdf-component';
import { ErrorComponent } from './components/error-component/error-component';
import { EquipoComponent } from './components/equipo-component/equipo-component';
import { LoginComponent } from './components/login-component/login-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';

const routes: Routes = [
    {path:"", component : HomeComponent},
    {path:"subirfoto", component : SubirComponent},
    {path:"pdf", component : PdfComponent},
    {path:"error", component : ErrorComponent},
    {path:"equipo", component : EquipoComponent},
    {path:"login", component : LoginComponent},
    {path:"subordinados", component : SubordinadosComponent},


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
