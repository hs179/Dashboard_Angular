import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChildtableComponent } from './childtable/childtable.component';
import { ParentComponentComponent } from '../parent-component/parent-component.component';
import { Router } from '@angular/router';
import { ChartStateService } from '../../core/services/chart-state.service';

@Component({
  selector: 'app-parentfield',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ChildtableComponent],
  templateUrl: './parentfield.component.html',
  styleUrl: './parentfield.component.scss'
})
export class ParentfieldComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  public chartService = inject(ChartStateService);


  // Bank Types
  banktypeoption = [
    { id: 1, name: 'Commercial Bank' },
    { id: 2, name: 'Cooperative Bank' },
    { id: 3, name: 'Private Bank' },
    { id: 4, name: 'Public Sector Bank' }
  ];

  // All Banks
  allBanks = [
    { typeId: 1, name: 'HDFC Bank' },
    { typeId: 1, name: 'ICICI Bank' },
    { typeId: 2, name: 'Saraswat Bank' },
    { typeId: 2, name: 'Cosmos Bank' },
    { typeId: 3, name: 'Axis Bank' },
    { typeId: 3, name: 'Kotak Bank' },
    { typeId: 4, name: 'SBI' },
    { typeId: 4, name: 'PNB' }
  ];

  // This will show banks based on selected type
  filteredBankNames: any[] = [];

  // Simple form
  fieldform = this.fb.group({
    bankType: [''],
    bankName: [''],
    accountType: [''],
    accountNumber: ['']
  });

  // Watch when Bank Type changes
  ngOnInit() {
    this.fieldform.get('bankType')?.valueChanges.subscribe(value => {
      const id = Number(value);
      this.filteredBankNames = this.allBanks.filter(bank => bank.typeId === id);
      this.fieldform.patchValue({ bankName: '' }); // clear previous bank
    });
  }
  forchild: any[] = []
  onSubmit() {
    // const formData = this.fieldform.value;
    // this.forchild.push({
    //   BankType:formData.bankType,
    //   BankName:formData.bankName,
    //   AccountNumber:formData.accountNumber,
    //   AccountType:formData.accountType
    // });

    this.forchild.push(this.fieldform.value)
    console.log('Form Data:', this.fieldform.value, this.forchild);
    alert('Submitted Successfully!');
  }

  hasUnsavedChanges(): boolean {
    return this.fieldform.dirty || this.forchild.length > 0;
  }

  goToDashboard() {
    this.router.navigate(['/app/dash']);
  }

}