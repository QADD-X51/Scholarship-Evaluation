import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInternComponent } from './add-intern/add-intern.component';
import { EditInternComponent } from './edit-intern/edit-intern.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch:"full" },
  { path: "add-intern/:id", component: EditInternComponent},
  { path: "add-intern", component: AddInternComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
