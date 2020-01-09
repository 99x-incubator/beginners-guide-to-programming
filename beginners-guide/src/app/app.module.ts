import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ngx-bootstrap
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
