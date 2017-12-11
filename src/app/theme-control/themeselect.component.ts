import { Component, OnInit, Input } from '@angular/core';
import { Theme } from './theme';
import { ThemeService } from './theme.service';

@Component({
    selector: 'theme-select',
    templateUrl: 'themeselect.component.html'
})

// small component to allow seleciton of theme
export class ThemeSelectComponent implements OnInit {
    themes: Theme[];
    @Input() currentTheme: Theme;

    constructor(private themeService: ThemeService) { }

    ngOnInit() { 
        this.getThemes();
    }
    getThemes(): void {
        this.themeService.getThemes()
        .subscribe(themes => this.themes = themes)
    }
    setCurrentTheme(): void {
        this.themeService.updateCurrentTheme(this.currentTheme)
    }
}
