import { Component, OnInit } from '@angular/core';
import { PersonsService } from 'src/app/_services/persons.service';
import { ActivatedRoute } from '@angular/router';
import { PersonModel } from 'src/app/_models/person.model';

@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.scss']
})
export class ListPersonsComponent implements OnInit {

  private keyword = '';
  public persons: PersonModel[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _personsServices: PersonsService) {
      
  }

  ngOnInit() {
    this._route.queryParams.subscribe(params => {
      this.keyword = params['keyword'] || '';
      
      this.searchPersons();
    });
  }

  private searchPersons(): void {
    this._personsServices.searchPersons(this.keyword).subscribe((persons) => {
        this.persons = persons;
    });
  }
}
