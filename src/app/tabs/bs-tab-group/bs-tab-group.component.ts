import { Component , forwardRef} from '@angular/core';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { TabGroupComponent } from '../tab-group/tab-group.component';

const BsTabGroupProvider = {
  provide: TabGroupComponent,
  useExisting: forwardRef(() => BsTabGroupComponent),
};

@Component({
  selector: 'app-bs-tab-group',
  templateUrl: './bs-tab-group.component.html',
  styleUrls: ['./bs-tab-group.component.css'],
  standalone: true,
  providers: [BsTabGroupProvider],
  imports: [NgFor, NgIf, NgTemplateOutlet],
})
export class BsTabGroupComponent extends TabGroupComponent {}
