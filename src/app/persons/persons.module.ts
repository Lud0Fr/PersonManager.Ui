import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPersonsComponent } from './list-persons/list-persons.component';
import { NewPersonsComponent } from './new-persons/new-persons.component';


@NgModule({
  declarations: [ListPersonsComponent, NewPersonsComponent],
  imports: [
    CommonModule
  ]
})
export class PersonsModule { }
