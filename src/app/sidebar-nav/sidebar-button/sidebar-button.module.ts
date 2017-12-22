// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { SidebarButtonComponent } from './sidebar-button.component';

@NgModule({
    imports: [

    ],
    declarations: [
        SidebarButtonComponent,
    ],
    exports: [
        SidebarButtonComponent,
    ]
})
export class SidebarButtonModule {
    navName: string;
}
