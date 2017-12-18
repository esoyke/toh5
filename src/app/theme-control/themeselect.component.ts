import { Component, OnInit, Input } from '@angular/core';
import { Theme } from './theme';
import { ThemeService } from './theme.service';

@Component({
    selector: 'theme-select',
    template: `
        <select [(ngModel)]="currentTheme">
            <option [disabled]="true" [ngValue]="null">Select</option>
            <option *ngFor="let theme of themes" [ngValue]="theme">{{theme.name}}</option>
        </select>
        <button (click)="setCurrentTheme()">Apply Theme</button>
    `
})

// small component to allow seleciton of theme
export class ThemeSelectComponent implements OnInit {
    themes: Theme[];
    @Input() currentTheme: Theme = null;

    constructor(private themeService: ThemeService) { }

    ngOnInit() { 
        this.getThemes();
    }
    getThemes(): void {
        this.themeService.getThemes()
        .subscribe(themes => this.themes = themes)
    }
    setCurrentTheme(): void {
        console.log('setting theme...');
        this.themeService.updateCurrentTheme(this.currentTheme)
    }
}
