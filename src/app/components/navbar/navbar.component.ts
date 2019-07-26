import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit {

  constructor(private navbarService: NavbarService) { }
  //   isNavbarCollapsed = this.navbarService.isNavbarCollapsed;
      get isNavbarCollapsed(): boolean {
          return this.navbarService.isNavbarCollapsed;
      }
  
      set isNavbarCollapsed(value: boolean) {
          this.navbarService.isNavbarCollapsed = value;
      }
  
     toggleNavbar () {
      this.navbarService.toggleNavbar();
    }
  
    ngOnInit() {
        this.navbarService.isNavbarCollapsed = true;
    }

}
