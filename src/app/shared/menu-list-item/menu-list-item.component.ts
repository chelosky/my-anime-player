import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from '../../models/interfaces/nav-item.interface';
import { indicatorRotate } from '../../utils/animations';
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from '@angular/material/icon';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.css'],
  animations: [
    indicatorRotate
  ]
})
export class MenuListItemComponent {

  expanded: boolean = false;

  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItem;
  @Input() depth: number;
  
  constructor(
    public router: Router,
    public sidebarService: SidebarService
  ) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  onItemSelected(item: NavItem) {

    if (!item.children || !item.children.length) {
        if (item.route) {
            this.router.navigate([item.route]);
        } else {
            this.handleSpecial(item);
        }
    } 

    if (item.children && item.children.length) {
        this.expanded = !this.expanded;
    }
  }

  handleSpecial(item: NavItem) {
    if (item.displayName == 'Sign Out') {
      //
    }
  }

}
