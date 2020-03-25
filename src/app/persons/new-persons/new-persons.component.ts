import { Component, OnInit } from '@angular/core';
import { GroupsService } from 'src/app/_services/groups.service';
import { GroupModel } from 'src/app/_models/group.model';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PersonsService } from 'src/app/_services/persons.service';
import { PersonModel } from 'src/app/_models/person.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-new-persons',
  templateUrl: './new-persons.component.html',
  styleUrls: ['./new-persons.component.scss']
})
export class NewPersonsComponent implements OnInit {

  newPersonForm: FormGroup;
  public groups: GroupModel[] = [];

  get name() { return this.newPersonForm.get('name') as FormControl; }
  get group() { return this.newPersonForm.get('group') as FormControl; }

  constructor(
    private _formBuilder: FormBuilder,
    private _groupsService: GroupsService,
    private _personsService: PersonsService,
    private _snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.newPersonForm = this._formBuilder.group({
      name : ['', [Validators.required, Validators.max(100)]],
      group : ['', [Validators.required]],
    });

    this.initGroups();
  }

  private initGroups(): void {
    this._groupsService.getGroups().subscribe((groups) => {
      this.groups = groups;
    });
  }

  public onSubmit(): void {
    if (this.newPersonForm.valid) {
      this._personsService.createPerson(this.newPerson()).subscribe(
        () =>
        {
          this.openSnackBar("Person created");
        },
        () =>
        {
          this.openSnackBar("Opps, something went wrong...");
        }
      );
    }
  }

  private newPerson(): PersonModel {
    return {
      name: this.name.value,
      groupId: this.group.value
    }
  }

  private openSnackBar(message: string): void {
		this._snackBar.open(message, null, {
			duration: 5000
		});
	}
}
