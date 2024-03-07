import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-parent-to-child',
  templateUrl: './parent-to-child.component.html',
  styleUrl: './parent-to-child.component.css'
})
export class ParentToChildComponent {
@Input()item = 0;
}
