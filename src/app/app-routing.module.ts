import { RepositoryComponent } from './repository/repository.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'',redirectTo:'profiles',pathMatch:'full'},
  {path:'profiles',component:UsersComponent},
  {path:'repos',component:RepositoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
