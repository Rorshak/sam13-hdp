import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
cart = [];
  constructor(
    public user: UserService,
    private router: Router,
    public menuService: MenuService
  ) { }

  ngOnInit() {
    this.menuService.getCart().subscribe(data =>{
      this.cart = [...data];
    });
  }

  onLogout() {
    this.user.deleteToken();
    this.router.navigate(['/home']);
  }

}//End class
