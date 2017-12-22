import { Component } from '@angular/core';
import { NavLink } from './navlink';
import { SidebarService } from './sidebar.service';

@Component({
    moduleId: module.id,
    selector: 'sidebar-nav',
    templateUrl: 'sidebar-nav.component.html',
    styleUrls: ['sidebar-nav.component.scss']
})
export class SidebarNavComponent {
    navlinks: NavLink[];
    
    constructor(private sidebarService: SidebarService) { }
    
    ngOnInit() { 
        this.getNavlinks();
    }
    getNavlinks(): void {
        this.sidebarService.getNavlinks()
        .subscribe(navlinks => this.navlinks = navlinks)
    }
}
