import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menulistorder',
  templateUrl: './menulistorder.component.html',
  styleUrls: ['./menulistorder.component.css']
})
export class MenulistorderComponent implements OnInit {
  menus = [];
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.fetchProducts();
    this.menuService.getMenus().subscribe(data => {
      this.menus = [...data];
    });
  }

  addItemToCart(item) {
    this.menuService.addToCart(item._id);
  }
  itemInCart(item) {
    return this.menuService.findItemInCart(item._id);
  }

}
