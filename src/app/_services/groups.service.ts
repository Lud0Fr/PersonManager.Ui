import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiUrl } from './base-api-urls';
import { map } from 'rxjs/operators';
import { GroupModel } from '../_models/group.model';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http: HttpClient) {
  }

  getGroups(): Observable<GroupModel[]> {
		return this.http
			.get<GroupModel[]>(BaseApiUrl.Persons + 'group')
			.pipe(
				map(result => {
					return result;
				})
			);
	}
}
