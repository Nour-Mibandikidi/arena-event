import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventPageComponent } from './event-page/event-page.component';
import { EventService } from './shared/service/event.service';
import { FiltreComponent } from './filtre/filtre.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HoverDirective } from './directive/hover.directive';
import { PercentagePipe } from './shared/pipes/percentage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    EventListComponent,
    EventPageComponent,
    FiltreComponent,
    ProfileComponent,
    HoverDirective,
    PercentagePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [EventService],
  bootstrap: [AppComponent],
})
export class AppModule {}
