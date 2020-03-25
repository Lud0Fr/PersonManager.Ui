import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiUrl } from './base-api-urls';
import { map } from 'rxjs/operators';
import { PersonModel } from '../_models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(private http: HttpClient) {
  }

  createPerson(person: PersonModel): Observable<number> {
		let headers = new HttpHeaders();
		headers = headers.append('Content-Type', 'application/json');
    return this.http.post(BaseApiUrl.Persons + 'person', person, { headers: headers }).pipe(
      map((result: number) => {
        return result;
      })
    );
  }
  
  searchPersons(keyword: string): Observable<PersonModel[]> {
		return this.http
			.get<PersonModel[]>(BaseApiUrl.Persons + 'person?keyword=' + keyword)
			.pipe(
				map(result => {
					return result;
				})
			);
	}
}
