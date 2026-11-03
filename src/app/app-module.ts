import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { SubirComponent } from './components/subir-component/subir-component';
import { Service } from './services/service';
import { FormsModule } from '@angular/forms';
import { PdfComponent } from './components/pdf-component/pdf-component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from './interceptors/error-interceptor';
import { ErrorComponent } from './components/error-component/error-component';
import { EquipoComponent } from './components/equipo-component/equipo-component';
import { ServiceEquipos } from './services/service.equipos';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './components/login-component/login-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { ServiceEmpleados } from './services/service.empleados';
import { authTokenInterceptor } from './interceptors/auth-token-interceptor';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    MenuComponent,
    SubirComponent,
    PdfComponent,
    ErrorComponent,
    EquipoComponent,
    LoginComponent,
    SubordinadosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    Service,
    ServiceEquipos,ServiceEmpleados,
    provideHttpClient(withInterceptors([authTokenInterceptor, errorInterceptor])),
  ],
  bootstrap: [App],
})
export class AppModule {}