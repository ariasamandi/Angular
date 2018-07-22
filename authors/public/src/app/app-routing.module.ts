import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditComponent} from './edit/edit.component';
import {NewComponent} from './new/new.component';
import {MainComponent} from './main/main.component';
const routes: Routes = [
  {path: 'new', component: NewComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: '', component: MainComponent},
  {path: "", pathMatch: 'full', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
