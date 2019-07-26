import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  public isNavbarCollapsed = true;

    constructor() {

    }

    public toggleNavbar() {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    }
}
