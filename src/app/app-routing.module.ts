import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { AnimationComponent } from './animation/animation.component';
import { BallComponent } from './ball/ball.component';

const routes: Routes = [
  // {path: '' , redirectTo: AnimationComponent},
  { path: '' , component: AnimationComponent},
  {path: 'todo', component: TodosComponent },
  {path: 'ball', component: BallComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
