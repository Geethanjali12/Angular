import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CustomPipesPipe } from './index/custom-pipes.pipe';
import { DirectiveComponent } from './directive/directive.component';
import { ObservablesComponent } from './observables/observables.component';
import { BindingComponent } from './binding/binding.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CustomPipesPipe,
    DirectiveComponent,
    ObservablesComponent,
    BindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
