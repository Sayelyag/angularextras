import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { SubirComponent } from './components/subir-component/subir-component';
import { Service } from './services/service';

@NgModule({
  declarations: [App, HomeComponent, MenuComponent, SubirComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), Service],
  bootstrap: [App],
})
export class AppModule {}
