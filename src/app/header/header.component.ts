import { Component } from '@angular/core';
import { ThemeService } from '../theme-control/theme.service';

@Component({
    moduleId: module.id,
    selector: 'header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent {

    constructor(private themeService: ThemeService) { }

    //logo = '/assets/logo-2113.png';
    logo(): any {
        //return '/assets/logo-2113.png';
        return this.themeService.logo();
    }
}
