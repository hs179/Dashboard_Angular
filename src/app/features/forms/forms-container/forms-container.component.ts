import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentfieldComponent } from '../../parentfield/parentfield.component';
import { TemplateFormComponent } from '../template-form/template-form.component';

@Component({
    selector: 'app-forms-container',
    standalone: true,
    imports: [CommonModule, ParentfieldComponent, TemplateFormComponent],
    templateUrl: './forms-container.component.html',
    styleUrl: './forms-container.component.scss'
})
export class FormsContainerComponent {
    activeTab: 'reactive' | 'template' = 'reactive';

    setActiveTab(tab: 'reactive' | 'template') {
        this.activeTab = tab;
    }
}
