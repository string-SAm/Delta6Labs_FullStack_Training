import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentsComponent } from './home-components/home-components.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ButtonComponent } from './button/button.component';
import { NameChangeComponent } from './name-change/name-change.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentsComponent,
    MyComponentComponent,
    ButtonComponent,
    NameChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
