import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveComponent } from './directive/directive.component';
import { IndexComponent } from './index/index.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'directive', component: DirectiveComponent},
  { path: 'life-cycle-hooks', component: LifeCycleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
