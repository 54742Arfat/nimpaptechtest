import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProdashComponent } from './prodash/prodash.component';
import { NimapComponent } from './nimap/nimap.component'

const routes: Routes = [
{path:'cat', component:CategoryComponent},
{path:'prod',component:ProdashComponent},
{path:'sorted/:name',component:NimapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
