import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SubmitbtnComponent } from './submitbtn/submitbtn.component';

@NgModule({
  declarations: [
    AppComponent,
  
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    SubmitbtnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,HeaderComponent]
})
export class AppModule { }
