import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css'],
  standalone: true,
  imports: [NgFor, NgIf, NgTemplateOutlet],
  encapsulation: ViewEncapsulation.None,
})
export class TabGroupComponent {
  tabPanelList = [];
  tabActiveIndex = 0;

  selectItem(idx: number) {
    this.tabActiveIndex = idx;
  }

  addTapPanel(tab: any) {
    this.tabPanelList.push(tab);
  }

  removeTabPanel(tab: any) {
    let index = -1;
    const tabPanelList = [];
    this.tabPanelList.forEach((item, idx) => {
      if (tab === item) {
        index = idx;
        return;
      }
      tabPanelList.push(item);
    });
    this.tabPanelList = tabPanelList;
    if (index !== -1) {
      this.selectItem(0);
    }
  }
}
