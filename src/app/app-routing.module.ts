import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { ChildInputPropertyComponent } from './input-property/child-input-property/child-input-property.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [
  {
    path: 'input-property',
    component: InputPropertyComponent,
  },
  {
    path: 'output-property',
    component: OutputPropertyComponent,
  },
  {
    path: 'reactive-forms',
    component: ReactiveFormsComponent,
  },
  { path: '**', component: InputPropertyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
