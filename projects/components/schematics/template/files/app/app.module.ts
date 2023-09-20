import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ItskDropdownModule, ItskMenuModule, ItskNotificationsModule} from "@grafit/angular";
import {ThemeSwitchComponent} from "./theme-switch/theme-switch.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThemeSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ItskMenuModule,
    ItskNotificationsModule,
    ItskDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
