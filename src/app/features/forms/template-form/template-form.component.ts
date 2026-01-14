import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-template-form',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './template-form.component.html',
    styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent {
    onSubmit(form: any) {
        if (form.valid) {
            alert('Template Form Submitted! Check console.');
            console.log(form.value);
            form.reset();
        }
    }
}
