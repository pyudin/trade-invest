import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MainComponent } from './main/main.component';
import { StartedComponent } from './started/started.component';
import { PeopleComponent } from './people/people.component';
import { QuestionsComponent } from './questions/questions.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, MainComponent, StartedComponent, PeopleComponent, QuestionsComponent, ContactComponent],
  imports: [BrowserModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
