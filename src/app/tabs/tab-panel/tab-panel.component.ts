import {
  Component,
  inject,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.css'],
  standalone: true,
})
export class TabPanelComponent implements OnInit, OnDestroy {
  @Input() title = '';

  @ViewChild(TemplateRef, { static: true }) panelBody!: TemplateRef<unknown>;

  private readonly tabGroup = inject(TabGroupComponent);

  ngOnInit() {
    this.tabGroup.addTapPanel(this);
  }

  ngOnDestroy(): void {
    this.tabGroup.removeTabPanel(this);
  }
}
