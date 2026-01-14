import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-childtable',
  standalone: true,
  imports: [],
  templateUrl: './childtable.component.html',
  styleUrl: './childtable.component.scss'
})
export class ChildtableComponent {

  @Input() record:any[]=[];

}
