import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  search = '';

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  @HostListener('window:keydown', ['$event'])
  handleKeydownboardEvent(event: any) {
    if (event.key === 'Enter') {
      this.searchPerson();
    } 
  }

  onSearchPersonClick() {
    this.searchPerson();
  }

  searchPerson() {
    this._router.navigate(['persons/'], {queryParams: {search: this.search}});
  }
}
