import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ContentChild,
  Injector,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';

@Component({
  selector: 'app-custom-tab-group',
  templateUrl: './custom-tab-group.component.html',
  styleUrls: ['./custom-tab-group.component.css'],
  standalone: true,
  imports: [TabGroupComponent, NgTemplateOutlet],
  styles: [
    `
    :host::ng-deep .tab-header{
      display: flex;
      gap: 1rem;
      padding: 1rem;
      justify-content: space-evenly;
      font-weight : bold;
      font-size: large;
    }
  `,
  ],
})
export class CustomTabGroupComponent implements OnInit {
  @ContentChild(TemplateRef, { static: true }) template!: TemplateRef<unknown>;

  @ViewChild(TabGroupComponent, { read: ViewContainerRef, static: true })
  tabGroupVcr!: ViewContainerRef;

  injector! : Injector;

  ngOnInit() {
    this.injector = this.tabGroupVcr.injector;
  }
}
