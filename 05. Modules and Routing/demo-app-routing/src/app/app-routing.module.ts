import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { UserListComponent } from './user/user-list/user-list.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

export const routes: Routes = [
  {
    path: '', 
    pathMatch: 'full', 
    redirectTo: 'user/list'
  },
  // {path: 'user/list', component: UserListComponent},
  {
    path: 'todo/list', 
    component: TodoListComponent},


];

// Do not need this for now (import AppRoutingModule in app.module.ts)
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
