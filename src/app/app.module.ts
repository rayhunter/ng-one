import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from './user-auth/user-auth.module'
import { UiElementsModule } from './ui-elements/ui-elements.module'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CountryComponent } from './country/country.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HeaderComponent,
    StudentListComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    BrowserAnimationsModule,
    UiElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
