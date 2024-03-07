import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrl: './child-to-parent.component.css'
})
export class ChildToParentComponent {
@Output() getUpdatedData = new EventEmitter<string>();
}
