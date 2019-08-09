import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public user: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogout() {
    this.user.deleteToken();
    this.router.navigate(['/login']);
  }

}//End class
