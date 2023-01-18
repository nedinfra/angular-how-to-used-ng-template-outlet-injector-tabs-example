import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { Bar, Content, CustomBar, CustomBarWork, Foo } from './dummy/dummy';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    Foo , 
    Bar, 
    Content, 
    CustomBar,
    CustomBarWork
  ],
  declarations: [
    AppComponent,
    TabGroupComponent,
    TabPanelComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
