import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPersonsComponent } from './list-persons/list-persons.component';
import { NewPersonsComponent } from './new-persons/new-persons.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListPersonsComponent, NewPersonsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class PersonsModule { }
