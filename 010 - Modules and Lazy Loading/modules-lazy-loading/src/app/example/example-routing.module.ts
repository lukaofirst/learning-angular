import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleOneComponent } from './example-one/example-one.component';
import { ExampleTwoComponent } from './example-two/example-two.component';
import { ExampleComponent } from './example.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleComponent,
    children: [
      { path: 'exampleOne', component: ExampleOneComponent },
      { path: 'exampleTwo', component: ExampleTwoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleRoutingModule {}
