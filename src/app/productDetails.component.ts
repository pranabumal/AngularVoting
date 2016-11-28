import { Component } from '@angular/core';

@Component({
    selector: 'details',
    template:`
      <div>
      Year: {{details.year}}<br/>
      Description: {{details.description}}<br/>
      </div>
      <input [(ngModel)]="details.name" />
<input [(ngModel)]="details.year" />
<input [(ngModel)]="details.description" />
<button> Create </button>
     
`,
    inputs: ['details']
})
export class ProductDetailsComponent {
    public details={}
}
