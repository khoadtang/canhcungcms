import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './partials/header-bar/header-bar.component';
import { MainMenuComponent } from './partials/main-menu/main-menu.component';
import {LoginComponent} from './pages/login/login.component';
import {MainComponent} from './pages/main/main.component';
import {AgendasComponent} from './pages/main/agendas/agendas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    MainMenuComponent,
    LoginComponent,
    MainComponent,
    AgendasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
