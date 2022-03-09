import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { IndexComponent } from './index/index.component';
import { ObservablesComponent } from './observables/observables.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'directive', component: DirectiveComponent},
  { path: 'observable', component: ObservablesComponent},
  { path: 'binding', component: BindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
