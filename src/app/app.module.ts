import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodosComponent } from './todos/todos.component';
import { AnimationComponent } from './animation/animation.component';
import { BallComponent } from './ball/ball.component';
import { ButtonComponent } from './ball/button/button.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodosComponent,
    AnimationComponent,
    BallComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
