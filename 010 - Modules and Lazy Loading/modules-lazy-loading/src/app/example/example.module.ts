import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExampleOneComponent } from './example-one/example-one.component';
import { ExampleRoutingModule } from './example-routing.module';
import { ExampleTwoComponent } from './example-two/example-two.component';
import { ExampleComponent } from './example.component';

@NgModule({
  declarations: [ExampleComponent, ExampleOneComponent, ExampleTwoComponent],
  imports: [CommonModule, ExampleRoutingModule],
})
export class ExampleModule {}
