import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabGroupComponent } from './tabs/tab-group/tab-group.component';
import { TabPanelComponent } from './tabs/tab-panel/tab-panel.component';
import { Bar, Content, CustomBar, CustomBarWork, Foo } from './dummy/dummy';
import { BsTabGroupComponent } from './tabs/bs-tab-group/bs-tab-group.component';
import { CustomTabGroupComponent } from './tabs/custom-tab-group/custom-tab-group.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    Foo,
    Bar,
    Content,
    CustomBar,
    CustomBarWork,
    TabGroupComponent,
    TabPanelComponent,
    BsTabGroupComponent,
    CustomTabGroupComponent
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
