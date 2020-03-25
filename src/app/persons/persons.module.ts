import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPersonsComponent } from './list-persons/list-persons.component';
import { NewPersonsComponent } from './new-persons/new-persons.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [ListPersonsComponent, NewPersonsComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class PersonsModule { }
